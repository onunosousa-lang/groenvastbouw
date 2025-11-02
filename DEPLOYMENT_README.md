# Groenvastbouw Website - Deployment Guide

## ✅ What's Implemented

### 1. AI Chatbot (DeepSeek)
- Conversational AI assistant
- Knowledge base integration
- Multi-language support (NL/EN)
- Real-time responses
- WhatsApp integration

### 2. Contact Form (EmailJS)
- Email sending via EmailJS
- Custom SMTP configuration (mijndomain.nl)
- Form validation
- Success/error notifications

### 3. Full Website
- Responsive design
- SEO optimized
- Multi-language (Dutch/English)
- Project showcase
- Pricing information
- FAQ section

---

## 🚀 Deployment Instructions

### Prerequisites

1. **Vercel Account** (already set up)
2. **GitHub Repository** (already connected)
3. **DeepSeek API Key** (already configured)
4. **EmailJS Account** (already set up)

### Environment Variables Required

Configure in **Vercel Dashboard > Settings > Environment Variables**:

```
# DeepSeek AI Chatbot
DEEPSEEK_API_KEY=your_deepseek_api_key

# EmailJS Contact Form
VITE_EMAILJS_SERVICE_ID=service_5a3jxhj
VITE_EMAILJS_TEMPLATE_ID=template_vqij8k8
VITE_EMAILJS_PUBLIC_KEY=XkG6oJb3itfiAFszT
```

### Deployment Steps

1. **Push to GitHub:**
   ```bash
   git add -A
   git commit -m "Add AI chatbot and fix contact form"
   git push origin main
   ```

2. **Vercel Auto-Deploy:**
   - Vercel automatically detects the push
   - Builds and deploys the new version
   - Takes 2-3 minutes

3. **Verify Deployment:**
   - Visit your Vercel URL
   - Test AI chatbot
   - Test contact form
   - Check all pages

---

## 🧪 Testing Checklist

### AI Chatbot
- [ ] Click chat button (bottom right)
- [ ] Ask: "What are your prices?"
- [ ] Ask: "How long does construction take?"
- [ ] Ask: "Tell me about passive houses"
- [ ] Verify responses are accurate
- [ ] Test in both Dutch and English

### Contact Form
- [ ] Scroll to contact section
- [ ] Fill in all fields
- [ ] Click "Verzenden"
- [ ] Check for success message
- [ ] Verify email received at info@groenvastbouw.nl

### General Website
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Images load
- [ ] Mobile responsive
- [ ] Language switcher works
- [ ] All sections visible

---

## 📊 Monitoring

### Vercel Dashboard

Check:
- Deployment status
- Build logs
- Function logs (for API routes)
- Analytics

### DeepSeek Usage

Monitor at: https://platform.deepseek.com/usage

- Token usage
- API calls
- Costs

### EmailJS Dashboard

Check at: https://dashboard.emailjs.com/

- Emails sent
- Quota remaining (200/month free)
- Delivery status

---

## 🐛 Troubleshooting

### AI Chatbot Not Working

**Symptoms:** Chat opens but no response

**Solutions:**
1. Check `DEEPSEEK_API_KEY` in Vercel
2. Verify API key is valid at DeepSeek dashboard
3. Check Vercel function logs for errors
4. Ensure `groenvastbouw_knowledge_base.md` exists

### Contact Form Not Sending

**Symptoms:** Form submits but no email received

**Solutions:**
1. Verify all 3 EmailJS environment variables are set
2. Check EmailJS dashboard for errors
3. Verify SMTP configuration in EmailJS
4. Test email delivery manually in EmailJS

### Website Shows 404

**Symptoms:** Vercel URL shows "NOT_FOUND"

**Solutions:**
1. Check build completed successfully
2. Verify `dist/public` directory exists after build
3. Check Vercel build logs
4. Ensure `package.json` scripts are correct

---

## 📁 Project Structure

```
groenvastbouw/
├── client/                          # Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIChat.tsx          # AI Chatbot component
│   │   │   └── ...
│   │   ├── pages/
│   │   │   └── Home.tsx            # Main page with contact form
│   │   └── ...
│   └── public/                      # Static assets
├── server/                          # Backend
│   ├── routes/
│   │   └── chat.ts                 # AI chatbot API route
│   └── _core/
│       └── index.ts                # Server entry point
├── groenvastbouw_knowledge_base.md # AI knowledge base
├── AI_CHATBOT_IMPLEMENTATION_GUIDE.md
├── DEPLOYMENT_README.md
└── package.json
```

---

## 🔄 Making Updates

### Update AI Knowledge Base

1. Edit `groenvastbouw_knowledge_base.md`
2. Commit and push
3. Vercel auto-deploys
4. Test chatbot with new information

### Update Contact Form

1. Edit `client/src/pages/Home.tsx`
2. Modify form fields or validation
3. Commit and push
4. Test form submission

### Update Website Content

1. Edit relevant files in `client/src/`
2. Commit and push
3. Verify changes on live site

---

## 💰 Cost Breakdown

### Hosting (Vercel)
- **Free tier:** Sufficient for this project
- **Pro tier:** €20/month (if needed for more traffic)

### AI Chatbot (DeepSeek)
- **Estimated:** €1-10/month depending on usage
- **Very affordable** compared to alternatives

### Email (EmailJS)
- **Free tier:** 200 emails/month
- **Paid tier:** €10/month for 1,000 emails

### Domain
- **Already owned:** No additional cost

**Total estimated monthly cost:** €0-20 (very low!)

---

## 📞 Support

For questions or issues:

**Email:** info@groenvastbouw.nl  
**Phone:** 06 2984 1297

---

## 🎉 Success!

Your website is now live with:
- ✅ AI-powered chatbot
- ✅ Working contact form
- ✅ Professional design
- ✅ Mobile responsive
- ✅ SEO optimized

**Next steps:**
1. Share website with customers
2. Monitor chatbot conversations
3. Collect feedback
4. Iterate and improve

---

**Last updated:** November 2, 2024
