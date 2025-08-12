import Section from "@/components/Section";
import { resumeData } from "@/data/resume";

export default function Experience() {
  const items = [...resumeData.experiences].sort((a, b) => {
    // Sort strictly by start date (newest first)
    const toVal = (v: string) => {
      if (v.toLowerCase() === "present") return Infinity;
      const [y, m] = v.split("-").map(Number);
      return new Date(y, (m || 1) - 1, 1).getTime();
    };
    return toVal(b.start) - toVal(a.start);
  });

  const fmt = (v?: string) => {
    if (!v) return "";
    if (v.toLowerCase() === "present") return "Present";
    const [y, m] = v.split("-");
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Math.max(0, Math.min(11, Number(m) - 1))];
    return `${month} ${y}`;
  };
  return (
    <Section id="experience" title="Experience">
      <ol className="relative">
        {items.map((it) => (
          <li
            key={`${it.company}-${it.title}-${it.start}`}
            className="relative pl-8 mb-8 last:mb-0"
          >
            <span
              className="absolute left-0 top-2 h-3 w-3 rounded-full ring-2 ring-white/10 bg-[var(--accent)]"
              style={{ boxShadow: "0 0 12px var(--accent)" }}
            />
            <h3 className="font-medium">
              {it.title} <span className="text-foreground/70">@ {it.company}</span>
            </h3>
            <p className="text-xs text-foreground/60 mt-0.5">
              {fmt(it.start)} — {fmt(it.end ?? "Present")} {it.location ? `· ${it.location}` : ""}
            </p>
            {it.description && (
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{it.description}</p>
            )}
            {it.highlights && (
              <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80 space-y-1">
                {it.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            {it.links && (
              <div className="mt-2 flex gap-3 text-xs">
                {it.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="underline opacity-80 hover:opacity-100">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

