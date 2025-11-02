# Guia de Deploy no Vercel - Groenvastbouw

## Problema Atual
O ficheiro `google354ff5512fe97ed9.html` e a meta tag de verificação foram adicionados ao projeto, mas a versão em produção no Vercel ainda não tem esses ficheiros porque foi publicada antes dessas alterações.

## Solução: Novo Deploy

### Opção 1: Promover Preview para Produção (Mais Rápido)

Se já tem um deployment em "Preview" com as alterações mais recentes:

1. Vá a **Vercel Dashboard** → Seu projeto **groenvastbouw**
2. Clique em **Deployments** no menu lateral
3. Encontre o deployment mais recente (deve estar em "Preview")
4. Clique nos **3 pontos** (⋮) ao lado do deployment
5. Selecione **"Promote to Production"**
6. Confirme a ação

✅ O deployment preview será promovido para produção imediatamente!

### Opção 2: Novo Deploy via GitHub (Recomendado)

Se as alterações ainda não estão no Vercel:

1. **Fazer push das alterações para GitHub:**
   - As alterações já estão commitadas localmente
   - Faça push para o repositório: `git push origin master`

2. **Vercel fará deploy automático:**
   - Vercel detecta o push e inicia deploy automaticamente
   - Aguarde 2-3 minutos para o build completar
   - O novo deployment será automaticamente promovido para produção

### Opção 3: Deploy Manual via Vercel CLI

Se preferir fazer deploy manual:

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# Fazer login
vercel login

# Deploy para produção
vercel --prod
```

## Verificar Deploy

Após o deploy, verifique:

1. **Ficheiro HTML disponível:**
   - Acesse: `https://groenvastbouw.nl/google354ff5512fe97ed9.html`
   - Deve mostrar: `google-site-verification: google354ff5512fe97ed9.html`

2. **Meta tag no HTML:**
   - Acesse: `https://groenvastbouw.nl`
   - Ver código fonte (Ctrl+U)
   - Procure por: `<meta name="google-site-verification" content="IDahSTLFFsPkrGkJBL4Q5pIrVDQ9nScS7-sh7ep3y0I" />`

## Validar no Google Search Console

Depois do deploy estar em produção:

1. Volte ao **Google Search Console**
2. Vá para **Verificação de propriedade**
3. Clique em **"Verificar"** no método que escolheu:
   - **Ficheiro HTML**: Verifica se `google354ff5512fe97ed9.html` existe
   - **Meta tag HTML**: Verifica se a meta tag está no `<head>`

✅ A verificação deve passar imediatamente!

## Google Analytics e Tag Manager

Os placeholders já estão no `index.html` (comentados). Quando tiver os IDs:

1. **Google Analytics:**
   - Substitua `YOUR_GA_ID` pelo seu ID (ex: `G-XXXXXXXXXX`)
   - Remova os comentários `<!-- -->` em volta do código

2. **Google Tag Manager:**
   - Substitua `YOUR_GTM_ID` pelo seu ID (ex: `GTM-XXXXXXX`)
   - Remova os comentários `<!-- -->` em volta do código

3. **Fazer novo deploy** para aplicar as alterações

## Gestão de Deployments no Vercel

### Ver todos os deployments:
- Dashboard → Projeto → **Deployments**
- Mostra todos os deploys (Production, Preview, Failed)

### Deployment ativo:
- O deployment com badge **"Production"** é o que está em `groenvastbouw.nl`
- Deployments "Preview" são versões de teste

### Não precisa apagar deployments antigos:
- Vercel mantém histórico automático
- Útil para rollback se necessário
- Não afeta performance ou custos

### Rollback (se necessário):
- Clique no deployment antigo → **"Promote to Production"**
- Restaura versão anterior instantaneamente

## Troubleshooting

### "Ficheiro não encontrado" no Google Search Console:
- ✅ Verifique que fez deploy DEPOIS de adicionar o ficheiro
- ✅ Confirme que o ficheiro está em `client/public/`
- ✅ Teste o URL diretamente no browser

### Deploy não aparece em produção:
- ✅ Verifique se o deployment está marcado como "Production"
- ✅ Pode levar 1-2 minutos para propagar CDN
- ✅ Limpe cache do browser (Ctrl+Shift+R)

### Alterações não aparecem:
- ✅ Confirme que fez commit das alterações
- ✅ Verifique que fez push para GitHub
- ✅ Aguarde build completar no Vercel

## Resumo Rápido

1. ✅ Ficheiro `google354ff5512fe97ed9.html` adicionado
2. ✅ Meta tag de verificação adicionada ao `<head>`
3. ✅ Placeholders para Analytics e Tag Manager prontos
4. 🔄 **PRÓXIMO PASSO**: Fazer novo deploy no Vercel
5. ✅ Validar no Google Search Console

---

**Dúvidas?** Entre em contacto ou consulte a documentação do Vercel: https://vercel.com/docs
