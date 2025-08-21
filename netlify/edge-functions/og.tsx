// netlify/functions/og.ts
import type { Handler } from "@netlify/functions";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

let interRegular: ArrayBuffer | null = null;
let interBold: ArrayBuffer | null = null;

async function fetchFont(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font fetch failed: ${url}`);
  return res.arrayBuffer();
}

export const handler: Handler = async (event) => {
  try {
    const url = new URL(event.rawUrl);
    const title = (url.searchParams.get("title") ?? "L’Éveil").slice(0, 120);
    const tag = (url.searchParams.get("tag") ?? "Psychologie & Neurosciences").slice(0, 40);

    // Charge (et garde) les polices en mémoire
    if (!interRegular) interRegular = await fetchFont("https://github.com/google/fonts/raw/main/ofl/inter/Inter-Regular.ttf");
    if (!interBold)    interBold    = await fetchFont("https://github.com/google/fonts/raw/main/ofl/inter/Inter-Bold.ttf");

    const svg = await satori(
      <div style={{
        width: 1200, height: 630, display: "flex",
        background: "linear-gradient(135deg,#0f172a,#111827)", color: "#fff",
        padding: 72, justifyContent: "space-between", alignItems: "flex-end"
      }}>
        <div style={{ display:"flex", flexDirection:"column", gap: 24, maxWidth: 840 }}>
          <div style={{ fontSize: 44, opacity: 0.8 }}>{tag}</div>
          <div style={{ fontWeight: 700, fontSize: 74, lineHeight: 1.1 }}>{title}</div>
        </div>
        <div style={{ fontSize: 32, opacity: 0.7 }}>L’Éveil</div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Inter", data: interRegular!, weight: 400, style: "normal" },
          { name: "Inter", data: interBold!,    weight: 700, style: "normal" },
        ],
      }
    );

    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
      body: Buffer.from(png).toString("base64"),
      isBase64Encoded: true,
    };
  } catch (e: any) {
    return { statusCode: 500, body: `OG render error: ${e?.message ?? e}` };
  }
};
