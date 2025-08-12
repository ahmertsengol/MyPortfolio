export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  summary: string;
  email: string;
  socials: SocialLink[];
  siteUrl?: string;
};

export const siteConfig: SiteConfig = {
  name: "Ahmet Mert Şengöl",
  role: "Software Engineering Student · AI Enthusiast",
  location: "Turkey / Elazığ",
  summary:
    "I enjoy modern web and AI projects. I build minimalist, performance-first and accessible interfaces.",
  email: "21sandn21@gmail.com", // TODO: replace with your real email
  socials: [
    { label: "GitHub", href: "https://github.com/ahmertsengol" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmertsengol" },
    { label: "Kaggle", href: "https://www.kaggle.com/ahmetmertengl" },
    { label: "LeetCode", href: "https://leetcode.com/u/Lazzaran/" },
    { label: "HuggingFace", href: "https://huggingface.co/Lazzaran" },
  ],
  siteUrl: "https://www.ahmertsengol.com",
};

