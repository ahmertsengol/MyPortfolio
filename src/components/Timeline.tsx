import Section from "@/components/Section";

type Item = {
  title: string;
  org?: string;
  period: string;
  description?: string;
};

const items: Item[] = [
  { title: "Software Engineering Student", org: "Fırat University", period: "2022 - Present", description: "Core CS courses, algorithms, data structures, and AI-focused projects." },
  { title: "Open Source", org: "GitHub", period: "Ongoing", description: "Small contributions and personal projects on web and AI." },
];

export default function Timeline() {
  return (
    <Section id="about" title="Deneyim & Eğitim">
      <ol className="relative border-l border-white/10 pl-6">
        {items.map((it) => (
          <li key={`${it.title}-${it.period}`} className="mb-8 last:mb-0">
            <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            <h3 className="font-medium">{it.title} {it.org && <span className="text-foreground/70">@ {it.org}</span>}</h3>
            <p className="text-xs text-foreground/60 mt-0.5">{it.period}</p>
            {it.description && <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{it.description}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

