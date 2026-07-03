"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, type Project, type ProjectCategory } from "@/content/projects";
import FadeIn from "@/components/ui/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";
import { FiPlay, FiExternalLink } from "react-icons/fi";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "YouTube Video",
  "Documentary Edit",
  "Talking Head",
  "Short-form Content",
];

function getYtThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

function getYtUrl(id: string, isShort?: boolean) {
  if (isShort) return `https://youtube.com/shorts/${id}`;
  return `https://youtube.com/watch?v=${id}`;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08} direction="up">
      <article
        className="project-card group glass border border-glass-border"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden" style={{ aspectRatio: project.isShort ? "9/16" : "16/9" }}>
          <Image
            src={getYtThumbnail(project.youtubeId)}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Dark overlay on hover */}
          <div className="project-card-overlay" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="glass-dark text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Duration badge */}
          {project.duration && project.duration !== "Auto" && (
            <div className="absolute top-3 right-3 z-10">
              <span className="glass-dark text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {project.duration}
              </span>
            </div>
          )}

          {/* Hover action buttons */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-0 z-20 flex items-center justify-center gap-4"
              >
                <a
                  href={getYtUrl(project.youtubeId, project.isShort)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cream text-ink text-sm font-semibold px-5 py-3 rounded-full hover:bg-white transition-colors shadow-lg"
                  aria-label={`Watch ${project.title}`}
                >
                  <FiPlay size={14} />
                  Watch
                </a>
                <a
                  href={getYtUrl(project.youtubeId, project.isShort)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass border border-white/30 text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={`View details for ${project.title}`}
                >
                  <FiExternalLink size={14} />
                  Details
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-heading font-semibold text-ink text-lg mb-1.5 group-hover:text-gradient-warm transition-all">
            {project.title}
          </h3>
          <p className="text-ink-muted text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Split shorts from longs for different grid layouts
  const longForm = filtered.filter((p) => !p.isShort);
  const shortForm = filtered.filter((p) => p.isShort);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 overflow-hidden"
      aria-label="Selected Work"
    >
      <GlowOrb size={500} top="20%" right="-10%" color="light" opacity={0.1} />
      <GlowOrb size={300} bottom="10%" left="-5%" color="warm" opacity={0.08} delay={3} />

      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted mb-4 block">
              Portfolio
            </span>
          </FadeIn>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl font-bold text-ink mb-6"
            >
              Selected Work
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              A curated collection of edits — YouTube, documentary, talking head, and short-form.
            </p>
          </FadeIn>
        </div>

        {/* Filter tabs */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-14" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-none ${
                  activeCategory === cat
                    ? "bg-ink text-cream shadow-md"
                    : "glass border border-glass-border text-ink-secondary hover:bg-cream-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Long-form grid */}
        <AnimatePresence mode="wait">
          {longForm.length > 0 && (
            <motion.div
              key={`long-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-12"
            >
              {longForm.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Short-form grid */}
        <AnimatePresence mode="wait">
          {shortForm.length > 0 && (
            <motion.div
              key={`short-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {longForm.length > 0 && (
                <FadeIn>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-cream-deeper" />
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-ink-muted">
                      Short-form
                    </span>
                    <div className="h-px flex-1 bg-cream-deeper" />
                  </div>
                </FadeIn>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {shortForm.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {filtered.length === 0 && (
          <FadeIn>
            <p className="text-center text-ink-muted py-20 text-lg">
              No projects in this category yet.
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
