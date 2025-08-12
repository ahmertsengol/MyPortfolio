import Section from "@/components/Section";
import { resumeData } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((s) => (
          <span key={s} className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1">
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}

