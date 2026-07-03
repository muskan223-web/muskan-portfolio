// ============================================================
// SERVICES CONFIGURATION
// Edit to update the services section entirely from here
// ============================================================

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  turnaround: string;
  price?: string; // Optional — leave undefined to hide pricing
  cta: string;
}

export const services: Service[] = [
  {
    id: "youtube-editing",
    icon: "🎬",
    title: "YouTube Editing",
    description:
      "High-retention YouTube videos engineered for watch time — strategic pacing, b-roll integration, motion graphics, and sound design.",
    features: [
      "Retention-optimised pacing",
      "B-roll & cutaway integration",
      "Colour grading",
      "Sound design & mixing",
      "Thumbnail consultation",
    ],
    turnaround: "3–5 Business Days",
    cta: "Get Started",
  },
  {
    id: "documentary-editing",
    icon: "📹",
    title: "Documentary Editing",
    description:
      "Cinematic documentary edits that transform raw interviews and footage into compelling, emotionally resonant narratives.",
    features: [
      "Story structure & arc building",
      "Interview assembly",
      "Cinematic colour grading",
      "Atmospheric sound design",
      "Archival footage integration",
    ],
    turnaround: "5–7 Business Days",
    cta: "Let's Collaborate",
  },
  {
    id: "talking-head",
    icon: "🎙️",
    title: "Talking Head Editing",
    description:
      "Clean, polished talking-head edits with dynamic J/L cuts, jump cuts, and graphics that elevate the speaking performance.",
    features: [
      "Jump cut refinement",
      "Dynamic L & J cuts",
      "Lower thirds & text overlays",
      "Noise reduction & audio clean-up",
      "Colour correction",
    ],
    turnaround: "2–4 Business Days",
    cta: "Book Now",
  },
  {
    id: "short-form",
    icon: "📱",
    title: "Short-form Content",
    description:
      "Scroll-stopping Reels, Shorts, and TikToks built with hook-first structure, trending audio, and beat-sync precision.",
    features: [
      "Hook-first structure",
      "Beat-synced transitions",
      "Trending audio placement",
      "Subtitles & captions",
      "Platform-optimised export",
    ],
    turnaround: "1–2 Business Days",
    cta: "Start a Project",
  },
];
