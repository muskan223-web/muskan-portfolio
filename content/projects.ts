// ============================================================
// PROJECTS CONFIGURATION
// To add a project: copy one object below and fill it in.
// The UI renders automatically — no component changes needed.
// ============================================================

export type ProjectCategory =
  | "YouTube Video"
  | "Documentary Edit"
  | "Talking Head"
  | "Short-form Content";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  youtubeId: string; // Just the video ID (not full URL)
  isShort?: boolean;
  description: string;
  softwareUsed: string[];
  duration?: string;
  client?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // ── Long-form ──────────────────────────────────────────────
  {
    id: "project-01",
    title: "The Power of Perspective",
    category: "YouTube Video",
    youtubeId: "SQ_-I2D15jI",
    isShort: false,
    description:
      "A thought-provoking YouTube edit that seamlessly blends b-roll, interviews, and music to create an emotionally immersive narrative. Focused on clean pacing and intentional cuts.",
    softwareUsed: ["DaVinci Resolve", "Canva"],
    duration: "Auto",
    featured: true,
  },
  {
    id: "project-02",
    title: "Creator's Journey",
    category: "Talking Head",
    youtubeId: "5CwNuVVxx0w",
    isShort: false,
    description:
      "A polished talking-head edit engineered for maximum retention. Strategic jump cuts, dynamic L-cuts, and carefully timed transitions keep the viewer locked in throughout.",
    softwareUsed: ["DaVinci Resolve"],
    duration: "Auto",
    featured: true,
  },
  {
    id: "project-03",
    title: "Stories Untold",
    category: "Documentary Edit",
    youtubeId: "g4Ghv86DuyE",
    isShort: false,
    description:
      "A mini-documentary edit that weaves raw footage, ambient audio, and narration into a cohesive cinematic experience. Colour-graded for a warm, filmic aesthetic.",
    softwareUsed: ["DaVinci Resolve"],
    duration: "Auto",
    featured: true,
  },
  {
    id: "project-04",
    title: "Visual Narrative",
    category: "YouTube Video",
    youtubeId: "rn4moUjxekI",
    isShort: false,
    description:
      "A high-energy YouTube video edit with fast-paced cuts, motion graphics overlays, and sound design that amplifies the creator's personality and message.",
    softwareUsed: ["DaVinci Resolve", "Canva"],
    duration: "Auto",
    featured: false,
  },

  // ── Short-form ─────────────────────────────────────────────
  {
    id: "project-05",
    title: "60-Second Hook",
    category: "Short-form Content",
    youtubeId: "sBRxqcJsaD4",
    isShort: true,
    description:
      "A vertical short engineered for the scroll-stop moment — punchy hook, clean transitions, and tight sound design built for maximum watch-time.",
    softwareUsed: ["CapCut"],
    duration: "< 60s",
    featured: false,
  },
  {
    id: "project-06",
    title: "Reel Ready",
    category: "Short-form Content",
    youtubeId: "yEkHzqTLL38",
    isShort: true,
    description:
      "High-retention short-form edit with trending audio, precise beat-synced cuts, and a compelling visual flow designed to perform on Instagram and YouTube Shorts.",
    softwareUsed: ["CapCut"],
    duration: "< 60s",
    featured: false,
  },
  {
    id: "project-07",
    title: "Quick Cut Magic",
    category: "Short-form Content",
    youtubeId: "uP3gsTD-gFo",
    isShort: true,
    description:
      "A kinetic short-form edit that shows how fast, clean cuts and smart colour grading transform ordinary footage into thumb-stopping content.",
    softwareUsed: ["CapCut"],
    duration: "< 60s",
    featured: false,
  },
  {
    id: "project-08",
    title: "Story in Seconds",
    category: "Short-form Content",
    youtubeId: "uB31JhIPfyM",
    isShort: true,
    description:
      "Vertical storytelling at its finest — a single compelling story arc compressed into under a minute with no frame wasted.",
    softwareUsed: ["CapCut"],
    duration: "< 60s",
    featured: false,
  },
  {
    id: "project-09",
    title: "Viral Blueprint",
    category: "Short-form Content",
    youtubeId: "fdJ8PRdC6yI",
    isShort: true,
    description:
      "Short-form edit crafted with a retention-first mindset — hook, value, call-to-action — structured to perform on every algorithm.",
    softwareUsed: ["CapCut"],
    duration: "< 60s",
    featured: false,
  },
];

// Showreel — the main featured video for the Showreel section
export const showreel = {
  youtubeId: "SQ_-I2D15jI",
  title: "2026 Showreel",
  subtitle: "A collection of my finest edits — YouTube, documentary & short-form.",
};
