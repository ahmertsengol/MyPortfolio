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

export type Resume = {
  experiences: Experience[];
  skills: string[];
};

export const resumeData: Resume = {
  // Fill with your LinkedIn details. These are safe defaults from your public info
  experiences: [
    {
        title: "International Intern",
        company: "BilgeAdam Technology",
        location: "London, UK",
        start: "2025-08",
        end: "Present",
        description:
          "Currently, I am working in the fields of AI and backend during my internship here. I am working with Angular and Spring Boot.",
        highlights: [
          "I am working in the fields of AI and backend during my internship here. I am working with Angular and Spring Boot.",
        ],
        links: [{ label: "Company", href: "https://www.bilgeadam.com/" }],
      },
    {
      title: "Software Engineering Intern",
      company: "Yeniköy Kemerköy Electricity Production and Trade Inc.",
      location: "Muğla/Milas, Turkey",
      start: "2024-08",
      end: "2024-09",
      description:
        "I worked on a project that aims to automate the process of generating electricity bills for customers.",
      highlights: [
        "I worked on a project that aims to automate the process of generating electricity bills for customers.",
      ],
      links: [{ label: "Company", href: "https://ykenerji.com.tr/" }],
    },
    {
      title: "Software Engineering Student",
      company: "Fırat University",
      location: "Elazığ, Turkey",
      start: "2022-09",
      end: "Present",
      description:
        "Core CS curriculum with a focus on algorithms, data structures and AI-related projects.",
      highlights: [
        "Hands-on projects in modern web and AI",
        "Team collaboration and open-source contributions",
      ],
      links: [{ label: "University", href: "https://www.firat.edu.tr/en" }],
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      start: "2022-01",
      end: "Present",
      description:
        "Personal and community projects on GitHub; building minimal, performant UIs and experimenting with AI.",
      links: [{ label: "GitHub", href: "https://github.com/ahmertsengol" }],
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Python",
    "OpenCV",
    "Git/GitHub",
  ],
};

