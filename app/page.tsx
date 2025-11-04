"use client"
import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "FUTURA OPERATION",
      company: "PT FUTURA ENERGI INDONESIA (FEI) - Operational App",
      description:
        "Futura App is designed for PT FEI to elevate operational project management for renewable energy installations. Monitor with ease, foster transparency, ensure accountability, and drive efficiency in every facet.",
      tags: ["Laravel", "Vue", "Flutter", "MySQL", "Figma"],
      image: "/dafidea-1.png",
      year: "2023",
      bgColor: "bg-blue-500"
    },
    {
      title: "SIER SPORT ARENA",
      company: "PT SIER - Online Booking App",
      description:
        "SIER Sport Arena is tailored for sports enthusiasts, this platform simplifies court reservations and membership registration keeps the user informed about field availability, and elevates the sports experience with ease and excitement.",
      tags: ["Laravel", "Vue", "Flutter", "MySQL", "Figma", "Xendit"],
      image: "/dafidea-2.png",
      year: "2023",
      bgColor: "bg-blue-500",
    },
    {
      title: "GAPAI CITA",
      company: "GENERASI CERDAS INDONESIA - Online Aptitude App",
      description:
        "An online platform designed for aptitude assessment for students. Created in collaboration with certified psychologists, this app ensures precision in test results, raising the bar for accuracy and insight.",
      tags: ["Laravel", "Vue", "MySQL", "Figma"],
      image: "/dafidea-3.png",
      year: "2023",
      bgColor: "bg-pink-500",
    },
  ]

  const serviceCategories = [
    {
      title: "Web Development",
      tags: ["Laravel", "Node", "Go", "Vue", "React", "TypeScript", "Quality & Testing Service"],
    },
    {
      title: "Mobile Development",
      tags: ["iOS", "Android", "React Native", "Flutter", "Kotlin", "Swift"],
    },
    {
      title: "Design Concept",
      tags: ["Design System", "Ideation & Prototyping", "UI/UX Design"],
    },
    {
      title: "Talent Services",
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
      title: "Not listed here?",
      description:
        "Request and consult with our expert to achieve perfect team customized with your business needs.",
      cta: { text: "Contact Us", href: "#contact" },
    },
  ]

  const testimonials = [
    {
      name: "John Smith",
      company: "PT Futura Energi Indonesia",
      role: "Operations Manager",
      content:
        "Dafidea transformed our operations with the Futura App. The platform increased our efficiency by 40% and improved team transparency significantly.",
      avatar: "JS",
    },
    {
      name: "Siti Nurhaliza",
      company: "PT SIER",
      role: "CEO",
      content:
        "The SIER Sport Arena app exceeded our expectations. User adoption was immediate and our booking volume increased by 60% in the first month.",
      avatar: "SN",
    },
    {
      name: "Ahmad Wijaya",
      company: "Generasi Cerdas Indonesia",
      role: "Director",
      content:
        "Working with Dafidea on GAPAI CITA was exceptional. They understood our complex requirements and delivered a solution that truly helps students.",
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
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </a>
            <a href="#works" className="text-gray-700 hover:text-gray-900 font-medium">
              Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">
              Testimonials
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="px-3 py-2 bg-gray-900 text-white text-sm rounded font-medium">English ▼</button>
            <button className="px-4 py-2 border border-gray-900 text-gray-900 text-sm rounded font-medium hover:bg-gray-900 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-4 md:pb-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform your business with cutting-edge digital solutions
          </h1>
          <p className="text-lg text-gray-600 mb-8">Focus on your business, let us take care of your digital needs.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition">
              Services
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-50 transition">
              Contact us
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
            <p className="text-sm font-medium text-gray-500 mb-2">Featured Project</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Discover our best works</h2>
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
                      More Detail
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
            <p className="text-sm font-semibold text-gray-500 tracking-wide mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              What we do to support your business?
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Pre Project Consulting → Engagement → Agile Development → Launch & Support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((cat, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50/60 p-6 hover:bg-white hover:shadow-sm transition"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>
                {"tags" in cat && (cat as any).tags ? (
                  <div className="flex flex-wrap gap-2">
                    {(cat as any).tags.map((tag: string, i: number) => (
                      <Badge
                        key={i}
                        className="rounded-full bg-white text-gray-800 border border-gray-200 px-3 py-1 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{(cat as any).description}</p>
                    <Button className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800">{
                      (cat as any).cta?.text || "Contact Us"
                    }</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 mb-2">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What our clients say</h2>
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
            <p className="text-sm font-semibold text-gray-500 tracking-wide mb-3">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              We are always ready to help you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              We have 8+ years of experience as a Digital Solution Partner. Let’s talk about how we can deliver impactful results for your business.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: FAQ */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-10 shadow-xl">
              <p className="text-xs uppercase tracking-wider text-gray-400">FAQ</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">Frequently Asked Questions</h3>

              <div className="mt-8">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">
                      What should I do if I want to collaborate?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Reach us via email or phone. We’ll schedule an intro session to understand your goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">What is Talent Service?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      We provide vetted talents for design, development, and product to accelerate delivery.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">How do we communicate and monitor the project?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Weekly check-ins, shared dashboards, and transparent reporting keep progress visible.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-white">How fast can a project be delivered?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      It depends on scope, but most engagements kick off within 1–2 weeks.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-white">What if there are changes after release?</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      We support post-release iterations and maintenance based on your plan.
                    </AccordionContent>
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
                    Open Maps
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
              <p className="text-gray-400 text-sm">Transform your business with cutting-edge digital solutions.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#works" className="hover:text-white transition">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
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

            {/* Contact */}
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

          {/* Divider */}
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
