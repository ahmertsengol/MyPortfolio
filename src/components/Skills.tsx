import Section from "@/components/Section";
import { resumeData } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((s) => (
          <span key={s} className="text-xs rounded-full border border-[--button-border] bg-[--button-bg] px-3 py-1">
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}

