# Muskan Kumari Portfolio — Setup Instructions

## Quick Start

Open PowerShell or Command Prompt in the project folder and run:

```bash
# 1. Install all dependencies
npm install

# 2. Add your images (REQUIRED before first run)
# Copy your selfie photo → public/images/hero-portrait.jpg
# Copy your full body photo → public/images/bg-silhouette.jpg

# 3. Start the development server
npm run dev

# 4. Open your browser at:
# http://localhost:3000
```

## Image Setup (Very Important!)

Place these files in the `public/images/` folder:

| Filename | What it is |
|----------|-----------|
| `hero-portrait.jpg` | Your selfie (image 1) |
| `bg-silhouette.jpg` | Your full body photo (image 2) |
| `og-image.jpg` | Social share image (can be same as hero) |

## Build for Production

```bash
npm run build
npm start
```

## Editing Content

All website content is stored in the `content/` folder:

| File | What you can edit |
|------|------------------|
| `content/site.ts` | SEO title, description, domain |
| `content/profile.ts` | Name, bio, about, tools, workflow |
| `content/projects.ts` | All projects + showreel |
| `content/services.ts` | Services and features |
| `content/socials.ts` | All social links |

**To add a new project:** Open `content/projects.ts` and add a new object to the `projects` array. The UI updates automatically.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lenis (smooth scroll)
- React Icons

## Fonts

Using **Playfair Display** (headings) + **Inter** (body) from Google Fonts.
Both load automatically — no setup needed.

## Deployment

Deploy to Vercel for free:

```bash
npx vercel --prod
```

Or connect your GitHub repo to vercel.com for automatic deploys.
