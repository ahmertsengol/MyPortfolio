import Container from "@/components/Container";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 sm:py-16 border-t border-black/[.08] dark:border-white/[.14]">
      <Container>
        <h2 id="about-heading" className="text-xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-2xl text-foreground/80">
          I build fast, accessible, minimalist interfaces with TypeScript, React, and modern web technologies.
        </p>
      </Container>
    </section>
  );
}

