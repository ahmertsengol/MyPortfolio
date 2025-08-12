import Container from "@/components/Container";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-12 sm:py-16 border-t border-black/[.08] dark:border-white/[.14]">
      <Container>
        <h2 id="contact-heading" className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 text-foreground/80">
          For collaboration or project inquiries, you can reach me via email.
        </p>
        <div className="mt-6">
          <a
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent("Hi Ahmet,%0D%0A%0D%0AI'd like to talk about ...")}`}
            className="inline-flex items-center rounded-full border px-4 h-10 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Send Email
          </a>
        </div>
      </Container>
    </section>
  );
}

