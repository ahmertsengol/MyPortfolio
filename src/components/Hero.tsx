import { Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubUser } from "@/hooks/useGitHub";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import LogoLoop from "./LogoLoop";

const Hero = () => {
  const { data: user, isLoading } = useGitHubUser();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
        </div>

        {/* Avatar - Hero Section */}
        {!isLoading && user?.avatar_url && (
          <div className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 group-hover:opacity-100 blur animate-spin-slow transition duration-1000"></div>
            <img 
              src={user.avatar_url} 
              alt={user.name} 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background shadow-2xl object-cover"
            />
          </div>
        )}

        {/* Name */}
        {isLoading ? (
           <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
        ) : (
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            {user?.name || "Ahmet Mert Şengöl"}
          </h1>
        )}

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="h-4 w-4" />
          {isLoading ? (
             <Skeleton className="h-4 w-32" />
          ) : (
            <span className="text-sm">{user?.location || t('hero.location')}</span>
          )}
        </div>

        {/* Description */}
        {isLoading ? (
           <div className="space-y-2 mb-10 max-w-2xl mx-auto">
             <Skeleton className="h-4 w-full" />
             <Skeleton className="h-4 w-5/6 mx-auto" />
           </div>
        ) : (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="#projects">{t('hero.viewProjects')}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary"
          >
            <a href={user?.html_url || "https://github.com/ahmertsengol"} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary"
          >
            <a href={`https://linkedin.com/in/${user?.login || "ahmertsengol"}`} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto">
           <LogoLoop />
        </div>

        {/* Scroll Indicator */}
        <a
          href="#projects"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-16"
        >
          <span className="text-xs uppercase tracking-widest">{t('hero.scrollDown')}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
