export type Lang = "en" | "id"

export type Project = {
  slug: string
  title: string
  company: string
  description: string
  tags: string[]
  image: string
  portfolioImages?: string[]
  year: string
  bgColor: string
}

export function getProjects(lang: Lang): Project[] {
  return [
    {
      slug: "futura-operation",
      title: "FUTURA OPERATION",
      company: "PT FUTURA ENERGI INDONESIA (FEI) - Operational App",
      description:
        lang === "en"
          ? "Futura App is designed for PT FEI to elevate operational project management for renewable energy installations. Monitor with ease, foster transparency, ensure accountability, and drive efficiency in every facet."
          : "Futura App dirancang untuk PT FEI guna meningkatkan manajemen proyek operasional instalasi energi terbarukan. Pantau dengan mudah, tingkatkan transparansi, jaga akuntabilitas, dan dorong efisiensi di setiap aspek.",
      tags: ["Laravel", "Vue", "Flutter", "MySQL", "Figma"],
      image: "https://assets.dafidea.xyz/images/gapai-cita/cover.webp?w=3840&q=75",
      portfolioImages: [
        "https://assets.dafidea.xyz/images/gapai-cita/cover.webp?w=3840&q=75",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
      year: "2023",
      bgColor: "bg-blue-500",
    },
    {
      slug: "sier-sport-arena",
      title: "SIER SPORT ARENA",
      company: "PT SIER - Online Booking App",
      description:
        lang === "en"
          ? "SIER Sport Arena is tailored for sports enthusiasts, this platform simplifies court reservations and membership registration keeps the user informed about field availability, and elevates the sports experience with ease and excitement."
          : "SIER Sport Arena ditujukan untuk para penggiat olahraga; platform ini memudahkan pemesanan lapangan dan pendaftaran keanggotaan, memberi informasi ketersediaan lapangan, serta meningkatkan pengalaman olahraga dengan mudah dan menyenangkan.",
      tags: ["Laravel", "Vue", "Flutter", "MySQL", "Figma", "Xendit"],
      image: "/placeholder.jpg",
      portfolioImages: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
      year: "2023",
      bgColor: "bg-blue-500",
    },
    {
      slug: "gapai-cita",
      title: "GAPAI CITA",
      company: "GENERASI CERDAS INDONESIA - Online Aptitude App",
      description:
        lang === "en"
          ? "An online platform designed for aptitude assessment for students. Created in collaboration with certified psychologists, this app ensures precision in test results, raising the bar for accuracy and insight."
          : "Platform online untuk asesmen bakat siswa. Dibuat bersama psikolog bersertifikat, aplikasi ini memastikan ketepatan hasil tes, meningkatkan akurasi dan wawasan.",
      tags: ["Laravel", "Vue", "MySQL", "Figma"],
      image: "/gapai-cita-dashboard.jpg",
      portfolioImages: [
        "/gapai-cita-dashboard.jpg",
        "/gapai-cita-app-interface.jpg",
        "/gapai-cita-test-interface.jpg",
        "/gapai-cita-mobile.jpg",
        "/gapai-cita-report.jpg",
        "/gapai-cita-results.jpg",
      ],
      year: "2023",
      bgColor: "bg-pink-500",
    },
  ]
}

export function getProjectBySlug(slug: string, lang: Lang): Project | undefined {
  return getProjects(lang).find((p) => p.slug === slug)
}