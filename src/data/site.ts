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
  role: "Full-stack Developer / AI Learner",
  location: "Milas, Muğla, Türkiye",
  summary:
    "Full-Stack Developer with a passion for building innovative and smart digital solutions. I have experience working with C#, Java, JavaScript and Python to develop scalable and efficient applications. Currently expanding my expertise in AI-powered web technologies and actively learning AWS services.",
  email: "21sandn21@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/ahmertsengol" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmertsengol" },
    { label: "LeetCode", href: "https://leetcode.com/u/Lazzaran/" },
    { label: "Kaggle", href: "https://www.kaggle.com/ahmetmertengl" },
    { label: "HuggingFace", href: "https://huggingface.co/Lazzaran" },
  ],
  siteUrl: "https://www.ahmertsengol.com",
};

