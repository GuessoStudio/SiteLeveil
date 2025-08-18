// netlify/edge-functions/og.tsx
import { ImageResponse } from "@vercel/og";

// Cache mémoire (Edge) pour éviter de refetch à chaque appel
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
  const tag   = (searchParams.get("tag")   || "Psychologie & Neurosciences").slice(0, 40);

  // Charge nos polices distantes (évite la Noto Sans packagée par défaut)
  const [reg, bold] = await Promise.all([getInterRegular(), getInterBold()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
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
    {
      width: 1200,
      height: 630,
      // ⬇️ On fournit explicitement nos polices → plus de Noto Sans implicite
      fonts: [
        { name: "Inter", data: reg, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
};
