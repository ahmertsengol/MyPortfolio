import Container from "@/components/Container";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="hero-heading">
      <Container>
        <div className="inline-block rounded-full border border-[--button-border] bg-[--button-bg] px-3 py-1 text-xs text-foreground/80">Portfolio · {siteConfig.role}</div>
        <h1 id="hero-heading" className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-lg text-foreground/80">{siteConfig.location}</p>
        <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed">
          {siteConfig.summary}
        </p>
        <a href="https://www.buymeacoffee.com/21sandn21q" target="_blank" rel="noreferrer">
          <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" width={217} height={60} unoptimized />
        </a>
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

