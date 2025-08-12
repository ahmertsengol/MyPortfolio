import Container from "@/components/Container";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 sm:py-16 border-t border-black/[.08] dark:border-white/[.14]">
      <Container>
        <h2 id="about-heading" className="text-xl font-semibold tracking-tight">Hakkımda</h2>
        <p className="mt-4 max-w-2xl text-foreground/80">
          Performans ve erişilebilirlik odaklı arayüzler geliştiriyorum. TypeScript, React ve modern web
          teknolojileri ile sade ama etkileyici deneyimler üretmeyi seviyorum.
        </p>
      </Container>
    </section>
  );
}

