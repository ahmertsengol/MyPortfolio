export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string; // e.g. "2022-09"
  end?: string; // e.g. "Present" or "2024-06"
  description?: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
};

export type Resume = {
  experiences: Experience[];
  skills: string[];
  certifications: Certification[];
};

export const resumeData: Resume = {
  experiences: [
    {
      title: "International Intern",
      company: "BGTS",
      location: "London, United Kingdom",
      start: "2025-08",
      end: "2025-09",
      description:
        "International internship program focused on global technology solutions and software development practices.",
      highlights: [
        "Worked on international technology projects",
        "Collaborated with global development teams",
      ],
    },
    {
      title: "Stajyer Mühendis (Engineering Intern)",
      company: "Yeniköy Kemerköy Elektrik Üretim ve Ticaret A.Ş.",
      location: "Muğla, Türkiye",
      start: "2024-08",
      end: "2024-09",
      description:
        "Engineering internship at major electricity production company, gained experience in industrial systems and automation.",
      highlights: [
        "Worked on power generation systems",
        "Gained experience in industrial automation",
      ],
      links: [{ label: "Company", href: "https://ykenerji.com.tr/" }],
    },
    {
      title: "Software Engineering Student",
      company: "Fırat University",
      location: "Elazığ, Turkey",
      start: "2022-09",
      end: "2026-06",
      description:
        "Bachelor's Degree in Software Engineering. Core CS curriculum with focus on algorithms, data structures, and AI-related projects.",
      highlights: [
        "Hands-on projects in modern web and AI technologies",
        "Team collaboration and open-source contributions",
      ],
      links: [{ label: "University", href: "https://www.firat.edu.tr/en" }],
    },
  ],
  skills: [
    "React.js",
    "Docker",
    "DevOps",
    "C#",
    "Java",
    "JavaScript",
    "Python",
    "TypeScript",
    "Next.js",
    ".NET",
    "Node.js",
    "AWS",
    "Git",
    "GitHub",
    "TailwindCSS",
  ],
  certifications: [
    {
      name: "Geleceği Yazanlar Java 301",
      issuer: "Turkcell Geleceği Yazanlar",
    },
    {
      name: "Geleceği Yazanlar C# 101",
      issuer: "Turkcell Geleceği Yazanlar",
    },
    {
      name: "Geleceği Yazanlar Python 101",
      issuer: "Turkcell Geleceği Yazanlar",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
    },
    {
      name: "Introduction to Generative AI - Art of the Possible",
      issuer: "Google Cloud",
    },
  ],
};

