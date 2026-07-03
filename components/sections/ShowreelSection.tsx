"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { showreel } from "@/content/projects";
import FadeIn from "@/components/ui/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";
import { FiPlay } from "react-icons/fi";

export default function ShowreelSection() {
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  const embedUrl = `https://www.youtube.com/embed/${showreel.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${showreel.youtubeId}/maxresdefault.jpg`;

  return (
    <section
      ref={sectionRef}
      id="showreel"
      className="relative py-32 overflow-hidden"
      aria-label="Showreel"
    >
      <GlowOrb size={700} top="0%" left="50%" color="warm" opacity={0.08} />

      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
              Showreel
            </span>
          </FadeIn>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl font-bold text-ink mb-4"
            >
              {showreel.title}
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              {showreel.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Video player */}
        <FadeIn delay={0.4}>
          <div className="relative max-w-5xl mx-auto">
            {/* Glow effect behind player */}
            <div
              className="absolute inset-0 rounded-[2rem] blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at center, #C8A882 0%, transparent 70%)",
                transform: "scale(1.05)",
              }}
              aria-hidden="true"
            />

            {/* Player wrapper */}
            <div className="relative rounded-[2rem] overflow-hidden glass border border-glass-border shadow-card-lift">
              {!playing ? (
                /* Thumbnail + Play button */
                <div
                  className="relative w-full cursor-none group"
                  style={{ aspectRatio: "16/9" }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${showreel.title}`}
                  onClick={() => setPlaying(true)}
                  onKeyDown={(e) => e.key === "Enter" && setPlaying(true)}
                >
                  {/* Thumbnail */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnailUrl}
                    alt={showreel.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full border border-white/40 scale-125 animate-pulse-glow" />
                      {/* Play btn */}
                      <div className="w-20 h-20 glass-dark rounded-full flex items-center justify-center border border-white/20 shadow-glow-soft">
                        <FiPlay size={28} className="text-white ml-1" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/60 to-transparent">
                    <p className="text-white font-heading font-semibold text-xl">
                      {showreel.title}
                    </p>
                    <p className="text-white/70 text-sm mt-1">{showreel.subtitle}</p>
                  </div>
                </div>
              ) : (
                /* YouTube iframe */
                <div className="yt-embed-container" style={{ paddingBottom: "56.25%", borderRadius: 0 }}>
                  <iframe
                    src={embedUrl}
                    title={showreel.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
