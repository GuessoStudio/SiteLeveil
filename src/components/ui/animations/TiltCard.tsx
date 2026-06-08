import { useRef, useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Max tilt rotation in degrees
  scale?: number;       // Hover scale
  /** Override the glare/spotlight color. Default: white glare.
   *  Pass an rgba string like "rgba(201,149,58,0.12)" for a golden spotlight. */
  spotlightColor?: string;
}

/**
 * Carte avec tilt 3D + reflet qui suit le curseur — version CSS pure.
 * Les coordonnées pilotent des variables CSS (--rx/--ry/--sc/--gx/--gy/--gop)
 * mises à jour directement sur l'élément (aucun re-render). Le lissage du
 * mouvement est assuré par `transition: transform` (remplace le spring framer).
 * Désactivé sur écran tactile → strictement desktop, aucun coût sur mobile.
 * Remplace framer-motion pour sortir le chunk framer du chemin critique.
 */
export function TiltCard({
  children,
  className = '',
  maxRotation = 5,
  scale = 1.02,
  spotlightColor,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const setVar = (k: string, v: string) => ref.current?.style.setProperty(k, v);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 .. 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    // Mêmes axes que la version framer (Y pilote rotateX, X pilote rotateY).
    setVar('--rx', `${-ny * 2 * maxRotation}deg`);
    setVar('--ry', `${nx * 2 * maxRotation}deg`);
    setVar('--gx', `${(nx + 0.5) * 100}%`);
    setVar('--gy', `${(ny + 0.5) * 100}%`);
  };

  const handlePointerEnter = () => {
    if (isTouchDevice) return;
    setVar('--sc', String(scale));
    setVar('--gop', '1');
  };

  const handlePointerLeave = () => {
    if (isTouchDevice) return;
    setVar('--rx', '0deg');
    setVar('--ry', '0deg');
    setVar('--sc', '1');
    setVar('--gop', '0');
  };

  const baseStyle = {
    '--rx': '0deg',
    '--ry': '0deg',
    '--sc': '1',
    '--gx': '50%',
    '--gy': '50%',
    '--gop': '0',
    transform: 'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) scale(var(--sc))',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.15s ease-out',
  } as CSSProperties;

  const glareColor = spotlightColor ?? 'rgba(255,255,255,0.25)';

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={baseStyle}
      className={`relative ${className}`}
    >
      {!isTouchDevice && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-50 rounded-[inherit]"
          style={{
            background: `radial-gradient(circle at var(--gx) var(--gy), ${glareColor} 0%, transparent 50%)`,
            opacity: 'var(--gop)',
            transition: 'opacity 0.3s',
          }}
        />
      )}

      {children}
    </div>
  );
}
