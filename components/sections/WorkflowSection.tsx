"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import FadeIn from "@/components/ui/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="relative py-32 overflow-hidden"
      aria-label="My Workflow"
    >
      <GlowOrb size={500} top="30%" left="30%" color="warm" opacity={0.08} />

      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
              Process
            </span>
          </FadeIn>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6"
            >
              How I Work
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              A streamlined, collaborative process designed to deliver exceptional results — every time.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px bg-cream-deeper" aria-hidden="true">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C8A882] to-[#C8A882]/30"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {profile.workflow.map((step, i) => (
              <FadeIn key={step.step} delay={0.15 * i} direction="up">
                <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Step indicator */}
                  <div className="relative mb-6">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="w-14 h-14 glass border-2 border-[#C8A882]/50 rounded-full flex items-center justify-center relative z-10"
                    >
                      <span className="font-heading font-bold text-ink text-sm">
                        {step.step}
                      </span>
                    </motion.div>

                    {/* Connecting line (mobile/tablet) */}
                    {i < profile.workflow.length - 1 && (
                      <div
                        className="lg:hidden absolute top-1/2 left-full w-8 h-px bg-cream-deeper -translate-y-1/2 hidden md:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass border border-glass-border rounded-2xl p-6 w-full">
                    <h3 className="font-heading text-xl font-bold text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
