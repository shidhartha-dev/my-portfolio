# 🚀 Portfolio | Full-Stack Developer

A modern, visually stunning developer portfolio built with **Next.js 16**, **React 19**, and **TypeScript**. Features fluid WebGL animations, interactive particle backgrounds, dark/light theme support, and a fully responsive bento-grid layout.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-Private-red)

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sections Breakdown](#-sections-breakdown)
- [Customization](#-customization)
- [Pending Tasks](#-pending-tasks)

---

## ✨ Features

### 🎨 Visual & Interactive
- **Fluid Splash Cursor** — WebGL-based fluid dynamics simulation that reacts to mouse movement (Navier-Stokes solver with vorticity confinement, advection, divergence, and pressure projection)
- **Custom Cursor** — Smooth trailing dot cursor with hover-state detection (auto-hides on touch devices)
- **Particle Background** — Animated interactive particle network using tsParticles with grab-on-hover interactivity
- **CSS Animations** — Staggered fade-in-up entrance animations on the hero section cards
- **Smooth Scrolling** — Native smooth scroll with scroll-spy active section tracking

### 🌗 Theming
- **Dark / Light Mode** — Full theme toggle with CSS custom properties (design tokens)
- **System Preference Detection** — Defaults to OS-level `prefers-color-scheme` on first visit
- **Persistent Theme** — Saves preference to `localStorage` and applies it via a blocking inline script to prevent flash of incorrect theme (FOIT)

### 📱 Responsive Design
- **Desktop Navbar** — Centered floating pill-style navigation with active indicator and theme toggle
- **Mobile Navbar** — Collapsible hamburger menu with smooth slide-down animation
- **Fluid Typography** — Uses `clamp()` for responsive font sizes across all breakpoints
- **Responsive Grids** — CSS Grid with `auto-fill` / `minmax()` for projects, skills, and services

### ⚡ Performance
- **Dynamic Imports** — Particle background and provider are lazy-loaded with `next/dynamic` (SSR disabled for WebGL components)
- **No External Icon Library** — All icons are inline SVGs (zero extra JS bundle weight)
- **CSS-Only Design System** — No CSS-in-JS runtime; all styles via globals.css with CSS custom properties
- **Retina-Aware Canvas** — WebGL canvas scales by device pixel ratio for crisp rendering

### 🔍 SEO & Metadata
- **Open Graph Tags** — Title, description, and type for social sharing previews
- **Semantic HTML** — Proper `<section>`, `<nav>`, `<main>`, `<footer>` structure with ARIA labels
- **Keywords Meta** — Portfolio, Full-Stack Developer, Web Development, React, Next.js, TypeScript

---

## 🛠 Tech Stack

| Layer        | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 16 (App Router)          |
| UI Library  | React 19                          |
| Language    | TypeScript 5                      |
| Styling     | CSS Custom Properties + Globals   |
| Font        | Outfit (Google Fonts)             |
| Particles   | tsParticles (`@tsparticles/react` + `@tsparticles/slim`) |
| Fluid FX    | Custom WebGL (GLSL shaders)       |
| Linting     | ESLint 9 + eslint-config-next     |

---

## 📁 Project Structure

```
my-portfolio/
├── public/                     # Static assets (SVGs)
├── src/
│   ├── app/
│   │   ├── globals.css         # Full design system (1300+ lines)
│   │   ├── layout.tsx          # Root layout (metadata, theme script, cursors)
│   │   ├── page.tsx            # Main page (assembles all sections)
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx          # Desktop + mobile nav with scroll-spy & theme toggle
│   │   ├── HeroSection.tsx     # Bento-grid hero (name, profile, about, mindset, quote, location)
│   │   ├── ProjectsSection.tsx # Featured projects grid with gradient cards
│   │   ├── SkillsSection.tsx   # Technical skills by category with SVG icons
│   │   ├── ServicesSection.tsx  # Services offered grid
│   │   ├── AvailabilitySection.tsx # Interactive calendar for booking
│   │   ├── ContactSection.tsx  # Contact info + social links
│   │   ├── Footer.tsx          # Copyright footer
│   │   ├── CustomCursor.tsx    # Smooth trailing cursor with hover state
│   │   ├── SplashCursor.tsx    # WebGL fluid dynamics simulation
│   │   ├── ParticleBackground.tsx      # tsParticles config & renderer
│   │   └── ParticlesProviderWrapper.tsx # tsParticles engine initializer
│   └── data/
│       ├── projects.ts         # Project entries (title, category, tags, links)
│       ├── skills.ts           # Skill categories (Frontend, Backend, Tools & DevOps)
│       └── services.ts         # Service offerings data
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command          | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start development server (hot reload) |
| `npm run build` | Create optimized production build     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint checks                    |

---

## 📄 Sections Breakdown

### 1. Hero Section
A bento-grid layout with 6 cards:
- **Name Card** — Large watermark letter, role badge ("Full-Stack Developer"), and full name
- **Profile Image** — Gradient placeholder with `</>` code symbol
- **About / Craft Card** — Summary of expertise (full-stack, UI/UX, cloud) with tech tags (React, TypeScript, Node.js, AWS)
- **Mindset Card** — Philosophy statement with decorative gradient image
- **Quote Card** — Inspirational quote with decorative quotation icon
- **Location Card** — City name with coordinate display and glowing accent background

### 2. Projects Section
- Displays 6 featured projects in a responsive grid
- Each card shows a numbered gradient background, category label, and project title
- Projects include: E-Commerce Platform, AI Dashboard, Mobile Banking App, Design System, Cloud Infrastructure, Social Media Platform
- Data-driven from `src/data/projects.ts` (easy to add/remove projects)

### 3. Skills Section
- Organized into 3 categories: **Frontend**, **Backend**, **Tools & DevOps**
- Each skill has a custom SVG icon (React, Next.js, TypeScript, CSS/Sass, Node.js, Python, PostgreSQL, GraphQL, Git, Docker, AWS, Figma)
- Data-driven from `src/data/skills.ts`

### 4. Services Section
- 6 service offerings in a responsive grid
- Services: Websites & Web Apps, API Development, UI/UX Design, Cloud & DevOps, Mobile Development, Technical Consulting
- Each card has a contextual icon and hover arrow animation
- Data-driven from `src/data/services.ts`

### 5. Availability Section
- Interactive **calendar component** with month navigation (previous/next)
- Highlights today's date, disables past dates, marks future dates as available
- "Open for meetings" live status indicator with pulsing green dot
- CTA for booking a 30-minute call

### 6. Contact Section
- Direct email link (`hello@example.com`)
- Social media links: GitHub, LinkedIn, Twitter/X, Dribbble
- All links use SVG icons with hover effects

### 7. Footer
- Dynamic copyright year
- "Built with ♥ and Next.js" attribution

---

## 🎨 Customization

### Personal Information
Update placeholder content in these files:

| What to Change       | File                              | What to Edit                     |
|---------------------|-----------------------------------|----------------------------------|
| Name                | `src/components/HeroSection.tsx`  | "YOUR NAME" text                 |
| City & coordinates  | `src/components/HeroSection.tsx`  | "Your City" and coordinate text  |
| Email address       | `src/components/ContactSection.tsx` | `hello@example.com` mailto link |
| Social links        | `src/components/ContactSection.tsx` | GitHub, LinkedIn, X, Dribbble URLs |
| Profile image       | `src/components/HeroSection.tsx`  | Replace gradient div with `<Image>` |
| Page title & meta   | `src/app/layout.tsx`              | `metadata` object                |

### Content Data
Edit the data files in `src/data/`:
- **`projects.ts`** — Add/edit/remove portfolio projects
- **`skills.ts`** — Update skill categories and individual skills
- **`services.ts`** — Modify service offerings

### Theme Colors
Edit CSS custom properties in `src/app/globals.css`:
- `:root` block → dark mode colors
- `[data-theme="light"]` block → light mode colors
- Primary accent: `--accent: #10b981` (Emerald green)

### Splash Cursor Configuration
The `SplashCursor` component accepts these props:

| Prop                 | Default  | Description                              |
|---------------------|----------|------------------------------------------|
| `SIM_RESOLUTION`    | `128`    | Fluid simulation grid resolution         |
| `DYE_RESOLUTION`    | `1440`   | Dye (color) texture resolution           |
| `DENSITY_DISSIPATION` | `3.5`  | How quickly the fluid fades out          |
| `VELOCITY_DISSIPATION` | `2`   | How quickly velocity decays              |
| `PRESSURE`          | `0.1`    | Pressure solver intensity               |
| `CURL`              | `3`      | Vorticity curl strength                  |
| `SPLAT_RADIUS`      | `0.2`    | Size of the fluid splat on interaction   |
| `SPLAT_FORCE`       | `6000`   | Force of each mouse splat               |
| `COLOR`             | `#015237`| Base color for the fluid effect          |
| `TRANSPARENT`       | `true`   | Whether the canvas background is transparent |
| `RAINBOW_MODE`      | `false`  | Cycle through rainbow colors             |

---

## 📋 Pending Tasks

### 🔴 High Priority
- [ ] **Replace placeholder content** — Update "YOUR NAME", "Your City", coordinates, email, and social links with real information
- [ ] **Add real project images** — Replace gradient placeholders with actual project screenshots in `/public/projects/`
- [ ] **Add a real profile photo** — Replace the `</>` gradient placeholder in HeroSection with an actual image using `next/image`
- [ ] **Add project detail pages** — Create individual project pages with descriptions, tech stack, screenshots, and live/repo links (currently cards are non-navigable buttons)

### 🟡 Medium Priority
- [ ] **Contact form** — Add a functional contact form (e.g., with Resend, EmailJS, or a serverless API route) instead of just a mailto link
- [ ] **Calendar booking integration** — Connect the availability calendar to a real booking system (e.g., Calendly embed, Cal.com, or custom API)
- [ ] **Blog / Articles section** — Add a blog or articles section (MDX or CMS-powered)
- [ ] **Testimonials section** — Add a client testimonials carousel or grid
- [ ] **Resume / CV download** — Add a downloadable PDF resume button
- [ ] **Scroll-to-top button** — Add a floating button to scroll back to the top
- [ ] **Page loading animation** — Add a splash/loading screen on initial page load
- [ ] **Animate on scroll** — Add intersection observer-based entrance animations for sections below the fold (currently only the hero has staggered animations)

### 🟢 Nice to Have
- [ ] **Accessibility audit** — Run Lighthouse/axe audit and fix any a11y issues (focus states, skip navigation, contrast ratios)
- [ ] **i18n / Multi-language support** — Add internationalization for multi-language portfolios
- [ ] **Analytics integration** — Add Google Analytics, Plausible, or Vercel Analytics
- [ ] **PWA support** — Add a web manifest and service worker for offline support
- [ ] **Sitemap & robots.txt** — Generate a sitemap for SEO
- [ ] **Performance optimization** — Add image optimization with `next/image`, font subsetting, and bundle analysis
- [ ] **Unit / E2E tests** — Add testing with Vitest and Playwright
- [ ] **CI/CD pipeline** — Set up GitHub Actions for linting, building, and deploying
- [ ] **Custom 404 page** — Design a branded not-found page
- [ ] **Easter eggs / micro-interactions** — Add Konami code, hover animations, or scroll-triggered effects for personality

---

## 📄 License

This project is private. All rights reserved.
