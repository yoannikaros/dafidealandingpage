import { type Lang } from "@/lib/projects"

type WorksTexts = {
  nav: { home: string; services: string; works: string; testimonials: string }
  notFound: { title: string; desc: string; back: string }
  story: { about: string; title: string }
  services: { sectionLabel: string; title: string; items: string[] }
  tech: { sectionLabel: string; title: string }
  portfolio: { sectionLabel: string; title: string }
  related: { sectionLabel: string; title: string; explore: string }
  cta: { title: string; desc: string; button: string }
  footer: {
    brandDesc: string
    quickLinks: string
    servicesTitle: string
    servicesItems: string[]
    contactTitle: string
    privacyPolicy: string
    termsOfService: string
    copyright: string
  }
}

const texts: Record<Lang, WorksTexts> = {
  en: {
    nav: { home: "Home", services: "Services", works: "Works", testimonials: "Testimonials" },
    notFound: {
      title: "Project not found",
      desc: "We couldn't find the project you were looking for.",
      back: "Back to Works",
    },
    story: { about: "About", title: "Story about this project" },
    services: { sectionLabel: "Service", title: "What we do", items: ["Website", "UI Design"] },
    tech: { sectionLabel: "Tech Stack", title: "What we use" },
    portfolio: { sectionLabel: "Portfolio", title: "Design Showcase" },
    related: { sectionLabel: "More Works", title: "Other Projects", explore: "Explore" },
    cta: {
      title: "Ready to start your project?",
      desc: "Let's work together to create something amazing. Get in touch with our team today.",
      button: "Contact Us",
    },
    footer: {
      brandDesc: "Transform your business with cutting-edge digital solutions.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      servicesItems: ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"],
      contactTitle: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2025 Mitra Asia. All rights reserved.",
    },
  },
  id: {
    nav: { home: "Beranda", services: "Layanan", works: "Karya", testimonials: "Testimoni" },
    notFound: {
      title: "Proyek tidak ditemukan",
      desc: "Kami tidak dapat menemukan proyek yang Anda cari.",
      back: "Kembali ke Karya",
    },
    story: { about: "Tentang", title: "Kisah tentang proyek ini" },
    services: { sectionLabel: "Layanan", title: "Apa yang kami lakukan", items: ["Situs web", "Desain UI"] },
    tech: { sectionLabel: "Teknologi", title: "Apa yang kami gunakan" },
    portfolio: { sectionLabel: "Portofolio", title: "Galeri Desain" },
    related: { sectionLabel: "Karya Lain", title: "Proyek Lain", explore: "Jelajahi" },
    cta: {
      title: "Siap memulai proyek Anda?",
      desc: "Mari bekerja sama untuk menciptakan sesuatu yang luar biasa. Hubungi tim kami sekarang.",
      button: "Hubungi Kami",
    },
    footer: {
      brandDesc: "Transformasikan bisnis Anda dengan solusi digital mutakhir.",
      quickLinks: "Tautan Cepat",
      servicesTitle: "Layanan",
      servicesItems: ["Pengembangan Web", "Aplikasi Mobile", "Desain UI/UX", "Konsultasi"],
      contactTitle: "Kontak",
      privacyPolicy: "Kebijakan Privasi",
      termsOfService: "Syarat dan Ketentuan",
      copyright: "© 2025 Mitra Asia. Seluruh hak dilindungi.",
    },
  },
}

export function getWorksTexts(lang: Lang): WorksTexts {
  return texts[lang]
}