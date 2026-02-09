# NOTHING

An interactive countdown experience website. Wait. Reveal. Accept.

## Overview

NOTHING is an experimental web experience that guides users through a 2-minute countdown, building tension before revealing... nothing. It's a meditation on anticipation, expectation, and the beauty of emptiness.

## Features

- **120-second countdown** with dynamic tension indicator
- **Interactive mosaic background** that intensifies with time
- **Multi-phase experience**: Countdown → Reveal → Nothing → Acceptance
- **Fully accessible** with ARIA labels and reduced motion support
- **SEO optimized** with Open Graph, Twitter Cards, and JSON-LD structured data
- **Secure** with comprehensive security headers (CSP, HSTS, etc.)
- **Performance optimized** with image optimization and caching strategies

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main experience page
│   ├── not-found.tsx       # Custom 404 page
│   ├── error.tsx           # Error boundary
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── manifest.ts         # PWA manifest
│   └── globals.css         # Global styles
├── components/
│   ├── CountdownTimer.tsx  # Countdown component
│   ├── MosaicBackground.tsx # Animated background
│   ├── PhaseReveal.tsx     # Reveal phase
│   ├── PhaseNothing.tsx    # Nothing phase
│   └── PhaseAccepted.tsx   # Acceptance phase
└── lib/
    └── constants.ts        # Centralized constants
```

## Environment Variables

```bash
# Optional: Set your production URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript check |

## SEO & Metadata

- **robots.txt**: Configured for search engine crawling
- **sitemap.xml**: Dynamically generated
- **Open Graph**: Optimized for social sharing
- **Twitter Cards**: Enhanced preview on Twitter
- **JSON-LD**: Structured data for rich results

## Security

Implemented security headers:
- Content-Security-Policy (strict)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restricted APIs
- Strict-Transport-Security (production)

## Accessibility

- ARIA labels on all interactive elements
- Skip-to-content link for keyboard navigation
- `prefers-reduced-motion` support
- Screen reader friendly with live regions
- Proper semantic HTML structure

## License

MIT

---

*Built with Next.js, Tailwind CSS, and Framer Motion*
