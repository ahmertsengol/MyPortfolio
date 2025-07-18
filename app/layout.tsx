import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ahmet Mert Şengöl - Portfolio',
  description: 'Fırat Üniversitesi Yazılım Mühendisliği öğrencisi. AI/ML, Computer Vision ve algoritma alanlarında uzmanlaşan geliştiricinin portfolyosu.',
  keywords: ['Ahmet Mert Şengöl', 'Portfolio', 'Yazılım Mühendisliği', 'AI/ML', 'Computer Vision', 'React', 'Next.js'],
  authors: [{ name: 'Ahmet Mert Şengöl', url: 'https://github.com/ahmertsengol' }],
  creator: 'Ahmet Mert Şengöl',
  publisher: 'Ahmet Mert Şengöl',
  metadataBase: new URL('https://ahmertsengol.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ahmertsengol.dev',
    siteName: 'Ahmet Mert Şengöl Portfolio',
    title: 'Ahmet Mert Şengöl - Portfolio',
    description: 'Fırat Üniversitesi Yazılım Mühendisliği öğrencisi. AI/ML, Computer Vision ve algoritma alanlarında uzmanlaşan geliştiricinin portfolyosu.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ahmet Mert Şengöl Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmet Mert Şengöl - Portfolio',
    description: 'Fırat Üniversitesi Yazılım Mühendisliği öğrencisi. AI/ML, Computer Vision ve algoritma alanlarında uzmanlaşan geliştiricinin portfolyosu.',
    images: ['/og-image.svg'],
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
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 