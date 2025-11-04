"use client"
import Link from "next/link"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { getProjectBySlug, getProjects, type Lang } from "@/lib/projects"
import { getWorksTexts } from "@/dictionaries/works"

export default function WorkDetailPage() {
  const params = useParams() as { slug?: string }
  const slug = params?.slug || ""
  const router = useRouter()

  const searchParams = useSearchParams()
  const langParam = (searchParams?.get("lang") || "en").toLowerCase()
  const lang: Lang = langParam === "id" ? "id" : "en"
  const project = getProjectBySlug(slug, lang)
  const t = getWorksTexts(lang)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const handleImageClick = (img: string) => {
    setSelectedImage(img)
    setIsOpen(true)
  }
  const setLang = (next: Lang) => {
    router.push(`/works/${slug}?lang=${next}`)
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">d</span>
              </div>
              <span className="font-bold text-lg text-gray-900">Dafidea</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#home" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.home}</Link>
              <Link href="/#services" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.services}</Link>
              <Link href="/#works" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.works}</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.testimonials}</Link>
            </nav>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.notFound.title}</h1>
          <p className="text-gray-600 mb-8">{t.notFound.desc}</p>
          <Link href="/#works" className="px-6 py-2 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition">{t.notFound.back}</Link>
        </section>
      </main>
    )
  }

  const related = getProjects(lang).filter((p) => p.slug !== slug)
  const services = [
    { title: "Website", icon: "🌐" },
    { title: "UI Design", icon: "🎨" },
  ]
  const portfolioImages: string[] =
    Array.isArray(project.portfolioImages) && project.portfolioImages.length > 0
      ? project.portfolioImages
      : Array(6).fill(project.image || "/placeholder.jpg")

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">m</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Mitra Asia</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#home" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.home}</Link>
              <Link href="/#services" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.services}</Link>
              <Link href="/#works" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.works}</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">{t.nav.testimonials}</Link>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded border text-sm ${lang === "en" ? "bg-gray-900 text-white border-gray-900" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
              >EN</button>
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 rounded border text-sm ${lang === "id" ? "bg-gray-900 text-white border-gray-900" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
              >ID</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] border-b border-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image || "/placeholder.svg"})` }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
            <div className="inline-flex flex-col gap-2 bg-black/40 text-white rounded-lg px-4 py-3">
              <span className="text-xs uppercase tracking-wider">{slug}</span>
              <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-4">{t.story.about}</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.story.title}</h2>
            </div>

            <div>
              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Tech Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What we do */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-4">{t.services.sectionLabel}</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">{t.services.title}</h3>

              <div className="flex gap-3 flex-wrap">
                {services.map((service, idx) => (
                  <div key={idx} className="px-4 py-2 border-2 border-gray-900 rounded font-medium text-gray-900">
                    {t.services.items[idx] || service.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-4">{t.tech.sectionLabel}</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">{t.tech.title}</h3>

              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag, idx) => (
                  <div key={idx} className="px-4 py-2 border-2 border-gray-900 rounded font-medium text-gray-900">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 mb-4">{t.portfolio.sectionLabel}</p>
            <h2 className="text-4xl font-bold text-gray-900">{t.portfolio.title}</h2>
          </div>

          {/* Grid Layout - 3D Perspective Effect */}
          <div className="perspective space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioImages.slice(0, 3).map((image, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateX(${idx % 2 === 0 ? "2deg" : "-2deg"}) rotateY(${idx % 2 === 0 ? "-3deg" : "3deg"})`,
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image || "/placeholder.svg"} alt={`Portfolio ${idx + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioImages.slice(3, 6).map((image, idx) => (
                <div
                  key={idx + 3}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateX(${(idx + 3) % 2 === 0 ? "2deg" : "-2deg"}) rotateY(${(idx + 3) % 2 === 0 ? "-3deg" : "3deg"})`,
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image || "/placeholder.svg"} alt={`Portfolio ${idx + 4}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 mb-4">{t.related.sectionLabel}</p>
            <h2 className="text-4xl font-bold text-gray-900">{t.related.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/works/${rp.slug}?lang=${lang}`} className={`p-8 rounded-lg hover:shadow-lg transition cursor-pointer group border`}>
                <p className="text-sm font-medium text-gray-500 mb-2">{t.related.explore}</p>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:translate-x-2 transition">{rp.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8">{t.cta.desc}</p>
          <Link href="/#contact" className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition">{t.cta.button}</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">m</span>
                </div>
                <span className="font-bold text-lg">Mitra Asia</span>
              </div>
              <p className="text-gray-400 text-sm">Transform your business with cutting-edge digital solutions.</p>
              <p className="text-gray-400 text-sm">{t.footer.brandDesc}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition">{t.nav.home}</a></li>
                <li><a href="/#services" className="hover:text-white transition">{t.nav.services}</a></li>
                <li><a href="/#works" className="hover:text-white transition">{t.nav.works}</a></li>
                <li><a href="/#testimonials" className="hover:text-white transition">{t.nav.testimonials}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.servicesTitle}</h4>
              <ul className="space-y-2 text-gray-400">
                {t.footer.servicesItems.map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.contactTitle}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hello@mitraasia.com</li>
                <li>+62 (0) 812-3456-7890</li>
                <li className="pt-4">
                  <span className="inline-block mr-3"><a href="#" className="hover:text-white transition">Twitter</a></span>
                  <span className="inline-block mr-3"><a href="#" className="hover:text-white transition">LinkedIn</a></span>
                  <span className="inline-block"><a href="#" className="hover:text-white transition">Instagram</a></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
            <div className="flex gap-6 text-gray-400 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">{t.footer.privacyPolicy}</a>
              <a href="#" className="hover:text-white transition">{t.footer.termsOfService}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Preview Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 max-w-3xl">
          {selectedImage && (
            <img src={selectedImage} alt="Preview" className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}