"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import MagneticButton from "@/components/ui/MagneticButton";
import GlowOrb from "@/components/ui/GlowOrb";
import {
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiFiverr } from "react-icons/si";

const socialLinks = [
  socials.instagram && {
    icon: FiInstagram,
    href: socials.instagram,
    label: "Instagram",
  },
  socials.linkedin && {
    icon: FiLinkedin,
    href: socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: `mailto:${socials.email}`,
    label: "Email",
  },
  socials.fiverr && {
    icon: SiFiverr,
    href: socials.fiverr,
    label: "Fiverr",
  },
].filter(Boolean) as {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
}[];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      const nx = (e.clientX / window.innerWidth - 0.5) * 20;
      const ny = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x: nx, y: ny });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Glow Orbs ── */}
      <GlowOrb size={600} top="10%" left="-10%" color="warm" opacity={0.12} />
      <GlowOrb size={400} top="50%" right="-5%" color="light" opacity={0.1} delay={2} />
      <GlowOrb size={300} bottom="10%" left="20%" color="accent" opacity={0.08} delay={4} />

      {/* ── Mouse-follow light ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${50 + mousePos.x / 2}% ${50 + mousePos.y / 2}%, rgba(200,168,130,0.08) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* ── Floating particles ── */}
      <HeroParticles />

      {/* ── Grid lines ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="section-inner relative z-10 py-24 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* ── Left: Content ── */}
        <motion.div style={{ y: contentY, opacity }} className="order-2 lg:order-1">
          {/* Studio badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-ink-secondary mb-8 border border-glass-border"
          >
            <span
              className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
              aria-hidden="true"
            />
            Available for new projects
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-ink leading-none"
            >
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-gradient-warm">{profile.name.split(" ")[1]}</span>
            </motion.h1>
          </div>

          {/* Title */}
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-ink-muted text-base md:text-lg font-medium tracking-widest uppercase"
            >
              {profile.title}
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="h-px w-16 bg-gradient-to-r from-[#C8A882] to-transparent mb-8 origin-left"
            aria-hidden="true"
          />

          {/* Hero statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-ink-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            {profile.heroStatement}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <MagneticButton
              href="#work"
              variant="primary"
              size="lg"
            >
              View My Work ↓
            </MagneticButton>
            <MagneticButton
              href="#contact"
              variant="outline"
              size="lg"
            >
              Let&apos;s Connect
            </MagneticButton>
            {profile.resumeUrl && (
              <MagneticButton
                href={profile.resumeUrl}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </MagneticButton>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center gap-5"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-ink-secondary hover:text-ink transition-colors border border-glass-border"
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Portrait ── */}
        <motion.div
          style={{ y: portraitY, opacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Portrait container */}
          <motion.div
            style={{
              rotateX: mousePos.y * -0.3,
              rotateY: mousePos.x * 0.3,
            }}
            className="relative"
            animate={{
              rotateX: mousePos.y * -0.3,
              rotateY: mousePos.x * 0.3,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            {/* Glow behind portrait */}
            <div
              className="absolute inset-0 rounded-[3rem] blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at center, #C8A882 0%, transparent 70%)",
                transform: "scale(1.1)",
              }}
              aria-hidden="true"
            />

            {/* Portrait image/video */}
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] xl:w-96 xl:h-[32rem] rounded-[3rem] overflow-hidden glass border border-glass-border shadow-card-lift">
              {profile.heroImage.endsWith(".mp4") ? (
                <video
                  src={profile.heroImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <Image
                  src={profile.heroImage}
                  alt={`${profile.name} — ${profile.title}`}
                  fill
                  priority
                  className={`object-cover object-top transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 288px, (max-width: 1280px) 320px, 384px"
                />
              )}

              {/* Inner glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cream/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 glass border border-glass-border rounded-2xl px-4 py-3 shadow-glass"
            >
              <p className="text-xs text-ink-muted font-medium">B.Des Student</p>
              <p className="text-sm font-semibold text-ink font-heading">Coffee Media</p>
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-6 glass border border-glass-border rounded-2xl px-4 py-3 shadow-glass text-right"
            >
              <p className="text-2xl font-bold font-heading text-ink">200+</p>
              <p className="text-xs text-ink-muted font-medium">Projects Done</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <p className="text-xs text-ink-muted tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#C8A882] to-transparent"
        />
      </motion.div>
    </section>
  );
}

function HeroParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          aria-hidden="true"
          className="absolute rounded-full bg-[#C8A882]"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
          }}
          animate={{ opacity: [0, 0.4, 0], y: [0, -40, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
