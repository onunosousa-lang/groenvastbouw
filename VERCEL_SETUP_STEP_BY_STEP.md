# Guia Passo-a-Passo: Configurar Vercel

## ✅ Favicon Corrigido

O favicon foi atualizado para o logo correto e já está no GitHub. O Vercel irá atualizá-lo automaticamente no próximo deploy.

---

## 🚨 CONFIGURAÇÃO URGENTE: Variáveis de Ambiente

Para o chatbot AI e formulário de contacto funcionarem, precisa configurar 4 variáveis de ambiente no Vercel.

---

## 📋 Passo 1: Aceder ao Vercel Dashboard

1. Abra o browser
2. Vá para: **https://vercel.com/dashboard**
3. Faça login se necessário
4. Clique no projeto **"groenvastbouw"**

---

## 📋 Passo 2: Ir para Settings

1. No topo da página, clique em **"Settings"** (ícone de engrenagem)
2. No menu lateral esquerdo, procure **"Environment Variables"**
3. Clique em **"Environment Variables"**

---

## 📋 Passo 3: Adicionar Variáveis de Ambiente

Vai adicionar **4 variáveis**. Para cada uma:

### Variável 1: DEEPSEEK_API_KEY

1. Clique no botão **"Add New"** ou **"New Variable"**
2. No campo **"Key"**, escreva:
   ```
   DEEPSEEK_API_KEY
   ```
3. No campo **"Value"**, cole a sua chave API do DeepSeek:
   ```
   sk-... (a sua chave completa)
   ```
4. Em **"Environment"**, selecione **TODAS** as opções:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
5. Clique em **"Save"**

---

### Variável 2: VITE_EMAILJS_SERVICE_ID

1. Clique no botão **"Add New"** novamente
2. No campo **"Key"**, escreva:
   ```
   VITE_EMAILJS_SERVICE_ID
   ```
3. No campo **"Value"**, cole:
   ```
   service_5a3jxhj
   ```
4. Em **"Environment"**, selecione **TODAS**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Clique em **"Save"**

---

### Variável 3: VITE_EMAILJS_TEMPLATE_ID

1. Clique no botão **"Add New"** novamente
2. No campo **"Key"**, escreva:
   ```
   VITE_EMAILJS_TEMPLATE_ID
   ```
3. No campo **"Value"**, cole:
   ```
   template_vqij8k8
   ```
4. Em **"Environment"**, selecione **TODAS**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Clique em **"Save"**

---

### Variável 4: VITE_EMAILJS_PUBLIC_KEY

1. Clique no botão **"Add New"** pela última vez
2. No campo **"Key"**, escreva:
   ```
   VITE_EMAILJS_PUBLIC_KEY
   ```
3. No campo **"Value"**, cole:
   ```
   XkG6oJb3itfiAFszT
   ```
4. Em **"Environment"**, selecione **TODAS**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Clique em **"Save"**

---

## 📋 Passo 4: Verificar Variáveis

Depois de adicionar as 4 variáveis, deve ver na lista:

```
DEEPSEEK_API_KEY                 ••••••••••••••••  Production, Preview, Development
VITE_EMAILJS_SERVICE_ID          service_5a3jxhj   Production, Preview, Development
VITE_EMAILJS_TEMPLATE_ID         template_vqij8k8  Production, Preview, Development
VITE_EMAILJS_PUBLIC_KEY          XkG6oJb3itfiAFszT Production, Preview, Development
```

✅ Se vir as 4 variáveis, está tudo correto!

---

## 📋 Passo 5: Fazer Redeploy

Agora precisa fazer um novo deploy para as variáveis serem aplicadas:

1. No topo, clique em **"Deployments"**
2. Encontre o deployment mais recente (primeiro da lista)
   - Deve ter a mensagem: "fix: Update favicon to correct logo"
3. Clique nos **3 pontos** (**⋯**) ao lado direito
4. Selecione **"Redeploy"**
5. Na janela que abrir, clique em **"Redeploy"** novamente para confirmar

---

## ⏳ Passo 6: Aguardar Deploy

1. O Vercel vai começar a fazer o build
2. Aguarde **2-3 minutos**
3. Quando aparecer **"Ready"** com ícone verde ✅, está completo!

---

## 🧪 Passo 7: Testar o Website

### Testar Chatbot AI

1. Abra o website: **https://groenvastbouw.nl**
2. No canto inferior direito, clique no botão **verde de chat**
3. Digite uma pergunta, por exemplo:
   ```
   What are your prices?
   ```
4. Aguarde a resposta do AI
5. ✅ Se o chatbot responder com informação detalhada, está a funcionar!

❌ **Se não funcionar:**
- Verifique se `DEEPSEEK_API_KEY` está configurada
- Abra o console do browser (F12) e veja se há erros
- Contacte-me para ajuda

---

### Testar Formulário de Contacto

1. No website, desça até à secção **"Contact"** (final da página)
2. Preencha o formulário:
   - **Nome:** Teste
   - **Email:** seu_email@exemplo.com
   - **Telefone:** 123456789
   - **Mensagem:** Isto é um teste
3. Clique em **"Verzenden"**
4. Deve aparecer mensagem: **"Bericht verzonden!"**
5. ✅ Verifique se recebeu email em **info@groenvastbouw.nl**

❌ **Se não funcionar:**
- Verifique se as 3 variáveis EmailJS estão configuradas
- Verifique o EmailJS dashboard para ver se há erros
- Contacte-me para ajuda

---

## ✅ Checklist Final

Depois de configurar tudo, confirme:

- [ ] 4 variáveis de ambiente adicionadas no Vercel
- [ ] Redeploy feito e completado (status "Ready")
- [ ] Website abre sem erros
- [ ] Favicon mostra o logo correto
- [ ] Chatbot AI responde perguntas
- [ ] Formulário de contacto envia emails

---

## 🎉 Sucesso!

Se todos os itens acima estiverem ✅, o seu website está **100% funcional**!

Tem agora:
- ✅ Website profissional
- ✅ Chatbot AI 24/7
- ✅ Formulário de contacto funcional
- ✅ Logo/favicon correto

---

## 🆘 Precisa de Ajuda?

Se algo não funcionar:

1. **Tire screenshots** do erro
2. **Copie mensagens de erro** do console (F12)
3. **Contacte-me** neste chat com os detalhes

Estou aqui para ajudar! 💪

---

## 📊 Resumo das Variáveis

Para referência rápida:

| Variável | Valor |
|----------|-------|
| `DEEPSEEK_API_KEY` | (sua chave DeepSeek) |
| `VITE_EMAILJS_SERVICE_ID` | `service_5a3jxhj` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_vqij8k8` |
| `VITE_EMAILJS_PUBLIC_KEY` | `XkG6oJb3itfiAFszT` |

**Importante:** Todas as variáveis devem estar em **Production, Preview e Development**!

---

**Boa sorte! 🍀**
