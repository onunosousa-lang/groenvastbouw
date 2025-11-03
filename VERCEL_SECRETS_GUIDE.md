# Guia: Configurar DEEPSEEK_API_KEY no Vercel

## Problema
O chatbot AI está a dar erro "cannot respond at the moment" em produção porque a variável de ambiente `DEEPSEEK_API_KEY` não está configurada no Vercel.

## Solução: Adicionar Environment Variable no Vercel

### Passo 1: Obter a DEEPSEEK_API_KEY

Se ainda não tem a chave:
1. Vá a **https://platform.deepseek.com**
2. Faça login ou crie conta
3. Vá para **API Keys** no menu
4. Clique em **"Create API Key"**
5. Copie a chave (formato: `sk-...`)

⚠️ **IMPORTANTE**: Guarde a chave num local seguro! Não será mostrada novamente.

### Passo 2: Adicionar no Vercel

1. **Abra o Vercel Dashboard**
   - Vá a https://vercel.com
   - Selecione o projeto **groenvastbouw**

2. **Aceda às Settings**
   - Clique em **"Settings"** no menu superior
   - No menu lateral, clique em **"Environment Variables"**

3. **Adicione a variável**
   - **Name**: `DEEPSEEK_API_KEY`
   - **Value**: Cole a sua chave API (sk-...)
   - **Environments**: Selecione **TODAS**:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

4. **Salve a variável**
   - Clique em **"Save"**

### Passo 3: Redeploy (Obrigatório!)

⚠️ **IMPORTANTE**: As environment variables só são aplicadas em novos deployments!

**Opção A - Redeploy automático:**
1. Vá para **Deployments**
2. Clique no deployment mais recente (Production)
3. Clique nos **3 pontos** (⋮)
4. Selecione **"Redeploy"**
5. Confirme **"Redeploy"**

**Opção B - Trigger via commit:**
```bash
# Fazer um commit vazio para trigger deploy
git commit --allow-empty -m "Trigger redeploy for env vars"
git push github master
```

### Passo 4: Verificar

Após o redeploy completar (2-3 minutos):

1. **Abra o site em produção**: https://groenvastbouw.nl
2. **Clique no botão do chatbot** (canto inferior direito)
3. **Envie uma mensagem de teste**: "Hallo, wat is Groenvastbouw?"
4. **Deve receber resposta** do AI assistant

✅ Se funcionar, o problema está resolvido!

## Outras Environment Variables Necessárias

O projeto também usa estas variáveis (já devem estar configuradas):

### Backend (Server)
- `JWT_SECRET` - Para autenticação
- `OAUTH_SERVER_URL` - Para OAuth
- `OWNER_NAME` - Nome do proprietário
- `OWNER_OPEN_ID` - ID do proprietário

### Frontend (Client)
- `VITE_APP_ID` - ID da aplicação
- `VITE_APP_TITLE` - Título do site
- `VITE_APP_LOGO` - URL do logo
- `VITE_OAUTH_PORTAL_URL` - URL do portal OAuth
- `VITE_ANALYTICS_ENDPOINT` - Endpoint analytics
- `VITE_ANALYTICS_WEBSITE_ID` - ID do website analytics

### Verificar variáveis existentes:
1. Vercel Dashboard → Settings → Environment Variables
2. Veja todas as variáveis configuradas
3. Se faltar alguma, adicione seguindo o mesmo processo

## Troubleshooting

### Chatbot ainda não funciona após redeploy:
1. ✅ Confirme que o redeploy completou (status "Ready")
2. ✅ Limpe cache do browser (Ctrl+Shift+R)
3. ✅ Verifique se a variável está em **Production** environment
4. ✅ Teste em janela anónima/incógnita

### Erro "Invalid API Key":
- A chave DeepSeek está incorreta ou expirada
- Gere nova chave em platform.deepseek.com
- Atualize no Vercel e faça redeploy

### Chatbot funciona em preview mas não em production:
- A variável não está marcada para "Production"
- Edite a variável no Vercel
- Marque checkbox "Production"
- Faça redeploy

## Segurança

⚠️ **NUNCA** faça commit de API keys no código!
✅ Sempre use environment variables
✅ Adicione `.env` ao `.gitignore`
✅ Não partilhe chaves publicamente

## Resumo Rápido

1. ✅ Obter DEEPSEEK_API_KEY em platform.deepseek.com
2. ✅ Adicionar em Vercel → Settings → Environment Variables
3. ✅ Name: `DEEPSEEK_API_KEY`, Value: `sk-...`
4. ✅ Marcar: Production, Preview, Development
5. ✅ Salvar
6. ✅ Fazer Redeploy
7. ✅ Testar chatbot em produção

---

**Dúvidas?** Consulte a documentação:
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
- DeepSeek API: https://platform.deepseek.com/docs
