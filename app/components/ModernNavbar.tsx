import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const ModernNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { id: 'home', label: 'Ana Sayfa', icon: Home, href: '#home' },
    { id: 'about', label: 'Hakkımda', icon: User, href: '#about' },
    { id: 'skills', label: 'Yetenekler', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projeler', icon: Briefcase, href: '#projects' },
    { id: 'contact', label: 'İletişim', icon: Mail, href: '#contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionInView = () => {
      const sections = navItems.map(item => item.id);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionInView);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionInView);
    };
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('#home')}
              role="button"
              tabIndex={0}
              aria-label="Ana sayfaya git"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('#home');
                }
              }}
            >
              Ahmet Developer
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 particle-nav ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${item.label} bölümüne git`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="flex items-center space-x-2">
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[calc(100vw-2rem)] bg-slate-950/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
              role="navigation"
              aria-label="Ana navigasyon menüsü"
            >
              <div className="flex flex-col h-full pt-20 px-4 sm:px-6">
                {/* Mobile Menu Items */}
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl text-left transition-all duration-300 min-h-[56px] ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/15'
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ x: 4 }}
                      aria-label={`${item.label} bölümüne git`}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      <item.icon size={22} aria-hidden="true" />
                      <span className="font-medium text-base">{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="mt-auto pb-6">
                  <div className="text-center text-gray-400 text-sm">
                    © 2024 Ahmet Developer
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar; 