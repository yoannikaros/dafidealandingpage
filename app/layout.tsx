import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Aplikasi Android | Mitra Asia',
  description:
    'Layanan pembuatan aplikasi Android end-to-end: perencanaan, UI/UX, pengembangan, integrasi backend, publikasi ke Play Store, dan maintenance.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Jasa Pembuatan Aplikasi Android | Mitra Asia',
    description:
      'Solusi pengembangan aplikasi Android untuk bisnis Anda: desain, development, QA, dan publikasi.',
    url: siteUrl,
    siteName: 'Mitra Asia',
    images: [
      {
        url: `${siteUrl}/placeholder-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Mitra Asia - Jasa Pembuatan Aplikasi Android',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Aplikasi Android | Mitra Asia',
    description:
      'Pengembangan aplikasi Android custom dengan kualitas tinggi dan dukungan penuh.',
    images: [`${siteUrl}/placeholder-logo.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: siteUrl,
                name: 'Mitra Asia',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `${siteUrl}/search?q={search_term_string}`,
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Mitra Asia',
                url: siteUrl,
                image: `${siteUrl}/placeholder-logo.png`,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lemahabang',
                  addressRegion: 'Cirebon',
                  addressCountry: 'ID',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Jasa Pembuatan Aplikasi Android',
                serviceType: 'Android App Development',
                provider: {
                  '@type': 'Organization',
                  name: 'Mitra Asia',
                  url: siteUrl,
                },
                areaServed: 'Indonesia',
                description:
                  'Pengembangan aplikasi Android custom: riset kebutuhan, desain UI/UX, pengembangan, integrasi API, QA, publikasi ke Play Store, dan perawatan berkelanjutan.',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'IDR',
                  availability: 'https://schema.org/InStock',
                },
              },
            ]),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
