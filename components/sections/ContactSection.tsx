"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { socials } from "@/content/socials";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import GlowOrb from "@/components/ui/GlowOrb";
import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import { SiFiverr } from "react-icons/si";

const contactLinks = [
  socials.email && {
    icon: FiMail,
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
  },
  socials.instagram && {
    icon: FiInstagram,
    label: "Instagram",
    value: "@coffeee_media",
    href: socials.instagram,
  },
  socials.linkedin && {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Muskan Kumari",
    href: socials.linkedin,
  },
  socials.fiverr && {
    icon: SiFiverr,
    label: "Fiverr",
    value: "Coffee Media",
    href: socials.fiverr,
  },
].filter(Boolean) as {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
}[];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 overflow-hidden"
      aria-label="Contact"
    >
      <GlowOrb size={700} top="0%" left="50%" color="warm" opacity={0.1} />
      <GlowOrb size={400} bottom="10%" left="10%" color="light" opacity={0.08} delay={2} />
      <GlowOrb size={300} top="20%" right="5%" color="accent" opacity={0.06} delay={4} />

      <div className="section-inner">
        {/* Main CTA Block */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
              Let&apos;s Work Together
            </span>
          </FadeIn>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl xl:text-7xl font-bold text-ink leading-tight"
            >
              Let&apos;s Create Something
              <br />
              <span className="text-gradient-warm">Amazing Together.</span>
            </motion.h2>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-ink-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s build something exceptional.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <MagneticButton
              href={`mailto:${socials.email}?subject=Project%20Inquiry`}
              variant="primary"
              size="lg"
              className="text-base"
            >
              <FiMail size={18} />
              Send Me a Message
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {contactLinks.map((link, i) => (
            <FadeIn key={link.label} delay={0.1 * i} direction="up">
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ y: -4 }}
                className="contact-link glass border border-glass-border rounded-2xl p-6 group flex flex-col gap-4 hover:shadow-glass-hover transition-all duration-300"
                aria-label={`Contact via ${link.label}`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 glass border border-glass-border rounded-xl flex items-center justify-center text-ink-secondary group-hover:text-ink transition-colors">
                    <link.icon size={18} />
                  </div>
                  <FiArrowUpRight
                    size={16}
                    className="text-ink-muted group-hover:text-ink transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div>
                  <p className="text-xs text-ink-muted uppercase tracking-wider">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.5}>
          <div className="border-t border-cream-deeper pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
            <p className="font-heading font-semibold text-ink">
              {profile.name}
            </p>
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p>
              Built with{" "}
              <span className="text-[#C8A882]">♥</span>{" "}
              &amp; Next.js
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
