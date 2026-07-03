"use client";

import { useEffect, useRef } from "react";

interface GlowOrbProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: "warm" | "light" | "accent";
  delay?: number;
  opacity?: number;
}

export default function GlowOrb({
  size = 400,
  top,
  left,
  right,
  bottom,
  color = "warm",
  delay = 0,
  opacity = 0.15,
}: GlowOrbProps) {
  const colorMap = {
    warm: "radial-gradient(circle, rgba(200,168,130,1), transparent)",
    light: "radial-gradient(circle, rgba(232,221,208,1), transparent)",
    accent: "radial-gradient(circle, rgba(139,107,74,1), transparent)",
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: colorMap[color],
        filter: `blur(${size * 0.15}px)`,
        opacity,
        top,
        left,
        right,
        bottom,
        animationDelay: `${delay}s`,
        pointerEvents: "none",
      }}
      className="animate-float"
    />
  );
}
