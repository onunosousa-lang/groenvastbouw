# Relatório de Compatibilidade Vercel - Groenvastbouw

**Autor:** Manus AI  
**Data:** 02 de Novembro de 2025

## 1. Resumo Executivo

Este relatório detalha a análise completa do projeto **Groenvastbouw** e identifica a causa raiz dos problemas de deployment no Vercel. O problema fundamental é uma **incompatibilidade entre a estrutura do projeto (full-stack com servidor Express) e a configuração de deployment do Vercel (apenas estático)**.

O Vercel está configurado para servir apenas o frontend estático, ignorando completamente o servidor Node.js/Express que contém as rotas API (`/api/chat`, `/api/trpc`). Isto resulta em erros 404 para qualquer chamada de API.

Este documento apresenta um plano de ação detalhado para refatorar o projeto e torná-lo totalmente compatível com a arquitetura de Vercel Serverless Functions, garantindo que tanto o frontend quanto o backend funcionem corretamente.

## 2. Diagnóstico Detalhado

### 2.1. Análise da Estrutura do Projeto

| Diretório/Ficheiro | Propósito | Análise |
|---|---|---|
| `client/` | Frontend React (Vite) | Contém a interface do utilizador, incluindo o componente do chatbot. |
| `server/` | Backend Node.js (Express) | Contém o servidor Express, rotas tRPC e a lógica do chatbot DeepSeek. **Este diretório é ignorado pelo Vercel.** |
| `package.json` | Scripts e dependências | O script `build` gera o frontend estático e o servidor backend em diretórios separados. |
| `vite.config.ts` | Configuração do Vite | Configurado para gerar o frontend em `dist/public/`. |
| `vercel.json` | Configuração do Vercel | Tentativas anteriores de configurar isto falharam porque não abordaram o problema raiz. |

### 2.2. Conflito Principal: Servidor Express vs. Vercel Serverless

O Vercel foi desenhado para funcionar com **Serverless Functions**, que são ficheiros individuais em um diretório `/api` que executam código sob demanda. O Vercel **não** executa um servidor Node.js tradicional (como o Express) da mesma forma que plataformas como Render ou Railway.

O projeto Groenvastbouw, no entanto, foi construído com um servidor Express monolítico. O script de build (`vite build && esbuild server/_core/index.ts ...`) gera um servidor completo em `dist/index.js`, mas o Vercel está configurado para servir apenas o diretório `dist/public/`.

**Conclusão:** O Vercel nunca executa o servidor, por isso as rotas API não existem em produção.

## 3. Plano de Ação para Compatibilidade Total

Para resolver este problema de forma definitiva, proponho as seguintes alterações:

### Fase 1: Refatorar API para Vercel Serverless Functions

1.  **Criar diretório `/api`:** Na raiz do projeto, criar um diretório `/api`.
2.  **Mover lógica do chatbot:** Criar um ficheiro `/api/chat.js` e mover toda a lógica do chatbot DeepSeek (atualmente em `server/routes/chat.ts`) para este ficheiro, adaptando-o para o formato de Vercel Serverless Function.
3.  **Mover lógica tRPC:** Criar um ficheiro `/api/trpc/[trpc].js` e mover a lógica do tRPC para este ficheiro, usando o adaptador Vercel do tRPC.
4.  **Remover diretório `server/`:** Após mover toda a lógica, o diretório `server/` pode ser removido para simplificar o projeto.

### Fase 2: Atualizar Configurações de Build

1.  **Simplificar `package.json`:** O script `build` só precisará de executar `vite build`. O comando `esbuild` para o servidor já não é necessário.
2.  **Remover `vercel.json`:** Com a estrutura de diretórios correta (`/api`), o Vercel irá detetar automaticamente as Serverless Functions, não sendo necessário um `vercel.json` complexo.
3.  **Atualizar `vite.config.ts`:** Garantir que o `outDir` continua a ser `dist/public/`.

### Fase 3: Teste Local com `vercel dev`

Antes de fazer deploy, é crucial testar localmente usando o comando `vercel dev`. Este comando simula o ambiente do Vercel e permite testar tanto o frontend quanto as Serverless Functions em conjunto.

1.  Instalar Vercel CLI: `pnpm install -g vercel`
2.  Executar `vercel dev` na raiz do projeto
3.  Testar o chatbot e outras funcionalidades que dependem de API

### Fase 4: Deploy e Confirmação

Após o teste local ser bem-sucedido, fazer deploy para o Vercel:

1.  Fazer commit e push das alterações para o GitHub.
2.  O Vercel irá fazer deploy automaticamente.
3.  Verificar no dashboard do Vercel se a tab "Functions" aparece com as rotas `/api/chat` e `/api/trpc`.
4.  Testar o website em produção.

## 4. Conclusão

Seguindo este plano, o projeto Groenvastbouw será totalmente compatível com a arquitetura do Vercel, resultando em um website funcional com chatbot AI e todas as outras funcionalidades. Esta abordagem resolve o problema raiz em vez de tentar soluções temporárias.

**Recomendo fortemente seguir este plano para uma solução robusta e de longo prazo.**
