import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Aplikasi Android, Website & Desktop | Mitra Asia',
  description:
    'Jasa pembuatan aplikasi Android, website, dan aplikasi desktop profesional. Layanan lengkap: konsultasi, desain UI/UX, development, testing, deployment, dan maintenance. Berpengalaman melayani bisnis di seluruh Indonesia.',
  keywords: [
    'jasa pembuatan aplikasi android',
    'jasa pembuatan website',
    'jasa pembuatan aplikasi desktop',
    'developer aplikasi android',
    'web development indonesia',
    'software house indonesia',
    'jasa mobile app',
    'pembuatan aplikasi custom',
    'jasa website profesional',
    'jasa aplikasi bisnis',
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Jasa Pembuatan Aplikasi Android, Website & Desktop | Mitra Asia',
    description:
      'Software house profesional untuk pembuatan aplikasi Android, website modern, dan aplikasi desktop custom. Solusi digital terpercaya untuk bisnis Anda.',
    url: siteUrl,
    siteName: 'Mitra Asia',
    images: [
      {
        url: `${siteUrl}/placeholder-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Mitra Asia - Jasa Pembuatan Aplikasi Android, Website & Desktop',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Aplikasi Android, Website & Desktop | Mitra Asia',
    description:
      'Software house terpercaya untuk pengembangan aplikasi Android, website, dan desktop dengan kualitas tinggi.',
    images: [`${siteUrl}/placeholder-logo.png`],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={`font-sans antialiased`}>
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Mitra Asia',
                url: siteUrl,
                logo: `${siteUrl}/placeholder-logo.png`,
                description: 'Software house profesional untuk jasa pembuatan aplikasi Android, website, dan aplikasi desktop',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lemahabang',
                  addressRegion: 'Cirebon',
                  postalCode: '',
                  addressCountry: 'ID',
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'Indonesia',
                },
                sameAs: [
                  // Tambahkan link media sosial Anda di sini
                  // 'https://facebook.com/mitraasia',
                  // 'https://instagram.com/mitraasia',
                  // 'https://linkedin.com/company/mitraasia',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: siteUrl,
                name: 'Mitra Asia',
                description: 'Jasa pembuatan aplikasi Android, website, dan desktop profesional',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${siteUrl}/search?q={search_term_string}`,
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Mitra Asia - Software House',
                url: siteUrl,
                image: `${siteUrl}/placeholder-logo.png`,
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lemahabang',
                  addressRegion: 'Cirebon',
                  addressCountry: 'ID',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  // Tambahkan koordinat jika ada
                  // latitude: '-6.7',
                  // longitude: '108.5',
                },
                telephone: '', // Tambahkan nomor telepon
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '17:00',
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'Service',
                    position: 1,
                    name: 'Jasa Pembuatan Aplikasi Android',
                    description: 'Pengembangan aplikasi Android native dan hybrid dengan teknologi terkini. Meliputi riset, desain UI/UX, development, testing, publikasi ke Play Store, dan maintenance.',
                    serviceType: 'Mobile App Development',
                    provider: {
                      '@type': 'Organization',
                      name: 'Mitra Asia',
                    },
                    areaServed: 'Indonesia',
                    offers: {
                      '@type': 'Offer',
                      priceCurrency: 'IDR',
                      availability: 'https://schema.org/InStock',
                    },
                  },
                  {
                    '@type': 'Service',
                    position: 2,
                    name: 'Jasa Pembuatan Website',
                    description: 'Pembuatan website profesional: company profile, e-commerce, portal berita, web aplikasi custom. Menggunakan teknologi modern, responsive, dan SEO-friendly.',
                    serviceType: 'Web Development',
                    provider: {
                      '@type': 'Organization',
                      name: 'Mitra Asia',
                    },
                    areaServed: 'Indonesia',
                    offers: {
                      '@type': 'Offer',
                      priceCurrency: 'IDR',
                      availability: 'https://schema.org/InStock',
                    },
                  },
                  {
                    '@type': 'Service',
                    position: 3,
                    name: 'Jasa Pembuatan Aplikasi Desktop',
                    description: 'Pengembangan aplikasi desktop untuk Windows, macOS, dan Linux. Solusi software custom untuk kebutuhan bisnis, point of sale (POS), inventory, dan sistem internal perusahaan.',
                    serviceType: 'Desktop App Development',
                    provider: {
                      '@type': 'Organization',
                      name: 'Mitra Asia',
                    },
                    areaServed: 'Indonesia',
                    offers: {
                      '@type': 'Offer',
                      priceCurrency: 'IDR',
                      availability: 'https://schema.org/InStock',
                    },
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: siteUrl,
                  },
                ],
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