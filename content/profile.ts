// ============================================================
// PROFILE CONFIGURATION — Edit this file to update all
// personal info across the entire website automatically
// ============================================================

export const profile = {
  name: "Muskan Kumari",
  title: "Video Editor & Visual Storyteller",
  subtitle: "B.Des Student · Coffee Media",

  tagline: "Edits that make viewers stay.",

  heroStatement:
    "I craft high-retention YouTube videos, documentaries, and short-form content that keeps your audience engaged — from the first frame to the last.",

  about: {
    headline: "Turning raw footage into compelling stories.",
    bio: "I'm Muskan Kumari, a Bachelor of Design (B.Des) student and passionate video editor. I believe every video has a story worth telling — and I'm dedicated to finding the best way to tell it. My focus is on clean pacing, purposeful transitions, and edits that create an emotional connection between creators and their audience.",
    bio2: "Through my studio Coffee Media, I work with creators and brands to deliver polished, high-retention content that performs. Whether it's a documentary, a talking-head interview, or a 60-second reel, I bring the same level of care and craft to every project.",
    stats: [
      { label: "Projects Delivered", value: "200+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Avg. Turnaround", value: "3–5 Days" },
      { label: "Years Experience", value: "1+" },
    ],
  },

  whyChooseMe: [
    {
      icon: "✦",
      title: "Clean Storytelling",
      description:
        "Every cut is intentional. I craft narratives that flow naturally and keep viewers emotionally invested.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "3–5 business day turnarounds without sacrificing quality. Your content calendar stays on track.",
    },
    {
      icon: "◎",
      title: "Attention to Detail",
      description:
        "From colour grading to sound design — the details that separate good edits from great ones.",
    },
    {
      icon: "◈",
      title: "Clear Communication",
      description:
        "You're always in the loop. No guesswork, no surprises — just smooth collaboration from start to finish.",
    },
  ],

  workflow: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We align on your vision, goals, and creative direction before a single clip is touched.",
    },
    {
      step: "02",
      title: "Editing",
      description:
        "Raw footage is transformed into a compelling, well-paced story using industry-standard tools.",
    },
    {
      step: "03",
      title: "Review",
      description:
        "You receive a draft with unlimited revisions until it's exactly what you envisioned.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Final export in your preferred format, optimised for every platform you need.",
    },
  ],

  tools: [
    {
      name: "DaVinci Resolve",
      icon: "/icons/davinci.svg",
      description: "Professional colour grading & editing",
    },
    {
      name: "CapCut",
      icon: "/icons/capcut.svg",
      description: "Fast, expressive short-form editing",
    },
    {
      name: "Canva",
      icon: "/icons/canva.svg",
      description: "Thumbnails, graphics & motion assets",
    },
  ],

  // Portrait image/video — place in /public/images/
  heroImage: "/muskan-portfolio/images/hero section image.mp4",

  // Background silhouette — place in /public/images/
  bgSilhouette: "/muskan-portfolio/images/full body image.jpeg",

  // Resume PDF — set to null to hide the download button
  resumeUrl: null,
} as const;
