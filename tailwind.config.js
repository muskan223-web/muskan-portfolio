/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F5F2",
        "cream-dark": "#EDE9E3",
        "ink": "#0A0A0A",
        "ink-secondary": "#3A3A3A",
        "ink-muted": "#7A7A7A",
        "glass-white": "rgba(255,255,255,0.08)",
        "glass-border": "rgba(255,255,255,0.15)",
      },
      fontFamily: {
        heading: ["var(--font-clash)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cream-gradient": "linear-gradient(135deg, #F7F5F2 0%, #EDE9E3 50%, #E4DED6 100%)",
        "glow-gradient": "radial-gradient(ellipse at center, rgba(200,180,160,0.3) 0%, transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "text-reveal": "textReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        textReveal: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-hover": "0 16px 48px 0 rgba(31, 38, 135, 0.12)",
        "card-lift": "0 32px 64px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04)",
        "glow-soft": "0 0 60px rgba(180,160,140,0.3)",
      },
    },
  },
  plugins: [],
};
