import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      type: "work",
      title: "International Intern",
      company: "BGTS",
      period: "Ağu 2025 — Eyl 2025",
      location: "Londra, İngiltere",
      description: "Global teknoloji çözümleri ve yazılım geliştirme uygulamalarına odaklanan uluslararası staj programı."
    },
    {
      type: "work",
      title: "Stajyer Mühendis",
      company: "Yeniköy Kemerköy Elektrik Üretim ve Ticaret A.Ş.",
      period: "Ağu 2024 — Eyl 2024",
      location: "Muğla, Türkiye",
      description: "Endüstriyel sistemler ve otomasyon deneyimi kazandığım mühendislik stajı."
    }
  ];

  const education = {
    degree: "Yazılım Mühendisliği Lisans",
    school: "Fırat Üniversitesi",
    period: "Eyl 2022 — Haz 2026",
    location: "Elazığ, Türkiye",
    description: "Algoritmalar, veri yapıları ve AI odaklı projeler üzerine temel CS müfredatı."
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
          Hakkımda
        </h2>
        
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Merhaba! Ben yenilikçi ve akıllı dijital çözümler geliştirmeye tutkulu bir Full-Stack Developer'ım. 
          Fırat Üniversitesi'nde eğitimime devam ederken aynı zamanda AI destekli web teknolojilerinde 
          uzmanlığımı genişletiyorum. Yazılım geliştirme benim için sadece kod yazmak değil; 
          gerçek dünya problemlerini çözmek, kullanıcı deneyimlerini iyileştirmek ve sürekli yeni şeyler öğrenmektir.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Eğitim</h3>
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
              <h3 className="text-xl font-semibold text-foreground">Deneyim</h3>
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
