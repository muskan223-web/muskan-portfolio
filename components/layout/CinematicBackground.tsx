"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CinematicBackground() {
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animate = () => {
      if (glowRef.current) {
        const gx = mouseRef.current.x * 100;
        const gy = mouseRef.current.y * 100;
        glowRef.current.style.background = `
          radial-gradient(
            800px circle at ${gx}% ${gy}%,
            rgba(200, 168, 130, 0.06) 0%,
            transparent 50%
          )
        `;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Fixed base background */}
      <div
        className="cinematic-bg"
        aria-hidden="true"
      >
        {/* Cream base */}
        <div className="absolute inset-0 bg-cream" />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, rgba(200,168,130,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,221,208,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 50%, rgba(200,168,130,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(232,221,208,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 80%, rgba(200,168,130,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(232,221,208,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 50%, rgba(200,168,130,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,221,208,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Mouse-follow glow */}
        <div ref={glowRef} className="absolute inset-0" />

        {/* Vignette */}
        <div className="vignette" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </>
  );
}
