import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import SunMoon from "@/components/ui/sun-moon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            ahmertsengol.com
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 border-l pl-6 border-border/50">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-secondary/20 rounded-full p-1 border border-border/50 min-w-[6.5rem] justify-center">
                <Button 
                  variant={i18n.language === 'tr' ? 'secondary' : 'ghost'} 
                  size="sm" 
                  onClick={() => changeLanguage('tr')}
                  className={`h-7 px-3 text-xs rounded-full transition-all w-12 ${i18n.language === 'tr' ? 'bg-background shadow-sm font-bold text-primary' : 'text-muted-foreground hover:bg-transparent hover:text-foreground'}`}
                >
                  TR
                </Button>
                <Button 
                  variant={i18n.language === 'en' ? 'secondary' : 'ghost'} 
                  size="sm" 
                  onClick={() => changeLanguage('en')}
                  className={`h-7 px-3 text-xs rounded-full transition-all w-12 ${i18n.language === 'en' ? 'bg-background shadow-sm font-bold text-primary' : 'text-muted-foreground hover:bg-transparent hover:text-foreground'}`}
                >
                  EN
                </Button>
              </div>

              {/* Theme Toggle */}
              <div className="scale-50 origin-right">
                <SunMoon checked={resolvedTheme === 'dark'} onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
             {/* Mobile Theme Toggle */}
             <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-9 h-9"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
             >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
             </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-5">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border mt-2">
                  <Button variant={i18n.language === 'tr' ? 'default' : 'outline'} size="sm" onClick={() => changeLanguage('tr')} className="flex-1">
                    Türkçe
                  </Button>
                  <Button variant={i18n.language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => changeLanguage('en')} className="flex-1">
                    English
                  </Button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
