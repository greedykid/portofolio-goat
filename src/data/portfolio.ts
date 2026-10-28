import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Rian Hartokusumo",
    headline: "Lulusan S1 Sistem Informasi — Web Developer",
    shortBio:
      "Lulusan S1 Sistem Informasi Universitas Gunadarma dengan fokus pada web development. Berpengalaman membangun aplikasi web fungsional menggunakan Laravel, PHP, MySQL, dan Bootstrap.",
    extendedBio:
      "Saya memiliki komitmen untuk membangun website yang terstruktur, rapi, dan mudah digunakan oleh pengguna. Terbiasa menangani alur pengembangan dari perancangan database relasional hingga antarmuka responsif, serta didukung keahlian pendukung produktivitas dan visual.",
    location: "Indonesia",
    email: "rianharto1945@gmail.com",
    ctaTextPrimary: "Hubungi Saya",
    ctaTextSecondary: "Lihat Proyek",
  },
  education: [
    {
      institution: "Universitas Gunadarma",
      degree: "Sarjana (S1)",
      field: "Sistem Informasi",
      status: "Selesai (Lulusan)",
      description:
        "Mempelajari rekayasa perangkat lunak, sistem basis data, analisis dan perancangan sistem informasi, serta dasar-dasar pemrograman web.",
    },
  ],
  skills: [
    {
      name: "Web Development",
      skills: ["Laravel", "PHP", "Bootstrap", "Web Development", "HTML/CSS", "JavaScript"],
    },
    {
      name: "Database",
      skills: ["MySQL", "Relational Database Design", "SQL Queries"],
    },
    {
      name: "Desain & Konten",
      skills: ["Canva", "CapCut"],
    },
    {
      name: "Produktivitas",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    },
  ],
  projects: [
    {
      id: "more-vapor",
      title: "Website Penjualan — More Vapor",
      category: "E-Commerce / Toko Online",
      description:
        "Pengembangan platform website katalog dan penjualan untuk toko vape More Vapor, mencakup manajemen produk, tampilan katalog responsif, dan alur pemesanan.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      role: "Web Developer",
      statusText: "Proyek Selesai",
    },
    {
      id: "toko-baju",
      title: "Website Pemesanan Toko Baju",
      category: "Katalog & Pemesanan",
      description:
        "Sistem informasi pemesanan produk pakaian yang memudahkan pelanggan melihat variasi busana, mengecek ketersediaan, dan mengajukan pesanan secara terstruktur.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      role: "Web Developer",
      statusText: "Proyek Selesai",
    },
  ],
  certificates: [],
  socials: [
    {
      platform: "Email",
      username: "rianharto1945@gmail.com",
      url: "mailto:rianharto1945@gmail.com",
      icon: "mail",
    },
    {
      platform: "Instagram",
      username: "@ini.yannnn",
      url: "https://www.instagram.com/ini.yannnn/",
      icon: "instagram",
    },
    {
      platform: "TikTok",
      username: "@yannnzyyy",
      url: "https://www.tiktok.com/@yannnzyyy",
      icon: "tiktok",
    },
  ],
};
