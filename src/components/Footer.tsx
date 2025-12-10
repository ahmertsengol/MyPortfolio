import { Github, Linkedin, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Ahmet Mert Şengöl. {t('footer.rights')}
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ahmertsengol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/ahmertsengol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground flex items-center gap-1">
          {t('footer.madeWith')} <Heart className="h-3.5 w-3.5 text-destructive" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
