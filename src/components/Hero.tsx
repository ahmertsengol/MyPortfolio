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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column: Avatar */}
          <div className="flex justify-center md:justify-end">
            {!isLoading && user?.avatar_url && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 group-hover:opacity-100 blur animate-spin-slow transition duration-1000"></div>
                <img 
                  src={user.avatar_url} 
                  alt={user.name} 
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-background shadow-2xl object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
            </div>

            {/* Name */}
            {isLoading ? (
               <Skeleton className="h-16 w-3/4 mb-6" />
            ) : (
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                {user?.name || "Ahmet Mert Şengöl"}
              </h1>
            )}

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {isLoading ? (
                 <Skeleton className="h-4 w-32" />
              ) : (
                <span className="text-sm">{user?.location || t('hero.location')}</span>
              )}
            </div>

            {/* Description */}
            {isLoading ? (
               <div className="space-y-2 max-w-xl">
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-5/6" />
               </div>
            ) : (
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t('hero.description')}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
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
          </div>
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
