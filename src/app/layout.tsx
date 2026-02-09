import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nothing.com'

export const metadata: Metadata = {
  title: {
    default: 'NOTHING',
    template: '%s | Countdown Experience',
  },
  description: 'Une expérience interactive de compte à rebours vers le vide. Attendez. Révélez. Acceptez.',
  keywords: ['countdown', 'experience', 'interactive', 'nothing', 'vide', 'art'],
  authors: [{ name: 'NOTHING', url: SITE_URL }],
  creator: 'NOTHING',
  publisher: 'NOTHING',

  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    title: 'NOTHING - Countdown Experience',
    description: 'Une expérience interactive de compte à rebours vers le vide.',
    siteName: 'NOTHING',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NOTHING - Countdown Experience',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'NOTHING - Countdown Experience',
    description: 'Une expérience interactive de compte à rebours vers le vide.',
    images: ['/og-image.png'],
    creator: '@nothing',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/manifest.json',

  // Verification
  verification: {
    // google: 'verification-token',
    // yandex: 'verification-token',
  },

  // Additional
  category: 'Art',
  classification: 'Interactive Experience',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'NOTHING',
  description: 'Une expérience interactive de compte à rebours vers le vide.',
  url: SITE_URL,
  applicationCategory: 'EntertainmentApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="oecAf0g9bpVtJ7OwIN8h6byljGDnWqzuNUYa615Bgqo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip-to-content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-void-text focus:text-void-bg focus:rounded focus:focus:outline-none"
        >
          Aller au contenu principal
        </a>
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
      </body>
    </html>
  )
}
