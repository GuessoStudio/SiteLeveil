import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Max tilt rotation in degrees
  scale?: number;       // Hover scale
}

export function TiltCard({
  children,
  className = '',
  maxRotation = 5,
  scale = 1.02
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Disable on touch devices
  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Motion values for X and Y coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the motion values
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform coordinates to rotation values
  // We flip the rotation axes (Y controls X rotation, X controls Y rotation) for a realistic tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxRotation, maxRotation]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isTouchDevice) return;

    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized position from -0.5 to 0.5
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Mouse coords relative to element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize string from -0.5 to 0.5
    const normalizedX = (mouseX - centerX) / rect.width;
    const normalizedY = (mouseY - centerY) / rect.height;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    // Reset to center
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ scale: isHovered && !isTouchDevice ? scale : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        rotateX: isTouchDevice ? 0 : rotateX,
        rotateY: isTouchDevice ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Glare effect inside the card */}
      {!isTouchDevice && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 rounded-[inherit]"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([latestX, latestY]: any) => {
                // Determine direction of glare based on mouse position
                const angle = Math.atan2(latestY, latestX) * (180 / Math.PI);
                const opacity = (Math.abs(latestX) + Math.abs(latestY)) * 0.3;
                return `linear-gradient(${angle}deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,0) 80%)`;
              }
            )
          }}
        />
      )}
      
      {children}
    </motion.div>
  );
}
