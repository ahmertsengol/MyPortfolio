import Container from "@/components/Container";

type Project = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    title: "Minimal Blog",
    description: "Next.js + MDX ile hızlı ve sade blog yapısı.",
    href: "#",
    tags: ["Next.js", "MDX", "Tailwind"],
  },
  {
    title: "Dashboard UI",
    description: "Chart.js ile analitik odaklı minimal panel.",
    href: "#",
    tags: ["React", "Charts"],
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-12 sm:py-16 border-t border-[--card-border]">
      <Container>
        <h2 id="projects-heading" className="text-xl font-semibold tracking-tight">Öne Çıkan Projeler</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="group rounded-xl border p-5 transition-colors hover:bg-foreground/5">
              <a href={p.href} className="block">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">{p.title}</h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
                {p.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full border px-2 py-0.5 text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

