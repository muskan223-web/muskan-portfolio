"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/content/services";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import GlowOrb from "@/components/ui/GlowOrb";
import { socials } from "@/content/socials";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 overflow-hidden"
      aria-label="Services"
    >
      <GlowOrb size={600} top="0%" right="-15%" color="warm" opacity={0.1} />
      <GlowOrb size={400} bottom="0%" left="-10%" color="light" opacity={0.08} delay={3} />

      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
              What I Offer
            </span>
          </FadeIn>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6"
            >
              Services
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              Tailored editing services designed to elevate your content and grow your audience.
            </p>
          </FadeIn>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1} direction="up">
              <article className="service-card glass border border-glass-border rounded-3xl p-7 h-full flex flex-col group hover:shadow-card-lift">
                {/* Icon */}
                <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-ink mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-ink-muted text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#C8A882]/40 to-transparent mb-5" />

                {/* Features */}
                <ul className="space-y-2 mb-6" aria-label={`${service.title} features`}>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-ink-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A882] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Turnaround */}
                <div className="glass-dark rounded-xl px-4 py-2.5 mb-6 text-center">
                  <p className="text-xs text-white/60 mb-0.5">Turnaround</p>
                  <p className="text-sm font-semibold text-white">{service.turnaround}</p>
                </div>

                {/* Pricing (optional) */}
                {service.price && (
                  <p className="text-lg font-bold font-heading text-ink text-center mb-4">
                    {service.price}
                  </p>
                )}

                {/* CTA */}
                <MagneticButton
                  href={`mailto:${socials.email}?subject=${encodeURIComponent(service.title + " Inquiry")}`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  {service.cta} →
                </MagneticButton>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
