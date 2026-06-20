import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// Composition triviale frame-driven : un disque violet qui pulse + un texte.
// But unique : prouver que Chromium + ffmpeg sortent un MP4 (smoke-test P0).
export const Smoke: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame % 30, [0, 15, 30], [0.8, 1.1, 0.8]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#140d36",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "#7C6FF7",
          boxShadow: "0 0 120px #7C6FF7",
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          marginTop: 80,
          color: "#fff",
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: "0.04em",
        }}
      >
        SMOKE OK
      </div>
    </AbsoluteFill>
  );
};
