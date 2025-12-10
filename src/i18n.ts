import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
            projects: "Projects",
            about: "About",
            contact: "Contact"
          },
          hero: {
            badge: "Software Engineer & Developer",
            location: "Turkey",
            description: "I’m Ahmet Mert. I am a software engineer who combines artificial intelligence, web technologies, and modern software architectures to design high-performance, scalable, and self-learning systems.",
            viewProjects: "View Projects",
            scrollDown: "Scroll Down"
          },
          profile: {
            stars: "Total Stars",
            repos: "Repositories",
            followers: "Followers",
            featuredProjects: "Featured Projects",
            viewAll: "View All",
            githubGraph: "GitHub Contribution Graph",
            graphDesc: "GitHub activity and contribution history over the last year"
          },
          about: {
            title: "Career & Education",
            education: {
              title: "Education",
              degree: "Bachelor of Software Engineering",
              school: "Firat University",
              period: "Sep 2022 — Jun 2026",
              location: "Elazig, Turkey",
              description: "Core CS curriculum on algorithms, data structures, and AI-oriented projects."
            },
            experience: {
              title: "Experience",
              intern: {
                title: "International Intern",
                company: "BGTS",
                period: "Aug 2025 — Sep 2025",
                location: "London, UK",
                description: "International internship program focusing on global technology solutions and software development practices."
              },
              engineer: {
                title: "Intern Engineer",
                company: "Yeniköy Kemerköy Electricity Generation and Trading Inc.",
                period: "Aug 2024 — Sep 2024",
                location: "Mugla, Turkey",
                description: "Engineering internship gaining experience in industrial systems and automation."
              }
            }
          },
          skills: {
            title: "Skills",
            categories: {
              languages: "Programming Languages",
              frontend: "Frontend",
              backend: "Backend",
              devops: "DevOps & Tools",
              ai: "AI & ML"
            }
          },
          contact: {
            title: "Contact Me",
            description: "You can contact me for collaboration or project opportunities. I am always open to new projects and ideas.",
            email: "Email",
            sendEmail: "Send Email"
          },
          footer: {
            rights: "All rights reserved.",
            madeWith: "Made by ahmertsengol"
          },
          notfound: {
            title: "404",
            description: "Oops! Page not found",
            back: "Return to Home"
          }
        }
      },
      tr: {
        translation: {
          nav: {
            projects: "Projeler",
            about: "Hakkımda",
            contact: "İletişim"
          },
          hero: {
            badge: "Yazılım Mühendisi & Geliştirici",
            location: "Türkiye",
            description: "Merhaba! Ben yenilikçi ve akıllı dijital çözümler geliştirmeye tutkulu bir Full-Stack Developer'ım. Fırat Üniversitesi'nde eğitimime devam ederken aynı zamanda AI destekli web teknolojilerinde uzmanlığımı genişletiyorum. Yazılım geliştirme benim için sadece kod yazmak değil; gerçek dünya problemlerini çözmek, kullanıcı deneyimlerini iyileştirmek ve sürekli yeni şeyler öğrenmektir.",
            viewProjects: "Projeleri İncele",
            scrollDown: "Aşağı Kaydır"
          },
          profile: {
            stars: "Toplam Yıldız",
            repos: "Repo Sayısı",
            followers: "Takipçi",
            featuredProjects: "Öne Çıkan Projeler",
            viewAll: "Tümünü Gör",
            githubGraph: "GitHub Katkı Grafiği",
            graphDesc: "Son 1 yıldaki GitHub aktivite ve katkı geçmişi"
          },
          about: {
            title: "Kariyer & Eğitim",
            education: {
              title: "Eğitim",
              degree: "Yazılım Mühendisliği Lisans",
              school: "Fırat Üniversitesi",
              period: "Eyl 2022 — Haz 2026",
              location: "Elazığ, Türkiye",
              description: "Algoritmalar, veri yapıları ve AI odaklı projeler üzerine temel CS müfredatı."
            },
            experience: {
              title: "Deneyim",
              intern: {
                title: "International Intern",
                company: "BGTS",
                period: "Ağu 2025 — Eyl 2025",
                location: "Londra, İngiltere",
                description: "Global teknoloji çözümleri ve yazılım geliştirme uygulamalarına odaklanan uluslararası staj programı."
              },
              engineer: {
                title: "Stajyer Mühendis",
                company: "Yeniköy Kemerköy Elektrik Üretim ve Ticaret A.Ş.",
                period: "Ağu 2024 — Eyl 2024",
                location: "Muğla, Türkiye",
                description: "Endüstriyel sistemler ve otomasyon deneyimi kazandığım mühendislik stajı."
              }
            }
          },
          skills: {
            title: "Yetenekler",
            categories: {
              languages: "Programlama Dilleri",
              frontend: "Frontend",
              backend: "Backend",
              devops: "DevOps & Araçlar",
              ai: "Yapay Zeka & ML"
            }
          },
          contact: {
            title: "İletişime Geç",
            description: "İşbirliği veya proje fırsatları için benimle iletişime geçebilirsiniz. Yeni projeler ve fikirler için her zaman açığım.",
            email: "E-posta",
            sendEmail: "E-posta Gönder"
          },
          footer: {
            rights: "Tüm hakları saklıdır.",
            madeWith: "ile yapıldı"
          },
          notfound: {
            title: "404",
            description: "Oops! Sayfa bulunamadı",
            back: "Ana Sayfaya Dön"
          }
        }
      }
    }
  });

export default i18n;
