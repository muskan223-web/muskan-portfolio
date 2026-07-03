"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { profile } from "@/content/profile";
import FadeIn from "@/components/ui/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
      aria-label="About Me"
    >
      <GlowOrb size={500} top="10%" left="-10%" color="warm" opacity={0.12} />
      <GlowOrb size={400} bottom="5%" right="-5%" color="light" opacity={0.1} delay={2} />

      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: Image */}
          <FadeIn direction="right">
            <motion.div style={{ y: imageY }} className="relative">
              {/* Decorative elements */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl border border-[#C8A882]/30"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#C8A882]/10"
                aria-hidden="true"
              />

              {/* Main image */}
              <div className="relative rounded-[2.5rem] overflow-hidden glass border border-glass-border shadow-card-lift aspect-[4/5]">
                <Image
                  src={profile.bgSilhouette}
                  alt={`${profile.name} — About`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/30 via-transparent to-transparent" />
              </div>

              {/* Studio badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -right-4 glass border border-glass-border rounded-2xl p-4 shadow-glass"
              >
                <p className="text-xs text-ink-muted mb-1">Currently studying</p>
                <p className="font-heading font-bold text-ink text-sm">B.Des — Design</p>
              </motion.div>
            </motion.div>
          </FadeIn>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <FadeIn>
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
                  About Me
                </span>
              </FadeIn>

              <div className="overflow-hidden mb-6">
                <motion.h2
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-3xl md:text-5xl font-bold text-ink leading-tight"
                >
                  {profile.about.headline}
                </motion.h2>
              </div>
            </div>

            <FadeIn delay={0.3}>
              <p className="text-ink-secondary leading-relaxed text-lg">
                {profile.about.bio}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-ink-secondary leading-relaxed">
                {profile.about.bio2}
              </p>
            </FadeIn>

            {/* Divider */}
            <FadeIn delay={0.5}>
              <div className="h-px w-full bg-gradient-to-r from-[#C8A882]/50 to-transparent" />
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.55}>
              <div className="grid grid-cols-2 gap-6">
                {profile.about.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass border border-glass-border rounded-2xl p-5"
                  >
                    <p className="font-heading text-3xl font-bold text-ink mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-ink-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
