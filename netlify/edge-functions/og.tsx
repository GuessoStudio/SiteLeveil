// netlify/edge-functions/og.tsx
import { ImageResponse } from "@vercel/og";

let interRegular: ArrayBuffer | null = null;
let interBold: ArrayBuffer | null = null;

async function loadRegular(): Promise<ArrayBuffer> {
  if (interRegular) return interRegular;
  const res = await fetch("https://github.com/google/fonts/raw/main/ofl/inter/Inter-Regular.ttf");
  interRegular = await res.arrayBuffer();
  return interRegular!;
}

async function loadBold(): Promise<ArrayBuffer> {
  if (interBold) return interBold;
  const res = await fetch("https://github.com/google/fonts/raw/main/ofl/inter/Inter-Bold.ttf");
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
      <div style={{
        width: 1200, height: 630, display: "flex",
        background: "linear-gradient(135deg,#0f172a,#111827)",
        color: "white", padding: 72, justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 18, opacity: 0.9 }}>{tag}</div>
          <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>{title}</div>
        </div>
        <div style={{
          fontSize: 48, fontWeight: 800, opacity: 0.5, transform: "translateY(8px)"
        }}>L’É</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: reg,  weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
};
