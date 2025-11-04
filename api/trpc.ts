import type { VercelRequest, VercelResponse } from '@vercel/node';
import { appRouter } from '../server/routers';
import { createContext } from '../server/_core/context';
import { createTRPCContext } from '@trpc/server/adapters/standalone';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Build full URL
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || req.headers['x-forwarded-host'];
  const url = new URL(req.url || '', `${protocol}://${host}`);
  
  // Create standard Request object
  const headers = new Headers();
  Object.entries(req.headers).forEach(([key, value]) => {
    if (value) headers.set(key, Array.isArray(value) ? value[0] : value);
  });
  
  const fetchRequest = new Request(url.toString(), {
    method: req.method || 'GET',
    headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' 
      ? JSON.stringify(req.body) 
      : undefined,
  });

  // Handle with tRPC
  const response = await fetchRequestHandler({
    endpoint: '/api/trpc',
    req: fetchRequest,
    router: appRouter,
    createContext: async () => createContext({ req, res }),
  });

  // Copy response headers
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  
  // Send response
  const body = await response.text();
  res.status(response.status).send(body);
}
