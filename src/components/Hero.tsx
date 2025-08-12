import Container from "@/components/Container";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="hero-heading">
      <Container>
        <div className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-foreground/80">Portfolio · {siteConfig.role}</div>
        <h1 id="hero-heading" className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-lg text-foreground/80">{siteConfig.location}</p>
        <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed">
          {siteConfig.summary}
        </p>
        <div className="mt-8 flex gap-3">
          <Button variant="accent" as="a" href="#projects">View Projects</Button>
          <Button variant="secondary" as="a" href={siteConfig.socials.find(s=>s.label==="GitHub")?.href ?? "#"} target="_blank" rel="noreferrer">GitHub</Button>
          {siteConfig.socials.find(s=>s.label==="LinkedIn") && (
            <Button variant="secondary" as="a" href={siteConfig.socials.find(s=>s.label==="LinkedIn")!.href} target="_blank" rel="noreferrer">LinkedIn</Button>
          )}
        </div>
      </Container>
    </section>
  );
}

