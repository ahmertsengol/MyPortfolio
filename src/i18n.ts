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
            description: "Ben Ahmet Mert. Yapay zekâ, web teknolojileri ve modern yazılım mimarilerini birleştirerek; yüksek performanslı, ölçeklenebilir ve kendi kendine öğrenebilen sistemler tasarlayan bir yazılım mühendisiyim.",
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
          }
        }
      }
    }
  });

export default i18n;
