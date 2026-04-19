import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
}

export function Magnet({ children, padding = 100, disabled = false }: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Disable on mobile/touch interfaces entirely by checking pointer support
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Basic check for touch device capabilities on mount
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || isTouchDevice || !containerRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate center of element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from pointer to center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Move proportional to distance, max distance based on padding
    const moveX = (distanceX / width) * (padding / 2);
    const moveY = (distanceY / height) * (padding / 2);

    controls.start({
      x: moveX,
      y: moveY,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }
    });
  };

  const resetPosition = () => {
    setIsActive(false);
    controls.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }
    });
  };

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={resetPosition}
      animate={controls}
      style={{ display: "inline-block" }}
      className={isActive ? "z-50 relative" : ""}
    >
      {children}
    </motion.div>
  );
}
