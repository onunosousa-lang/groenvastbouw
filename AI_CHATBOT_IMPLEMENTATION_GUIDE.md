# AI Chatbot Implementation Guide - DeepSeek Integration

## Overview

This guide explains how the AI chatbot system is implemented in Groenvastbouw website using DeepSeek API. This system is **replicable** and can be offered as a service to other companies.

---

## Architecture

### Components

1. **Frontend Component** (`client/src/components/AIChat.tsx`)
   - React component with chat UI
   - Handles user input and displays messages
   - Sends requests to backend API

2. **Backend API Route** (`server/routes/chat.ts`)
   - Express route handler for `/api/chat`
   - Loads company knowledge base
   - Calls DeepSeek API with context
   - Returns AI-generated responses

3. **Knowledge Base** (`groenvastbouw_knowledge_base.md`)
   - Markdown file with company information
   - Loaded into system prompt
   - Provides context for AI responses

---

## Setup Instructions

### 1. Environment Variables

Add to Vercel (or `.env` for local development):

```
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

### 2. Install Dependencies

```bash
pnpm add @emailjs/browser
```

(Already included in package.json)

### 3. Knowledge Base

Create a `groenvastbouw_knowledge_base.md` file in the project root with:
- Company overview
- Products/services
- Pricing information
- FAQs
- Contact information

---

## How It Works

### 1. User Interaction

User opens chat widget → Types question → Clicks send

### 2. Frontend Processing

```typescript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages: [...conversationHistory] }),
});
```

### 3. Backend Processing

```typescript
// Load knowledge base
const knowledgeBase = fs.readFileSync('groenvastbouw_knowledge_base.md', 'utf-8');

// Create system prompt
const SYSTEM_PROMPT = `You are a helpful AI assistant for [Company Name]...
Knowledge Base: ${knowledgeBase}`;

// Call DeepSeek API
const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
  },
  body: JSON.stringify({
    model: 'deepseek-chat',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...userMessages
    ]
  })
});
```

### 4. Response Delivery

AI response → Backend → Frontend → Display to user

---

## Customization for Other Companies

### Step 1: Update Knowledge Base

Replace `groenvastbouw_knowledge_base.md` with client's information:

```markdown
# [Company Name] Knowledge Base

## Company Overview
[Company description]

## Products/Services
[Product details]

## Pricing
[Pricing information]

## FAQs
[Common questions and answers]
```

### Step 2: Update System Prompt

In `server/routes/chat.ts`, modify:

```typescript
const SYSTEM_PROMPT = `You are a helpful AI assistant for [Company Name], 
a [industry] company specializing in [services].

Your role:
- Answer questions about [Company]'s [products/services]
- Be [tone: friendly/professional/technical]
- Always respond in the same language as the user
- Encourage users to contact [email] or call [phone]

Knowledge Base:
${knowledgeBase}`;
```

### Step 3: Update Branding

In `client/src/components/AIChat.tsx`:

- Change logo: `<img src="/logo-icon.png" />`
- Update colors: `bg-green-600` → `bg-[brand-color]`
- Modify welcome message
- Update company name in text

### Step 4: Configure Environment

Set up DeepSeek API key in client's Vercel project:

```
DEEPSEEK_API_KEY=client_api_key
```

---

## Cost Considerations

### DeepSeek Pricing (as of 2024)

- **Input:** $0.14 per million tokens
- **Output:** $0.28 per million tokens

### Estimated Costs

**Average conversation:**
- 5 messages × 200 tokens = 1,000 tokens input
- 5 responses × 300 tokens = 1,500 tokens output
- **Cost per conversation:** ~$0.0006 (€0.0006)

**Monthly estimates:**
- 100 conversations/month: ~€0.06
- 1,000 conversations/month: ~€0.60
- 10,000 conversations/month: ~€6.00

**Very affordable** compared to human support!

---

## Features

### ✅ Implemented

- Real-time conversational AI
- Context-aware responses
- Multi-language support (detects user language)
- Knowledge base integration
- Conversation history
- Loading states
- Error handling
- WhatsApp integration button
- Mobile responsive design

### 🔮 Future Enhancements

- Streaming responses (real-time typing effect)
- Conversation analytics
- Lead capture integration
- CRM integration
- Multi-file knowledge base
- RAG (Retrieval Augmented Generation) for large knowledge bases
- Conversation export
- Admin dashboard

---

## Replication Checklist

For each new client:

- [ ] Create knowledge base markdown file
- [ ] Update system prompt with company info
- [ ] Customize branding (colors, logo, name)
- [ ] Configure DeepSeek API key
- [ ] Test with sample questions
- [ ] Deploy to Vercel
- [ ] Monitor usage and costs
- [ ] Collect feedback for improvements

---

## Support & Maintenance

### Updating Knowledge Base

Simply edit the markdown file and redeploy. No code changes needed!

### Monitoring

Check Vercel logs for:
- API errors
- Response times
- Usage patterns

### Troubleshooting

**Chat not responding:**
1. Check DEEPSEEK_API_KEY is set in Vercel
2. Verify API key is valid
3. Check Vercel function logs

**Wrong information:**
1. Update knowledge base
2. Adjust system prompt
3. Add more specific examples

---

## Technical Details

### API Endpoint

```
POST /api/chat
Content-Type: application/json

{
  "messages": [
    { "role": "user", "content": "What are your prices?" }
  ]
}
```

### Response Format

```json
{
  "message": "AI response text",
  "usage": {
    "prompt_tokens": 500,
    "completion_tokens": 200,
    "total_tokens": 700
  }
}
```

### Error Handling

```json
{
  "error": "Error description",
  "details": "Detailed error message"
}
```

---

## Security Considerations

1. **API Key Protection:**
   - Never expose DEEPSEEK_API_KEY in frontend
   - Use environment variables only
   - Rotate keys periodically

2. **Rate Limiting:**
   - Consider implementing rate limiting
   - Prevent abuse and control costs

3. **Input Validation:**
   - Validate user input
   - Sanitize messages
   - Limit message length

4. **Data Privacy:**
   - Don't log sensitive user information
   - Comply with GDPR
   - Clear conversation history appropriately

---

## Conclusion

This AI chatbot system is:
- ✅ Easy to implement
- ✅ Cost-effective
- ✅ Highly customizable
- ✅ Scalable
- ✅ Production-ready

Perfect for offering as a **white-label service** to clients!

---

**Questions?** Contact: info@groenvastbouw.nl
