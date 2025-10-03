import { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: {
    default: 'USMLE NextGen - AI-Powered Learning Platform',
    template: '%s | USMLE NextGen'
  },
  description: 'Master USMLE Step 1, Step 2 CK, and Step 3 with our AI-powered learning platform. Features include personalized AI tutoring, adaptive question bank, spaced repetition flashcards, and comprehensive analytics.',
  keywords: [
    'USMLE',
    'USMLE Step 1',
    'USMLE Step 2 CK',
    'USMLE Step 3',
    'medical education',
    'AI tutor',
    'question bank',
    'medical school',
    'board exam prep',
    'spaced repetition',
    'medical flashcards',
    'AI-powered learning'
  ],
  authors: [{ name: 'USMLE NextGen Team' }],
  creator: 'USMLE NextGen',
  publisher: 'USMLE NextGen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'USMLE NextGen - AI-Powered Learning Platform',
    description: 'Master USMLE exams with AI tutoring, adaptive questions, and comprehensive analytics.',
    siteName: 'USMLE NextGen',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'USMLE NextGen - AI-Powered Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USMLE NextGen - AI-Powered Learning Platform',
    description: 'Master USMLE exams with AI tutoring, adaptive questions, and comprehensive analytics.',
    images: ['/og-image.png'],
    creator: '@USMLENextGen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export function generatePageMetadata(options: {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const { title, description, path = '', noIndex = false } = options

  return {
    ...defaultMetadata,
    title: title ? `${title} | USMLE NextGen` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    alternates: {
      canonical: path,
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : defaultMetadata.robots,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ? `${title} | USMLE NextGen` : defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url: path,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ? `${title} | USMLE NextGen` : defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
    },
  }
}

export default defaultMetadata