// netlify/edge-functions/og.tsx
import satori from "satori";
import initResvg, { Resvg } from "@resvg/resvg-wasm";

// Caches en mémoire Edge
let interRegular: ArrayBuffer | null = null;
let interBold: ArrayBuffer | null = null;
let resvgReady = false;

async function fetchArrayBuffer(url: string) {
  const r = await fetch(url);
  return await r.arrayBuffer();
}

async function ensureFonts() {
  if (!interRegular) {
    interRegular = await fetchArrayBuffer(
      "https://github.com/google/fonts/raw/main/ofl/inter/Inter-Regular.ttf",
    );
  }
  if (!interBold) {
    interBold = await fetchArrayBuffer(
      "https://github.com/google/fonts/raw/main/ofl/inter/Inter-Bold.ttf",
    );
  }
}

async function ensureResvg() {
  if (resvgReady) return;
  // Charge le WASM de resvg depuis un CDN (pas de bundle local)
  const wasm = await fetchArrayBuffer(
    "https://cdn.jsdelivr.net/npm/@resvg/resvg-wasm@2.6.0/index_bg.wasm",
  );
  await initResvg(wasm);
  resvgReady = true;
}

export default async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const title = (searchParams.get("title") || "L’Éveil").slice(0, 120);
  const tag   = (searchParams.get("tag")   || "Psychologie & Neurosciences").slice(0, 40);

  // Dimensions OG standard
  const width  = +(searchParams.get("w") || 1200);
  const height = +(searchParams.get("h") || 630);
  const format = (searchParams.get("format") || "png").toLowerCase(); // png | svg

  await ensureFonts();

  const svg = await satori(
    (
      <div
        style={{
          width, height,
          display: "flex",
          background: "linear-gradient(135deg,#0f172a,#111827)",
          color: "white",
          padding: 72,
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div style={{ opacity: 0.7, fontSize: 28 }}>{tag}</div>
          <div style={{ fontSize: 64, lineHeight: 1.1, fontWeight: 700, whiteSpace: "pre-wrap" }}>
            {title}
          </div>
        </div>

        <div
          style={{
            border: "2px solid rgba(255,255,255,.2)",
            padding: "10px 16px",
            borderRadius: 12,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 0.2,
          }}
        >
          L’Éveil
        </div>
      </div>
    ),
    {
      width, height,
      fonts: [
        { name: "Inter", data: interRegular!, weight: 400, style: "normal" },
        { name: "Inter", data: interBold!,    weight: 700, style: "normal" },
      ],
    }
  );

  // Option : retourner le SVG (utile pour debug)
  if (format === "svg") {
    return new Response(svg, {
      headers: {
        "content-type": "image/svg+xml; charset=utf-8",
        "cache-control": "public, max-age=604800, immutable",
      },
    });
  }

  // Par défaut → PNG pour les scrapers (Facebook/Twitter n'aiment pas le SVG)
  await ensureResvg();
  const png = new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng();

  return new Response(png, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=604800, immutable",
    },
  });
};
