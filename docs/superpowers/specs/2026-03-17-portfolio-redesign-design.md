# Portfolio Redesign — Design Spec

## Overview

Complete visual redesign of the portfolio website. Moving from a generic dark theme with particle backgrounds and icon grids to a minimal, elegant, cinematic design with a monochrome zinc palette and serif/sans typography pairing.

**Target audience:** Recruiters/hiring managers and technical peers.

## Design Decisions

| Decision | Choice |
|----------|--------|
| Vibe | Minimal & Elegant |
| Layout | Single-page, cinematic full-viewport sections |
| Palette | Dark monochrome (zinc) — no accent color |
| Motion | Subtle fade-ins, no parallax or particles |
| Typography | Playfair Display (headings) + Inter (body) |
| Sections | Hero, About, Projects, Skills, Education, Footer |
| Projects | 2-column minimal grid cards with numbering |

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| base | `#09090b` | Page background |
| surface | `#18181b` | Card backgrounds, filled tags |
| border | `#27272a` | Borders, dividers |
| muted | `#3f3f46` | Decorative elements, numbering |
| subtle | `#52525b` | Secondary labels, nav links |
| description | `#71717a` | Body descriptions, tag text |
| body | `#a1a1aa` | Primary body text |
| heading | `#fafafa` | Headings, primary text |

## Typography

- **Headings:** Playfair Display, weight 400, serif
- **Body:** Inter, weights 300/400, sans-serif
- **Labels/Tags:** Inter, 9-10px, uppercase, letter-spacing 1-3px

## Navigation

- Fixed top bar, transparent background
- Left: Logo initial "S." in Playfair Display
- Right: Section links (About, Projects, Skills, Education) — uppercase, small, muted (`#52525b`), hover to `#a1a1aa`

## Sections

### 1. Hero (100vh)

- Centered layout
- Uppercase subtitle: "AI Engineer & Researcher" in Inter, `#52525b`
- Full name in Playfair Display, ~64px, `#fafafa`
- Thin horizontal divider (40px, `#27272a`)
- One-line description in Inter 300, `#52525b`
- Two CTAs: "View Work" (solid white `#fafafa` bg, dark text) and "Get in Touch" (ghost, `#27272a` border, `#71717a` text)
- "SCROLL" hint at bottom, `#27272a`

### 2. About (100vh)

- Centered, max-width 600px
- Section label: uppercase, `#3f3f46`, letter-spacing 4px
- Heading: "A bit about me." in Playfair Display, 40px
- 2 short paragraphs, Inter 300, `#71717a`, line-height 1.9

### 3. Projects (100vh)

- Section label + Playfair heading centered
- 2-column grid of minimal cards
- Grid: 1px gap with `#18181b` border between cells
- Each card:
  - Background: `#09090b`, hover: `#0f0f12`
  - Numbered: "01", "02", etc. in `#27272a`
  - Project name in Playfair Display, 20px, `#a1a1aa`, hover: `#fafafa`
  - Description in Inter 300, 12px, `#71717a`
  - Tags at bottom: 9px uppercase, `#3f3f46` text, `#18181b` border
  - Hover reveals GitHub link
- Responsive: stacks to single column on mobile

### 4. Skills (100vh)

- Centered, max-width 700px
- Section label + Playfair heading
- Flex-wrap grid of text pills — no icons
- Each pill: Inter 12px 300, `#52525b` text, `#18181b` border, 2px border-radius
- Hover: text `#a1a1aa`, border `#27272a`

### 5. Education (100vh)

- Centered, max-width 600px
- Section label + Playfair heading: "Background."
- Each entry: degree name in Playfair 20px `#e4e4e7`, school in Inter 13px `#52525b`, year in Inter 11px `#3f3f46`
- Thin divider between entries

### 6. Footer

- Min-height 40vh
- Top border `#18181b`
- "Let's connect." in Playfair Display, 32px
- Links: Email, LinkedIn, GitHub — uppercase, `#3f3f46`, hover `#a1a1aa`
- Copyright at bottom, `#27272a`

## Animation

- All sections: fade-in + slight upward translate (20px) on scroll into viewport
- Trigger: Intersection Observer, threshold ~10%
- Duration: ~0.6s ease
- No particle background
- No parallax
- Respect `prefers-reduced-motion`

## What's Removed

- Particle canvas background
- Dark/light theme toggle
- Skill icon grid (replaced with text pills)
- Card-based project layout with colored accent indicators
- Badge chips in hero
- Mobile hamburger menu animation (simplified nav)

## Technical Notes

- Framework: React 19 + Vite (unchanged)
- No new dependencies required (Google Fonts loaded via `<link>`)
- All styling via vanilla CSS custom properties
- Single App.jsx can be restructured into smaller components during implementation
- Responsive breakpoints: 768px (tablet), 480px (mobile)
