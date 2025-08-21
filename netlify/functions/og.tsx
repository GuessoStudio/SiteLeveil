// netlify/functions/og.ts
// Node Function (pas Edge). Rend une image PNG via Satori + resvg-js.

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

let interRegular: ArrayBuffer | null = null;
let interBold: ArrayBuffer | null = null;

async function getInterRegular() {
  if (interRegular) return interRegular;
  const res = await fetch(
    "https://github.com/google/fonts/raw/main/ofl/inter/Inter-Regular.ttf"
  );
  interRegular = await res.arrayBuffer();
  return interRegular;
}

async function getInterBold() {
  if (interBold) return interBold;
  const res = await fetch(
    "https://github.com/google/fonts/raw/main/ofl/inter/Inter-Bold.ttf"
  );
  interBold = await res.arrayBuffer();
  return interBold;
}

export default async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "L’Éveil").slice(0, 120);
  const tag = (searchParams.get("tag") || "Psychologie & Neurosciences").slice(0, 40);

  // Précharge les polices une seule fois (cache en mémoire)
  const [reg, bold] = await Promise.all([getInterRegular(), getInterBold()]);

  const svg = await satori(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: 72,
          color: "#fff",
          background: "linear-gradient(135deg,#0f172a,#111827)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 840 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(99,102,241,.2)",
              color: "#c7d2fe",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            {tag}
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.1, fontWeight: 800 }}>{title}</div>
        </div>

        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: 24,
            background: "rgba(255,255,255,.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 54,
            fontWeight: 800,
          }}
        >
          É
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: reg, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );

  // Rasterize SVG -> PNG
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  const png = resvg.render().asPng(); // Uint8Array

  return new Response(png, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};
