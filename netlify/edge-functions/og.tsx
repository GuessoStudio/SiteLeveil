// netlify/edge-functions/og.tsx
export default async () =>
  new Response("OG edge alive", { headers: { "content-type": "text/plain" } });
