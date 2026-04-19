import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function BlurText({ text, delay = 0, className = '' }: BlurTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  
  // Safe SSG check
  const isServer = typeof window === 'undefined';
  
  // React to viewport intersection (once)
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  if (isServer) {
    return <span className={className}>{text}</span>;
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: any = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Diviser le texte en mots
  const words = text.split(' ');

  return (
    <motion.span
      ref={ref}
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'inherit' }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
