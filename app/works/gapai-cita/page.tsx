"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function GapaiCitaPage() {
  const [scrollPos, setScrollPos] = useState(0)

  const heroSection = {
    subtitle: "GENERASI CERDAS INDONESIA",
    title: "GAPAI CITA",
    tagline: "Online Aptitude Test",
    year: "2023",
    owner: "PT Indonesia Cerdas Berdaya",
    description: "Online Aptitude Test",
    services: ["Website", "UI Design"],
    technologies: ["Laravel", "Vue", "MySQL", "Figma"],
    heroImage: "/gapai-cita-app-interface.jpg",
  }

  const storySection = {
    title: "Story about this project",
    description:
      "Gapai Cita is an online platform designed for psychological assessment for students. Beautifully designed and user-friendly, offering a variety of psychological tests. Created in collaboration with certified psychologists, this app ensures precision in test results, raising the bar for accuracy and insight.",
  }

  const services = [
    { title: "Website", icon: "🌐" },
    { title: "UI Design", icon: "🎨" },
  ]

  const technologies = [
    { name: "Laravel", icon: "▭" },
    { name: "Vue", icon: "▯" },
    { name: "MySQL", icon: "◈" },
    { name: "Figma", icon: "◎" },
  ]

  const portfolioImages = [
    "/gapai-cita-dashboard.jpg",
    "/gapai-cita-test-interface.jpg",
    "/gapai-cita-results.jpg",
    "/gapai-cita-profile.jpg",
    "/gapai-cita-report.jpg",
    "/gapai-cita-mobile.jpg",
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">d</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Dafidea</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#home" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </Link>
            <Link href="/#works" className="text-gray-700 hover:text-gray-900 font-medium">
              Works
            </Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-3 py-2 bg-gray-900 text-white text-sm rounded font-medium">English ▼</button>
            <button className="px-4 py-2 border border-gray-900 text-gray-900 text-sm rounded font-medium hover:bg-gray-900 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Works
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">Gapai Cita</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Info */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-500 mb-2">{heroSection.subtitle}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">{heroSection.title}</h1>
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Hero Image */}
            <div className="flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg overflow-hidden">
                <img
                  src={heroSection.heroImage || "/placeholder.svg"}
                  alt="Gapai Cita"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Project Details */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Developed by</p>
                <p className="text-lg font-semibold text-gray-900">Dafidea</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{heroSection.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{heroSection.tagline}</p>
                <p className="text-gray-600 leading-relaxed">
                  An online platform designed for aptitude assessment for students. Created in collaboration with
                  certified psychologists, ensuring precision in test results.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-3">What we do</p>
                <div className="flex gap-3">
                  {services.map((service, idx) => (
                    <div key={idx} className="px-4 py-2 border border-gray-300 rounded font-medium text-gray-900">
                      {service.title}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-3">What we use</p>
                <div className="flex gap-3 flex-wrap">
                  {technologies.map((tech, idx) => (
                    <div key={idx} className="px-4 py-2 border border-gray-300 rounded font-medium text-gray-900">
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-2">Year</p>
                <p className="text-4xl font-bold text-gray-900">{heroSection.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-4">About</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{storySection.title}</h2>
            </div>

            <div>
              <p className="text-lg text-gray-600 leading-relaxed">{storySection.description}</p>
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
              <p className="text-sm font-medium text-gray-500 mb-4">Service</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">What we do</h3>

              <div className="flex gap-3 flex-wrap">
                {services.map((service, idx) => (
                  <div key={idx} className="px-4 py-2 border-2 border-gray-900 rounded font-medium text-gray-900">
                    {service.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-4">Tech Stack</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">What we use</h3>

              <div className="flex gap-3 flex-wrap">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="px-4 py-2 border-2 border-gray-900 rounded font-medium text-gray-900">
                    {tech.name}
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
            <p className="text-sm font-medium text-gray-500 mb-4">Portfolio</p>
            <h2 className="text-4xl font-bold text-gray-900">Design Showcase</h2>
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
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Portfolio ${idx + 1}`}
                    className="w-full h-64 object-cover"
                  />
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
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Portfolio ${idx + 4}`}
                    className="w-full h-64 object-cover"
                  />
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
            <p className="text-sm font-medium text-gray-500 mb-4">More Works</p>
            <h2 className="text-4xl font-bold text-gray-900">Other Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FUTURA OPERATION",
                subtitle: "Project Management App",
                color: "bg-blue-50",
              },
              {
                title: "SIER SPORT ARENA",
                subtitle: "Online Booking",
                color: "bg-blue-500",
              },
              {
                title: "DIGITAL SOLUTIONS",
                subtitle: "Custom Development",
                color: "bg-purple-500",
              },
            ].map((project, idx) => (
              <Link
                key={idx}
                href="/"
                className={`${project.color} p-8 rounded-lg hover:shadow-lg transition cursor-pointer group`}
              >
                <p className="text-sm font-medium text-gray-500 mb-2">{project.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:translate-x-2 transition">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create something amazing. Get in touch with our team today.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">d</span>
                </div>
                <span className="font-bold text-lg">Dafidea</span>
              </div>
              <p className="text-gray-400 text-sm">Transform your business with cutting-edge digital solutions.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#works" className="hover:text-white transition">
                    Works
                  </a>
                </li>
                <li>
                  <a href="/#testimonials" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hello@dafidea.com</li>
                <li>+62 (0) 812-3456-7890</li>
                <li className="pt-4">
                  <span className="inline-block mr-3">
                    <a href="#" className="hover:text-white transition">
                      Twitter
                    </a>
                  </span>
                  <span className="inline-block mr-3">
                    <a href="#" className="hover:text-white transition">
                      LinkedIn
                    </a>
                  </span>
                  <span className="inline-block">
                    <a href="#" className="hover:text-white transition">
                      Instagram
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">© 2025 Dafidea. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
