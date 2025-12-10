import { Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Full Stack Developer & AI Engineer</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Ahmet Mert Şengöl
        </h1>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Turkey</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I'm Ahmet Mert — Full Stack Developer & AI Engineer from Turkey. I build scalable web applications, AI-driven systems, and modern cloud-native architectures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="#projects">Projeleri İncele</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary"
          >
            <a href="https://github.com/ahmertsengol" target="_blank" rel="noopener noreferrer">
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
            <a href="https://linkedin.com/in/ahmertsengol" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#projects"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Aşağı Kaydır</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
