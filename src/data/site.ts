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
};

export const siteConfig: SiteConfig = {
  name: "Ahmet Mert Şengöl",
  role: "Software Engineering Student · AI Enthusiast",
  location: "Türkiye / Elazığ",
  summary:
    "Modern web ve yapay zeka projelerine ilgi duyuyorum. Minimalist, performans odaklı, erişilebilir arayüzler geliştiriyorum.",
  email: "",
  socials: [
    { label: "GitHub", href: "https://github.com/ahmertsengol" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmertsengol" },
    { label: "Kaggle", href: "https://www.kaggle.com/ahmetmertengl" },
    { label: "LeetCode", href: "https://leetcode.com/u/Lazzaran/" },
    { label: "HuggingFace", href: "https://huggingface.co/Lazzaran" },
  ],
};

