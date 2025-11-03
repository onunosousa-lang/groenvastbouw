<<<<<<< HEAD
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
=======
import { Router, Request, Response } from "express";

const router = Router();

// Knowledge base about Groenvastbouw
const KNOWLEDGE_BASE = `
# Groenvastbouw - Duurzame Passieve Huizen

## Bedrijfsinformatie
- **Naam:** Groenvastbouw
- **Specialisatie:** Ecologische houtskeletbouw, prefabconstructies en duurzame renovatie
- **Locatie:** Nederland (Wageningen, Gelderland)
- **Contact:** info@groenvastbouw.nl | 06 2984 1297
- **Missie:** Duurzame, hoogwaardige woningbouw toegankelijk maken voor Nederlandse gezinnen zonder premium prijzen

## Technologie - Senmar Portugal Partnership
- Samenwerking met Senmar, gerenommeerde Portugese fabrikant
- State-of-the-art fabriek in centraal Portugal
- Hoogwaardige geprefabriceerde elementen
- CE-gecertificeerde producten
- FSC-gecertificeerd hout
- Isolatiewaarden tot R10 (super passief)

## Prijzen (Alleen Structuur)
### OPTIMAL - Hoge Prestaties
- **€950-€1,050/m²**
- R-waarde 5.7
- 200mm isolatie
- BENG-conform
- 70-80% energiebesparing

### PASSIVE - Premium Prestaties (POPULAIR)
- **€1,100-€1,200/m²**
- R-waarde 8.5
- 300mm isolatie
- BENG++
- 85-90% energiebesparing

### SUPER PASSIVE - Passivhaus Gecertificeerd
- **€1,250-€1,350/m²**
- R-waarde 9.9
- 350mm isolatie
- Passivhaus certificering
- 90% energiebesparing

**Exclusief:** Transport (€13.200), montage, funderingen

## Diensten
1. **Passieve Woningen** - Energie-efficiënte nieuwbouw
2. **Kantoren & Bedrijfspanden** - Duurzame commerciële ruimtes
3. **Uitbreidingen & Renovaties** - Verduurzaming bestaande woningen
4. **Advies & Consultancy** - Professioneel advies over duurzaam bouwen
5. **Development & Ontwerp** - Van concept tot realisatie

## Voordelen
- **Energiebesparing:** Tot €2.100/jaar (€42.000 over 20 jaar)
- **Comfort:** Constante 20-22°C, geen koude plekken
- **Snelle bouw:** 7-10 dagen structuurmontage
- **Duurzaam:** 50+ jaar levensduur, lage CO₂-voetafdruk
- **Kwaliteit:** Alleen hoogwaardige materialen

## Timeline
- **Structuur:** 3 maanden (inclusief transport en montage)
- **Turnkey:** +3 maanden (funderingen, afwerking, installaties)
- **Totaal:** 4-6 maanden

## Wat We Bouwen
- Woningen en chalets
- Commerciële gebouwen
- Woongebouwen
- Tiny houses / bungalows
- Sauna's en bijgebouwen
- Buitenaanleg
`;

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

router.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error("DEEPSEEK_API_KEY not configured");
      return res.status(500).json({ 
        error: "AI service not configured. Please contact info@groenvastbouw.nl" 
      });
    }

    // Prepare messages for DeepSeek
    const messages: ChatMessage[] = [
      {
        role: "system",
        content: `Je bent een behulpzame AI-assistent voor Groenvastbouw, een Nederlands bedrijf gespecialiseerd in duurzame passieve huizen.

${KNOWLEDGE_BASE}

INSTRUCTIES:
- Beantwoord vragen in het Nederlands (of Engels als de gebruiker Engels spreekt)
- Wees vriendelijk, professioneel en behulpzaam
- Gebruik de bovenstaande informatie om nauwkeurige antwoorden te geven
- Als je iets niet weet, verwijs naar info@groenvastbouw.nl of 06 2984 1297
- Benadruk de voordelen: energiebesparing, comfort, snelle bouw, kwaliteit
- Vermeld altijd dat prijzen exclusief transport (€13.200), montage en funderingen zijn`
      },
      ...history,
      {
        role: "user",
        content: message
      }
    ];

    // Call DeepSeek API
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages,
        temperature: 0.7,
        max_tokens: 1000
>>>>>>> d107bbc7995b86a01d310a42be5314f0e7f215ce
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
<<<<<<< HEAD
      console.error('DeepSeek API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'AI service error',
        details: errorText 
=======
      console.error("DeepSeek API error:", response.status, errorText);
      return res.status(500).json({ 
        error: "AI service temporarily unavailable. Please try again or contact info@groenvastbouw.nl" 
>>>>>>> d107bbc7995b86a01d310a42be5314f0e7f215ce
      });
    }

    const data = await response.json();
<<<<<<< HEAD
    
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
=======
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      console.error("No reply from DeepSeek:", data);
      return res.status(500).json({ 
        error: "No response from AI. Please contact info@groenvastbouw.nl" 
      });
    }

    res.json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ 
      error: "An error occurred. Please contact info@groenvastbouw.nl or call 06 2984 1297" 
>>>>>>> d107bbc7995b86a01d310a42be5314f0e7f215ce
    });
  }
});

export default router;
