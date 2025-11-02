import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Load knowledge base
const knowledgeBasePath = path.join(process.cwd(), 'groenvastbouw_knowledge_base.md');
let knowledgeBase = '';

try {
  knowledgeBase = fs.readFileSync(knowledgeBasePath, 'utf-8');
} catch (error) {
  console.error('Failed to load knowledge base:', error);
}

const SYSTEM_PROMPT = `You are a helpful AI assistant for Groenvastbouw, a Dutch company specializing in high-performance passive houses.

Your role:
- Answer questions about Groenvastbouw's passive houses, pricing, technology, and services
- Be friendly, professional, and informative
- Always respond in the same language as the user's question (Dutch or English)
- If asked about topics outside of Groenvastbouw's services, politely redirect to relevant information
- Encourage users to contact info@groenvastbouw.nl or call 06 2984 1297 for detailed quotes or specific questions

Knowledge Base:
${knowledgeBase}

Guidelines:
- Keep responses concise and clear (2-4 paragraphs maximum)
- Use bullet points for lists
- Include specific prices and details when relevant
- Always be helpful and encouraging
- If you don't know something, admit it and suggest contacting the team directly`;

router.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required' });
    }

    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

    if (!DEEPSEEK_API_KEY) {
      console.error('DEEPSEEK_API_KEY not configured');
      return res.status(500).json({ error: 'AI service not configured' });
    }

    // Prepare messages with system prompt
    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    // Call DeepSeek API
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 800,
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('DeepSeek API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'AI service error',
        details: errorText 
      });
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response:', data);
      return res.status(500).json({ error: 'Invalid AI response' });
    }

    const assistantMessage = data.choices[0].message.content;

    res.json({ 
      message: assistantMessage,
      usage: data.usage 
    });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
