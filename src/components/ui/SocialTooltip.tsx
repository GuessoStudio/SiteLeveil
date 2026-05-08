import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  icon: React.ReactNode;
  color: string;
}

export interface SocialTooltipProps extends React.HTMLAttributes<HTMLUListElement> {
  items: SocialItem[];
}

const SocialTooltip = React.forwardRef<HTMLUListElement, SocialTooltipProps>(
  ({ className, items, ...props }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <ul
        ref={ref}
        className={cn("flex items-center justify-center gap-4", className)}
        {...props}
      >
        {items.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              aria-label={item.ariaLabel}
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 overflow-hidden group-hover:shadow-lg"
              target={item.href.startsWith('mailto') ? undefined : "_blank"}
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                style={{
                  backgroundColor: item.color,
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  originY: 1,
                }}
                animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <span className="relative z-10 w-7 h-7 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </span>
            </a>
            <div
              className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 px-2.5 py-1.5 text-xs text-white whitespace-nowrap rounded-md opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:bottom-[-44px] z-50"
              style={{ backgroundColor: item.color }}
            >
              {item.tooltip}
            </div>
          </li>
        ))}
      </ul>
    );
  }
);

SocialTooltip.displayName = "SocialTooltip";
export { SocialTooltip };
