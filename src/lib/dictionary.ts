export type Language = 'id' | 'en';

export const dictionary = {
  id: {
    sidebar: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
      role: "Creative Technologist"
    },
    hero: {
      greeting: "HALO, SAYA M. Z. HAIKAL HAMDANI",
      headline: "Web Developer &",
      headlineHighlight: "Teknolog Kreatif.",
      description: "Dari Mahasiswa Sistem Informasi hingga menciptakan solusi digital. Saya memadukan teknologi dan kreativitas untuk memecahkan masalah dunia nyata.",
      ctaProject: "Lihat Karya",
      ctaContact: "Hubungi Saya",
      stats: {
        experience: "Tahun Perjalanan",
        projects: "Proyek Beragam",
        clients: "Kolaborasi"
      }
    },
    about: {
      title: "Tentang Saya",
      story: "Perjalanan saya dimulai di SMK Negeri 2 Kota Sukabumi, menemukan kecintaan pada solusi digital. Dari freelance hingga menjadi instruktur, saya didorong oleh persimpangan antara teknologi dan kreativitas. Saat ini menempuh pendidikan Sistem Informasi di Universitas Nusa Putra.",
      skills: {
        core: ["Next.js", "React.js", "TypeScript", "Python", "Lua", "Tailwind CSS", "PHP", "Node.js"],
        creative: ["Desain UI/UX", "Kemasan Produk", "Seni Digital"],
        technical: ["Modding Game", "Reverse Engineering", "Bahasa Assembly"]
      }
    },
    experience: {
      title: "Pengalaman Profesional",
      educationTitle: "Pendidikan",
      present: "Sekarang",
      roles: [
        {
          title: "Pengembang Web",
          company: "Komite Rencana Tindak Lanjut (RTL)",
          period: "2025",
          desc: "Divisi IT - Mengembangkan dan memelihara situs web komite dan sistem digital sebagai sukarelawan."
        },
        {
          title: "Freelance Web Developer",
          company: "Layanan Undangan Digital",
          period: "2022 - Sekarang",
          desc: "Mengembangkan situs web modern dan responsif untuk layanan undangan digital."
        },
        {
          title: "Freelance Desainer Grafis",
          company: "Proyek Desain UI/UX",
          period: "2021 - Sekarang",
          desc: "Menciptakan antarmuka pengguna dan desain pengalaman pengguna untuk berbagai klien."
        },
        {
          title: "Instruktur Pemrograman",
          company: "Program Sukarelawan Komunitas",
          period: "2021 - 2022",
          desc: "Mengajar dasar-dasar pemrograman kepada pemuda di komunitas lokal."
        },
        {
          title: "Magang Software Development",
          company: "PT. Jerbee Indonesia",
          period: "2021",
          desc: "Memperoleh pengalaman langsung dalam pengembangan perangkat lunak dan kolaborasi proyek."
        }
      ],
      education: [
        {
          school: "Universitas Nusa Putra",
          degree: "S1 Sistem Informasi",
          period: "2024 - Sekarang",
          status: "Sedang Berkuliah"
        },
        {
          school: "Universitas Nusa Putra",
          degree: "S1 Desain Komunikasi Visual",
          period: "2022 - 2023",
          status: "Pindah Jurusan"
        },
        {
          school: "SMK Negeri 2 Kota Sukabumi",
          degree: "Rekayasa Perangkat Lunak",
          period: "2018 - 2021",
          status: "Lulus"
        }
      ]
    },
    projects: {
      title: "Proyek Demo",
      viewAll: "Lihat GitHub Saya",
      items: [
        {
          title: "SE K1 Gaming",
          desc: "Platform gaming atau komunitas interaktif.",
          tags: ["Next.js", "Gaming", "Community"],
          link: "https://se-k1-gaming.vercel.app/",
          image: "/project-se-k1.png"
        },
        {
          title: "Sakinah Jontor Food",
          desc: "Platform e-commerce atau katalog kuliner.",
          tags: ["E-commerce", "Food", "Catalog"],
          link: "https://sakinah-jontor-food.vercel.app/",
          image: "/project-sakinah.png"
        },
        {
          title: "Qodimatur Rofiah",
          desc: "Website portofolio untuk Pendidik & Mahasiswa.",
          tags: ["Next.js", "Portfolio", "Education"],
          link: "https://qodimatur-rofiah-portfolio.vercel.app/",
          image: "/project-qodimatur.png"
        },
        {
          title: "The Wedding of Indri & Luthfi",
          desc: "Undangan digital premium dengan fitur Mobile View & PWA Ready.",
          tags: ["Next.js", "PWA", "Mobile First", "Wedding"],
          link: "https://indri-luthfi-wedding.vercel.app/",
          image: "/project-wedding-indri.png"
        },
        {
          title: "Tasyakuran Indri & Luthfi",
          desc: "Website acara Ngunduh Mantu dengan RSVP & Galeri interaktif.",
          tags: ["Next.js", "PWA", "Mobile First", "Event"],
          link: "https://tasyakuran-indri-luthfi.vercel.app/",
          image: "/project-tasyakuran-indri.png"
        },
        {
          title: "Sakinah Grafika",
          desc: "Solusi Cetak & Desain Profesional.",
          tags: ["Next.js", "Printing", "Service", "Business"],
          link: "https://e-sakinah-grafika.vercel.app/",
          image: "/project-sakinah-grafika.png"
        },
        {
          title: "Seblak Teh Imas",
          desc: "Landing Page Cafe Seblak Premium.",
          tags: ["Next.js", "Culinary", "Landing Page"],
          link: "https://warung-seblak.vercel.app/",
          image: "/project-seblak.png"
        },
        {
          title: "Selamat Hari Raya Idul Adha",
          desc: "Kartu ucapan digital & galeri kelas SI24F.",
          tags: ["Next.js", "Event", "Gallery", "Greeting"],
          link: "https://eid-adha-si24f-mu.vercel.app/",
          image: "/project-idul-adha.png"
        },
        {
          title: "Trilogy Nusa Putra Blog",
          desc: "Blog cerita inspiratif mahasiswa Nusa Putra.",
          tags: ["Next.js", "Blog", "Education", "Storytelling"],
          link: "https://trilogy-npu-blog.vercel.app/",
          image: "/project-trilogy.png"
        },
        {
          title: "Yohani Ade Fadila",
          desc: "Desainer Grafis Profesional & Administrator.",
          tags: ["Next.js", "Portfolio", "Design", "Admin"],
          link: "https://yohani-ade-fadila.vercel.app/",
          image: "/project-yohani.png"
        },
        {
          title: "Sakinah Grafika V2",
          desc: "Solusi Cetak Profesional (Re-design).",
          tags: ["Next.js", "Printing", "E-commerce"],
          link: "https://v0-cv-sakinah-grafika-website.vercel.app/",
          image: "/project-sakinah-v2.png"
        },
        {
          title: "Startup Akuntansi Pro",
          desc: "Dashboard Akuntansi & Manajemen Keuangan SaaS.",
          tags: ["Next.js", "SaaS", "Finance", "Dashboard"],
          link: "https://startup-akuntansi-pro.vercel.app/",
          image: "/project-akuntansi.png"
        },
        {
          title: "Aplikasi Kas SI24F",
          desc: "Manajemen Kas Kelas & Transparansi Keuangan.",
          tags: ["Next.js", "Finance", "Class Management"],
          link: "https://aplikasi-kas-si24f.vercel.app/",
          image: "/project-kas.png"
        },
        {
          title: "Portal PSDM HMSI",
          desc: "Pengembangan Sumber Daya Mahasiswa HMSI.",
          tags: ["Next.js", "Organization", "Portal"],
          link: "https://portal-psdm-hmsi.vercel.app/",
          image: "/project-psdm.png"
        },
        {
          title: "ZepWed Digital Invitation",
          desc: "Platform Undangan Digital Premium.",
          tags: ["Next.js", "SaaS", "Wedding", "Platform"],
          link: "https://zepwed-diginvitation.vercel.app/",
          image: "/project-zepwed.png"
        }
      ]
    },
    contact: {
      title: "Mari Terhubung",
      desc: "Butuh web developer, desainer UI/UX, atau mentor teknis? Saya siap berkolaborasi.",
      copyEmail: "Salin Email",
      copied: "Email tersalin!",
      info: {
        email: "Fenrisulfr696@gmail.com",
        phone: "+62 815-7462-7052",
        address: "Sakinah Grafika - Blok H21, Perum Sakura Gardenia"
      },
      form: {
        name: "Nama",
        email: "Email",
        message: "Pesan",
        placeholderName: "Nama Anda",
        placeholderEmail: "email@contoh.com",
        placeholderMessage: "Ceritakan ide kolaborasi Anda...",
        submit: "Kirim Pesan",
        success: "Pesan terkirim!"
      }
    }
  },
  en: {
    sidebar: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      role: "Creative Technologist"
    },
    hero: {
      greeting: "HELLO, I'M M. Z. HAIKAL HAMDANI",
      headline: "Web Developer &",
      headlineHighlight: "Creative Technologist.",
      description: "From Information Systems student to creating digital solutions. I blend technology and creativity to solve real-world problems.",
      ctaProject: "View Work",
      ctaContact: "Contact Me",
      stats: {
        experience: "Years Journey",
        projects: "Diverse Projects",
        clients: "Collaborations"
      }
    },
    about: {
      title: "About Me",
      story: "My journey began at SMK Negeri 2 Kota Sukabumi, discovering a love for digital solutions. From freelancing to instructing, I am driven by the intersection of tech and creativity. Currently studying Information Systems at Universitas Nusa Putra.",
      skills: {
        core: ["Next.js", "React.js", "TypeScript", "Python", "Lua", "Tailwind CSS", "PHP", "Node.js"],
        creative: ["UI/UX Design", "Product Packaging", "Digital Art"],
        technical: ["Game Modding", "Reverse Engineering", "Assembly Language"]
      }
    },
    experience: {
      title: "Professional Experience",
      educationTitle: "Education",
      present: "Present",
      roles: [
        {
          title: "Web Developer",
          company: "RTL Committee",
          period: "2025",
          desc: "IT Division - Developing and maintaining committee websites and digital systems as a volunteer."
        },
        {
          title: "Freelance Web Developer",
          company: "Digital Invitation Services",
          period: "2022 - Present",
          desc: "Developing modern and responsive websites for digital invitation services."
        },
        {
          title: "Freelance Graphic Designer",
          company: "UI/UX Design Projects",
          period: "2021 - Present",
          desc: "Creating user interfaces and user experience designs for various clients."
        },
        {
          title: "Programming Instructor",
          company: "Community Volunteer Program",
          period: "2021 - 2022",
          desc: "Teaching programming fundamentals to youth in the local community."
        },
        {
          title: "Software Development Intern",
          company: "PT. Jerbee Indonesia",
          period: "2021",
          desc: "Gained hands-on experience in software development and project collaboration."
        }
      ],
      education: [
        {
          school: "Universitas Nusa Putra",
          degree: "Bachelor of Information Systems",
          period: "2024 - Present",
          status: "Active Student"
        },
        {
          school: "Universitas Nusa Putra",
          degree: "Bachelor of Visual Communication Design",
          period: "2022 - 2023",
          status: "Transferred"
        },
        {
          school: "SMK Negeri 2 Kota Sukabumi",
          degree: "Software Engineering",
          period: "2018 - 2021",
          status: "Graduated"
        }
      ]
    },
    projects: {
      title: "Demo Projects",
      viewAll: "View My GitHub",
      items: [
        {
          title: "SE K1 Gaming",
          desc: "Gaming platform or interactive community site.",
          tags: ["Next.js", "Gaming", "Community"],
          link: "https://se-k1-gaming.vercel.app/",
          image: "/project-se-k1.png"
        },
        {
          title: "Sakinah Jontor Food",
          desc: "E-commerce platform or culinary catalog.",
          tags: ["E-commerce", "Food", "Catalog"],
          link: "https://sakinah-jontor-food.vercel.app/",
          image: "/project-sakinah.png"
        },
        {
          title: "Qodimatur Rofiah",
          desc: "Portfolio website for Educator & Student.",
          tags: ["Next.js", "Portfolio", "Education"],
          link: "https://qodimatur-rofiah-portfolio.vercel.app/",
          image: "/project-qodimatur.png"
        },
        {
          title: "The Wedding of Indri & Luthfi",
          desc: "Premium digital invitation featuring Mobile View & PWA Ready.",
          tags: ["Next.js", "PWA", "Mobile First", "Wedding"],
          link: "https://indri-luthfi-wedding.vercel.app/",
          image: "/project-wedding-indri.png"
        },
        {
          title: "Tasyakuran Indri & Luthfi",
          desc: "Ngunduh Mantu event website with RSVP & Interactive Gallery.",
          tags: ["Next.js", "PWA", "Mobile First", "Event"],
          link: "https://tasyakuran-indri-luthfi.vercel.app/",
          image: "/project-tasyakuran-indri.png"
        },
        {
          title: "Sakinah Grafika",
          desc: "Professional Printing & Design Solutions.",
          tags: ["Next.js", "Printing", "Service", "Business"],
          link: "https://e-sakinah-grafika.vercel.app/",
          image: "/project-sakinah-grafika.png"
        },
        {
          title: "Seblak Teh Imas",
          desc: "Premium Seblak Cafe Landing Page.",
          tags: ["Next.js", "Culinary", "Landing Page"],
          link: "https://warung-seblak.vercel.app/",
          image: "/project-seblak.png"
        },
        {
          title: "Eid Al-Adha 1446 H",
          desc: "Digital greeting card & gallery for class SI24F.",
          tags: ["Next.js", "Event", "Gallery", "Greeting"],
          link: "https://eid-adha-si24f-mu.vercel.app/",
          image: "/project-idul-adha.png"
        },
        {
          title: "Trilogy Nusa Putra Blog",
          desc: "Inspirational student story blog.",
          tags: ["Next.js", "Blog", "Education", "Storytelling"],
          link: "https://trilogy-npu-blog.vercel.app/",
          image: "/project-trilogy.png"
        },
        {
          title: "Yohani Ade Fadila",
          desc: "Professional Graphic Designer & Administrator.",
          tags: ["Next.js", "Portfolio", "Design", "Admin"],
          link: "https://yohani-ade-fadila.vercel.app/",
          image: "/project-yohani.png"
        },
        {
          title: "Sakinah Grafika V2",
          desc: "Professional Printing Solutions (Re-design).",
          tags: ["Next.js", "Printing", "E-commerce"],
          link: "https://v0-cv-sakinah-grafika-website.vercel.app/",
          image: "/project-sakinah-v2.png"
        },
        {
          title: "Startup Accounting Pro",
          desc: "Accounting Dashboard & Financial Management SaaS.",
          tags: ["Next.js", "SaaS", "Finance", "Dashboard"],
          link: "https://startup-akuntansi-pro.vercel.app/",
          image: "/project-akuntansi.png"
        },
        {
          title: "SI24F Cash App",
          desc: "Class Cash Management & Financial Transparency.",
          tags: ["Next.js", "Finance", "Class Management"],
          link: "https://aplikasi-kas-si24f.vercel.app/",
          image: "/project-kas.png"
        },
        {
          title: "PSDM HMSI Portal",
          desc: "Student Resource Development Portal for HMSI.",
          tags: ["Next.js", "Organization", "Portal"],
          link: "https://portal-psdm-hmsi.vercel.app/",
          image: "/project-psdm.png"
        },
        {
          title: "ZepWed Digital Invitation",
          desc: "Premium Digital Invitation Platform.",
          tags: ["Next.js", "SaaS", "Wedding", "Platform"],
          link: "https://zepwed-diginvitation.vercel.app/",
          image: "/project-zepwed.png"
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      desc: "Need a web developer, UI/UX designer, or technical mentor? I'm ready to collaborate.",
      copyEmail: "Copy Email",
      copied: "Email copied!",
      info: {
        email: "Fenrisulfr696@gmail.com",
        phone: "+62 815-7462-7052",
        address: "Sakinah Grafika - Block H21, Sakura Gardenia"
      },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        placeholderName: "Your Name",
        placeholderEmail: "email@example.com",
        placeholderMessage: "Tell me about your collaboration idea...",
        submit: "Send Message",
        success: "Message sent!"
      }
    }
  }
};
