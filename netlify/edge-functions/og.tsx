// netlify/edge-functions/og.tsx
import { ImageResponse } from "@vercel/og";

// Cache mémoire (Edge) pour éviter de re-télécharger les polices à chaque appel
let interRegular: ArrayBuffer | null = null;
let interBold: ArrayBuffer | null = null;

async function loadRegular(): Promise<ArrayBuffer> {
  if (interRegular) return interRegular;              // ← déjà un ArrayBuffer ici
  const res = await fetch(
    "https://github.com/google/fonts/raw/main/ofl/inter/Inter-Regular.ttf"
  );
  interRegular = await res.arrayBuffer();
  return interRegular!;                                // ← non-null assertion
}

async function loadBold(): Promise<ArrayBuffer> {
  if (interBold) return interBold;
  const res = await fetch(
    "https://github.com/google/fonts/raw/main/ofl/inter/Inter-Bold.ttf"
  );
  interBold = await res.arrayBuffer();
  return interBold!;
}

export default async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "L’Éveil").slice(0, 120);
  const tag   = (searchParams.get("tag")   ?? "Psychologie & Neurosciences").slice(0, 40);

  const [reg, bold] = await Promise.all([loadRegular(), loadBold()]);

  return new ImageResponse(
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
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
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
      // On passe explicitement les polices -> évite l’erreur NotoSans manquante
      fonts: [
        { name: "Inter", data: reg,  weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
};
