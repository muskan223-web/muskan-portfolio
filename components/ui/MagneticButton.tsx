"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
}

const variantStyles = {
  primary:
    "bg-ink text-cream hover:bg-ink-secondary shadow-lg",
  secondary:
    "bg-cream-dark text-ink hover:bg-cream-deeper border border-glass-border",
  ghost:
    "bg-transparent text-ink hover:bg-cream-dark",
  outline:
    "bg-transparent border border-ink text-ink hover:bg-ink hover:text-cream",
};

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  disabled,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDist = rect.width;

      if (distance < maxDist) {
        setPosition({ x: dx * 0.35, y: dy * 0.35 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    rounded-full font-medium tracking-wide
    transition-all duration-300 ease-out
    select-none magnetic-btn
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? "opacity-50 pointer-events-none" : ""}
    ${className}
  `;

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 300, damping: 20, mass: 0.5 },
  };

  if (href) {
    return (
      <div ref={ref}>
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          {...motionProps}
        >
          {children}
        </motion.a>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={baseClasses}
        {...motionProps}
      >
        {children}
      </motion.button>
    </div>
  );
}
