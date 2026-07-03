"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/content/profile";
import FadeIn from "@/components/ui/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";
import { DaVinciIcon, CapCutIcon, CanvaIcon } from "@/components/ui/ToolIcons";
import type { ComponentType } from "react";

const toolIconMap: Record<string, ComponentType<{ size?: number }>> = {
  "DaVinci Resolve": DaVinciIcon,
  "CapCut": CapCutIcon,
  "Canva": CanvaIcon,
};

export default function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative py-32 overflow-hidden"
      aria-label="Tools I Use"
    >
      <GlowOrb size={400} top="20%" right="-5%" color="warm" opacity={0.1} />
      <GlowOrb size={300} bottom="10%" left="-5%" color="light" opacity={0.08} delay={2} />

      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
              Arsenal
            </span>
          </FadeIn>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6"
            >
              Tools of the Trade
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              Industry-standard software for professional, polished results.
            </p>
          </FadeIn>
        </div>

        {/* Tool cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {profile.tools.map((tool, i) => (
            <FadeIn key={tool.name} delay={i * 0.15} direction="up">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass border border-glass-border rounded-3xl p-8 flex flex-col items-center text-center w-56 shadow-glass hover:shadow-glass-hover transition-shadow"
              >
                {/* Real brand icon */}
                <div className="relative mb-5">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-20"
                    style={{ background: "radial-gradient(circle, #C8A882, transparent)" }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-glass">
                    {(() => {
                      const Icon = toolIconMap[tool.name];
                      return Icon ? <Icon size={80} /> : <span className="text-4xl">🔧</span>;
                    })()}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-ink text-lg mb-2">
                  {tool.name}
                </h3>
                <p className="text-ink-muted text-sm">{tool.description}</p>

                {/* Decorative dots */}
                <div className="flex gap-1.5 mt-5" aria-hidden="true">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="w-1.5 h-1.5 rounded-full bg-[#C8A882] opacity-50"
                    />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Why section */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <FadeIn>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
                Why Me
              </span>
            </FadeIn>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-3xl md:text-5xl font-bold text-ink"
              >
                Why Clients Choose Me
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {profile.whyChooseMe.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass border border-glass-border rounded-2xl p-7 group"
                >
                  <div className="text-2xl mb-4 font-heading text-[#C8A882]">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-ink text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
