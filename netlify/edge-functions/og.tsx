// netlify/edge-functions/og.tsx
import { ImageResponse } from "@vercel/og";

export default async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "L’Éveil").slice(0, 120);
  const tag   = (searchParams.get("tag")   || "Psychologie & Neurosciences").slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: "linear-gradient(135deg,#0f172a,#111827)",
          color: "white",
          padding: "72px",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontFamily: "system-ui, -apple-system, Segoe UI, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div style={{ opacity: 0.7, fontSize: 28 }}>{tag}</div>
          <div style={{ fontSize: 64, lineHeight: 1.1, fontWeight: 800, whiteSpace: "pre-wrap" }}>
            {title}
          </div>
        </div>
        <div style={{
          border: "2px solid rgba(255,255,255,.2)",
          padding: "10px 16px",
          borderRadius: 12,
          fontSize: 24
        }}>
          L’Éveil
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
};
