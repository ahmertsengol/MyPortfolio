import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      type: "work",
      title: t('about.experience.intern.title'),
      company: t('about.experience.intern.company'),
      period: t('about.experience.intern.period'),
      location: t('about.experience.intern.location'),
      description: t('about.experience.intern.description')
    },
    {
      type: "work",
      title: t('about.experience.engineer.title'),
      company: t('about.experience.engineer.company'),
      period: t('about.experience.engineer.period'),
      location: t('about.experience.engineer.location'),
      description: t('about.experience.engineer.description')
    }
  ];

  const education = {
    degree: t('about.education.degree'),
    school: t('about.education.school'),
    period: t('about.education.period'),
    location: t('about.education.location'),
    description: t('about.education.description')
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">{t('about.education.title')}</h3>
            </div>
            <Card className="bg-card border-border p-6">
              <h4 className="font-medium text-foreground mb-1">{education.degree}</h4>
              <p className="text-accent mb-2">{education.school}</p>
              <p className="text-sm text-muted-foreground mb-2">
                {education.period} · {education.location}
              </p>
              <p className="text-sm text-muted-foreground">{education.description}</p>
            </Card>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">{t('about.experience.title')}</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card border-border p-6">
                  <h4 className="font-medium text-foreground mb-1">{exp.title}</h4>
                  <p className="text-accent mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.period} · {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
