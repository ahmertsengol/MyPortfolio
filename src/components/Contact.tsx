import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const links = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ahmertsengol",
      username: "@ahmertsengol"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmertsengol",
      username: "in/ahmertsengol"
    },
    {
      icon: Mail,
      label: t('contact.email'),
      href: "mailto:ahmertsengol@gmail.com",
      username: "ahmertsengol@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          {t('contact.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border p-6 hover:border-muted-foreground/50 transition-colors">
                <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors mx-auto mb-3" />
                <h3 className="font-medium text-foreground mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </Card>
            </a>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90"
        >
          <a href="mailto:ahmertsengol@gmail.com">
            <Mail className="h-4 w-4 mr-2" />
            {t('contact.sendEmail')}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
