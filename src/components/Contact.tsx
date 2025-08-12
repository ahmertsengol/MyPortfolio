import Container from "@/components/Container";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-12 sm:py-16 border-t border-black/[.08] dark:border-white/[.14]">
      <Container>
        <h2 id="contact-heading" className="text-xl font-semibold tracking-tight">İletişim</h2>
        <p className="mt-4 text-foreground/80">
          İşbirliği veya proje için benimle iletişime geçmek isterseniz e-posta gönderebilirsiniz.
        </p>
        <div className="mt-6">
          <a
            href={siteConfig.email ? `mailto:${siteConfig.email}` : "#"}
            className="inline-flex items-center rounded-full border px-4 h-10 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            E-posta Gönder
          </a>
        </div>
      </Container>
    </section>
  );
}

