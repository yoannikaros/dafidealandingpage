"use client"
import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SessionCard } from "@/components/ui/session-card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [lang, setLang] = useState<"en" | "id">("en")

  const t = {
    en: {
      nav: { home: "Home", services: "Services", works: "Works", testimonials: "Testimonials" },
      actions: { contact: "Contact Us", language: "English" },
      hero: {
        title: "Transform your business with cutting-edge digital solutions",
        subtitle: "Focus on your business, let us take care of your digital needs.",
        primary: "Services",
        secondary: "Contact us",
      },
      featured: { label: "Featured Project", title: "Discover our best works", moreDetail: "More Detail" },
      services: {
        label: "Our Services",
        title: "What we do to support your business?",
        sub: "Pre Project Consulting → Engagement → Agile Development → Launch & Support",
      },
      testimonials: { label: "Client Testimonials", title: "What our clients say" },
      contact: {
        label: "Contact Us",
        title: "We are always ready to help you",
        desc:
          "We have 8+ years of experience as a Digital Solution Partner. Let’s talk about how we can deliver impactful results for your business.",
        faq: {
          label: "FAQ",
          title: "Frequently Asked Questions",
          q1: "What should I do if I want to collaborate?",
          a1: "Reach us via email or phone. We’ll schedule an intro session to understand your goals.",
          q2: "What is Talent Service?",
          a2: "We provide vetted talents for design, development, and product to accelerate delivery.",
          q3: "How do we communicate and monitor the project?",
          a3: "Weekly check-ins, shared dashboards, and transparent reporting keep progress visible.",
          q4: "How fast can a project be delivered?",
          a4: "It depends on scope, but most engagements kick off within 1–2 weeks.",
          q5: "What if there are changes after release?",
          a5: "We support post-release iterations and maintenance based on your plan.",
        },
        map: { open: "Open Maps" },
      },
      footer: {
        tagline: "Transform your business with cutting-edge digital solutions.",
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact",
        home: "Home",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        works: "Works",
        testimonials: "Testimonials",
        webDev: "Web Development",
        mobile: "Mobile Apps",
        design: "UI/UX Design",
        consulting: "Consulting",
        rights: "© 2025 Dafidea. All rights reserved.",
      },
    },
    id: {
      nav: { home: "Beranda", services: "Layanan", works: "Karya", testimonials: "Testimoni" },
      actions: { contact: "Hubungi Kami", language: "Indonesia" },
      hero: {
        title: "Transformasi bisnis Anda dengan solusi digital mutakhir",
        subtitle: "Fokus pada bisnis Anda, serahkan kebutuhan digital kepada kami.",
        primary: "Layanan",
        secondary: "Hubungi kami",
      },
      featured: { label: "Proyek Unggulan", title: "Temukan karya terbaik kami", moreDetail: "Selengkapnya" },
      services: {
        label: "Layanan Kami",
        title: "Apa yang kami lakukan untuk mendukung bisnis Anda?",
        sub: "Konsultasi Pra Proyek → Keterlibatan → Pengembangan Agile → Rilis & Dukungan",
      },
      testimonials: { label: "Testimoni Klien", title: "Apa kata klien kami" },
      contact: {
        label: "Hubungi Kami",
        title: "Kami selalu siap membantu Anda",
        desc:
          "Kami memiliki pengalaman 8+ tahun sebagai Mitra Solusi Digital. Mari diskusikan bagaimana kami dapat memberikan hasil yang berdampak bagi bisnis Anda.",
        faq: {
          label: "FAQ",
          title: "Pertanyaan yang Sering Diajukan",
          q1: "Apa yang harus saya lakukan jika ingin berkolaborasi?",
          a1: "Hubungi kami via email atau telepon. Kami akan menjadwalkan sesi awal untuk memahami tujuan Anda.",
          q2: "Apa itu Layanan Talenta?",
          a2: "Kami menyediakan talenta terverifikasi untuk desain, pengembangan, dan produk guna mempercepat delivery.",
          q3: "Bagaimana cara komunikasi dan memantau proyek?",
          a3: "Cek rutin mingguan, dashboard bersama, dan pelaporan transparan menjaga kemajuan terlihat.",
          q4: "Seberapa cepat proyek dapat diselesaikan?",
          a4: "Tergantung cakupan, tetapi kebanyakan dimulai dalam 1–2 minggu.",
          q5: "Bagaimana jika ada perubahan setelah rilis?",
          a5: "Kami mendukung iterasi dan pemeliharaan pasca rilis sesuai rencana Anda.",
        },
        map: { open: "Buka Peta" },
      },
      footer: {
        tagline: "Transformasi bisnis Anda dengan solusi digital mutakhir.",
        quickLinks: "Tautan Cepat",
        services: "Layanan",
        contact: "Kontak",
        home: "Beranda",
        privacy: "Kebijakan Privasi",
        terms: "Ketentuan Layanan",
        works: "Karya",
        testimonials: "Testimoni",
        webDev: "Pengembangan Web",
        mobile: "Aplikasi Mobile",
        design: "Desain UI/UX",
        consulting: "Konsultasi",
        rights: "© 2025 Dafidea. Semua hak dilindungi.",
      },
    },
  }[lang]

  const projects = [
    {
      title: "FUTURA OPERATION",
      company: "PT FUTURA ENERGI INDONESIA (FEI) - Operational App",
      description:
        lang === "en"
          ? "Futura App is designed for PT FEI to elevate operational project management for renewable energy installations. Monitor with ease, foster transparency, ensure accountability, and drive efficiency in every facet."
          : "Futura App dirancang untuk PT FEI guna meningkatkan manajemen proyek operasional instalasi energi terbarukan. Pantau dengan mudah, tingkatkan transparansi, jaga akuntabilitas, dan dorong efisiensi di setiap aspek.",
      tags: ["Laravel", "Vue", "Flutter", "MySQL", "Figma"],
      image: "/dafidea-1.png",
      year: "2023",
      bgColor: "bg-blue-500"
    },
    {
      title: "SIER SPORT ARENA",
      company: "PT SIER - Online Booking App",
      description:
        lang === "en"
          ? "SIER Sport Arena is tailored for sports enthusiasts, this platform simplifies court reservations and membership registration keeps the user informed about field availability, and elevates the sports experience with ease and excitement."
          : "SIER Sport Arena ditujukan untuk para penggiat olahraga; platform ini memudahkan pemesanan lapangan dan pendaftaran keanggotaan, memberi informasi ketersediaan lapangan, serta meningkatkan pengalaman olahraga dengan mudah dan menyenangkan.",
      tags: ["Laravel", "Vue", "Flutter", "MySQL", "Figma", "Xendit"],
      image: "/dafidea-2.png",
      year: "2023",
      bgColor: "bg-blue-500",
    },
    {
      title: "GAPAI CITA",
      company: "GENERASI CERDAS INDONESIA - Online Aptitude App",
      description:
        lang === "en"
          ? "An online platform designed for aptitude assessment for students. Created in collaboration with certified psychologists, this app ensures precision in test results, raising the bar for accuracy and insight."
          : "Platform online untuk asesmen bakat siswa. Dibuat bersama psikolog bersertifikat, aplikasi ini memastikan ketepatan hasil tes, meningkatkan akurasi dan wawasan.",
      tags: ["Laravel", "Vue", "MySQL", "Figma"],
      image: "/dafidea-3.png",
      year: "2023",
      bgColor: "bg-pink-500",
    },
  ]

  const serviceCategories = [
    {
      title: lang === "en" ? "Web Development" : "Pengembangan Web",
      tags: ["Laravel", "Node", "Go", "Vue", "React", "TypeScript", "Quality & Testing Service"],
    },
    {
      title: lang === "en" ? "Mobile Development" : "Pengembangan Mobile",
      tags: ["iOS", "Android", "React Native", "Flutter", "Kotlin", "Swift"],
    },
    {
      title: lang === "en" ? "Design Concept" : "Konsep Desain",
      tags: ["Design System", "Ideation & Prototyping", "UI/UX Design"],
    },
    {
      title: lang === "en" ? "Talent Services" : "Layanan Talenta",
      tags: [
        "Flexible Scope",
        "Specialized Talent",
        "Project Manager",
        "Web Backend Developer",
        "Mobile Developer",
        "Frontend Developer",
        "QA Engineer",
        "UI Designer",
      ],
    },
    {
      title: lang === "en" ? "Not listed here?" : "Tidak ada di sini?",
      description:
        lang === "en"
          ? "Request and consult with our expert to achieve perfect team customized with your business needs."
          : "Minta dan konsultasikan dengan ahli kami untuk tim yang tepat, disesuaikan dengan kebutuhan bisnis Anda.",
      cta: { text: lang === "en" ? "Contact Us" : "Hubungi Kami", href: "#contact" },
    },
  ]

  const testimonials = [
    {
      name: "John Smith",
      company: "PT Futura Energi Indonesia",
      role: "Operations Manager",
      content:
        lang === "en"
          ? "Dafidea transformed our operations with the Futura App. The platform increased our efficiency by 40% and improved team transparency significantly."
          : "Dafidea mengubah operasional kami dengan Futura App. Platform ini meningkatkan efisiensi 40% dan transparansi tim secara signifikan.",
      avatar: "JS",
    },
    {
      name: "Siti Nurhaliza",
      company: "PT SIER",
      role: "CEO",
      content:
        lang === "en"
          ? "The SIER Sport Arena app exceeded our expectations. User adoption was immediate and our booking volume increased by 60% in the first month."
          : "Aplikasi SIER Sport Arena melampaui ekspektasi kami. Adopsi pengguna langsung tinggi dan volume pemesanan naik 60% di bulan pertama.",
      avatar: "SN",
    },
    {
      name: "Ahmad Wijaya",
      company: "Generasi Cerdas Indonesia",
      role: "Director",
      content:
        lang === "en"
          ? "Working with Dafidea on GAPAI CITA was exceptional. They understood our complex requirements and delivered a solution that truly helps students."
          : "Bekerja dengan Dafidea pada GAPAI CITA sangat luar biasa. Mereka memahami kebutuhan kompleks kami dan menghadirkan solusi yang benar-benar membantu siswa.",
      avatar: "AW",
    },
  ]

  const currentProject = projects[activeProject]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">d</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Dafidea</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">
              {t.nav.home}
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
              {t.nav.services}
            </a>
            <a href="#works" className="text-gray-700 hover:text-gray-900 font-medium">
              {t.nav.works}
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">
              {t.nav.testimonials}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="px-3 py-2 bg-gray-900 text-white text-sm rounded font-medium"
              onClick={() => setLang(lang === "en" ? "id" : "en")}
            >
              {t.actions.language} ▼
            </button>
            <button className="px-4 py-2 border border-gray-900 text-gray-900 text-sm rounded font-medium hover:bg-gray-900 hover:text-white transition">
              {t.actions.contact}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-4 md:pb-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t.hero.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{t.hero.subtitle}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition">
              {t.hero.primary}
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-50 transition">
              {t.hero.secondary}
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-96 mb-8 flex items-center justify-center">
            <svg viewBox="0 0 800 400" className="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Team collaboration illustration */}
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#e0f2fe", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#bae6fd", stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Desk */}
              <rect x="100" y="200" width="600" height="30" fill="#1a1a1a" rx="3" />
              <rect x="110" y="230" width="30" height="100" fill="#2d2d2d" rx="2" />
              <rect x="660" y="230" width="30" height="100" fill="#2d2d2d" rx="2" />

              {/* Plant */}
              <circle cx="350" cy="220" r="8" fill="#1a1a1a" />
              <line x1="350" y1="228" x2="340" y2="270" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="340" y1="270" x2="330" y2="280" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="340" y1="270" x2="350" y2="285" stroke="#1a1a1a" strokeWidth="2" />

              {/* Monitor */}
              <rect x="320" y="100" width="160" height="110" fill="none" stroke="#1a1a1a" strokeWidth="3" rx="2" />
              <rect x="330" y="110" width="140" height="90" fill="#f0f0f0" rx="1" />
              <rect x="360" y="210" width="80" height="8" fill="#1a1a1a" rx="1" />

              {/* Left Person */}
              <circle cx="180" cy="80" r="20" fill="#1a1a1a" />
              <ellipse cx="180" cy="115" rx="25" ry="35" fill="#1a1a1a" />
              <rect x="155" y="145" width="20" height="60" fill="#1a1a1a" rx="3" />
              <rect x="180" y="145" width="20" height="60" fill="#1a1a1a" rx="3" />

              {/* Right Person */}
              <circle cx="620" cy="75" r="20" fill="#1a1a1a" />
              <ellipse cx="620" cy="115" rx="25" ry="35" fill="#1a1a1a" />
              <rect x="595" y="145" width="20" height="60" fill="#1a1a1a" rx="3" />
              <rect x="620" y="145" width="20" height="60" fill="#1a1a1a" rx="3" />

              {/* Center Person */}
              <circle cx="400" cy="70" r="22" fill="#1a1a1a" />
              <ellipse cx="400" cy="115" rx="28" ry="38" fill="#1a1a1a" />
              <rect x="372" y="150" width="22" height="65" fill="#1a1a1a" rx="3" />
              <rect x="400" y="150" width="22" height="65" fill="#1a1a1a" rx="3" />
            </svg>
          </div>
        </div>
      </section>

            {/* Featured Projects Section */}
      <section id="works" className="bg-white pt-4 md:pt-6 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 mb-2">{t.featured.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.featured.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Cards */}
            <div className="lg:col-span-1 space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-6 rounded-lg transition ${
                    activeProject === index
                      ? "bg-gray-50 shadow-lg border-l-4 border-blue-600"
                      : "bg-white hover:shadow-md border border-gray-100"
                  }`}
                >
                  <p className="text-xs font-medium text-blue-600">{project.company.split(" - ")[1]}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                  {activeProject === index && (
                    <p className="text-sm text-gray-600 mt-4 line-clamp-3">{project.description}</p>
                  )}
                </button>
              ))}
            </div>

            {/* Active Project Details */}
            <div className="lg:col-span-2">
              <div
                className={`${currentProject.bgColor} rounded-lg p-8 h-full text-white`}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Left: Project Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative w-full overflow-hidden rounded-lg border border-white/30 bg-white/10">
                      <img
                        src={currentProject.image || "/placeholder.svg"}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right: Project Content */}
                  <div className="w-full md:w-1/2">
                    <p className="text-sm font-medium mb-2 opacity-90">Developed by : Dafidea</p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{currentProject.title}</h3>
                    <p className="text-base leading-relaxed mb-8">{currentProject.description}</p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {currentProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 border border-white rounded text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href="/works/gapai-cita" className="px-6 py-2 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition">
                      {t.featured.moreDetail}
                    </Link>
                  </div>
                </div>

                <p className="text-2xl font-bold opacity-75 mt-8">{currentProject.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-500 tracking-wide mb-3">{t.services.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{t.services.title}</h2>
            <p className="mt-4 text-sm md:text-base text-gray-600">{t.services.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((cat, index) => (
              <SessionCard
                key={index}
                title={(cat as any).title}
                tags={(cat as any).tags}
                description={(cat as any).description}
                cta={(cat as any).cta}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 mb-2">{t.testimonials.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{`"${testimonial.content}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-semibold text-gray-500 tracking-wide mb-3">{t.contact.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">{t.contact.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl">{t.contact.desc}</p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: FAQ */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 shadow-xl">
              <p className="text-xs uppercase tracking-wider text-gray-400">{t.contact.faq.label}</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">{t.contact.faq.title}</h3>

              <div className="mt-8">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">{t.contact.faq.q1}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{t.contact.faq.a1}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">{t.contact.faq.q2}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{t.contact.faq.a2}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">{t.contact.faq.q3}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{t.contact.faq.a3}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-white">{t.contact.faq.q4}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{t.contact.faq.a4}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-white">{t.contact.faq.q5}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{t.contact.faq.a5}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Right: Contact details + map */}
            <div className="flex flex-col gap-10">
              {/* Modern contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 rounded-lg p-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Email</p>
                      <a
                        href="mailto:hello@dafidea.com"
                        className="text-gray-900 font-medium hover:text-blue-600 transition"
                      >
                        hello@dafidea.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 rounded-lg p-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Phone</p>
                      <a
                        href="tel:+6286783987566"
                        className="text-gray-900 font-medium hover:text-blue-600 transition"
                      >
                        +62 867-839-87566
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group sm:col-span-2 rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 rounded-lg p-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Address</p>
                      <p className="text-gray-900 font-medium">Perum Mastrip C10, Sumbersari, Jember 68121</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern map card with overlay */}
              <div className="relative rounded-2xl border bg-white overflow-hidden shadow-sm">
                <div className="absolute inset-x-4 top-4 z-10 bg-white/90 backdrop-blur rounded-xl p-4 flex items-center justify-between gap-4 shadow-xs">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Dafidea Techno</h4>
                    <p className="text-xs text-gray-500">Sumbersari, Jember</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Dafidea%20Techno%20Sumbersari%20Jember"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.contact.map.open}
                  </a>
                </div>
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="Dafidea Techno Location"
                    src="https://maps.google.com/maps?q=Dafidea%20Techno%20Sumbersari%20Jember&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">d</span>
                </div>
                <span className="font-bold text-lg">Dafidea</span>
              </div>
              <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition">{t.footer.home}</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">{t.footer.services}</a>
                </li>
                <li>
                  <a href="#works" className="hover:text-white transition">{t.footer.works}</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">{t.footer.testimonials}</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">{t.footer.webDev}</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">{t.footer.mobile}</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">{t.footer.design}</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">{t.footer.consulting}</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">{t.footer.contact}</h4>
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

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">{t.footer.rights}</p>
            <div className="flex gap-6 text-gray-400 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
