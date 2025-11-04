import type { MetadataRoute } from 'next'
import { getProjects } from '@/lib/projects'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Generate dynamic URLs for works pages
  const projectUrls = getProjects('id').map((p) => ({
    url: `${siteUrl}/works/${p.slug}`,
    lastModified,
  }))

  // Base pages
  const baseUrls: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified },
  ]

  return [...baseUrls, ...projectUrls]
}