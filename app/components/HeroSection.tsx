import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import FuzzyText from './FuzzyText';
import MetallicLogo from './MetallicLogo';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 sm:pt-24">      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto mt-8 sm:mt-16">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <span className="text-base sm:text-lg md:text-xl text-gray-400 font-mono">
            Merhaba, ben
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="scale-75 sm:scale-100">
            <MetallicLogo />
          </div>
        </motion.div>

        {/* Name with Fuzzy Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6"
        >
          <FuzzyText 
            text="AHMET DEVELOPERʼ" 
            className="gradient-text text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold"
            delay={1}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          Modern web teknolojileri ile yaratıcı ve kullanıcı dostu çözümler geliştiren, 
          detaylara önem veren bir geliştirici. Her projede mükemmellik için çabalıyorum.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16"
        >
          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 border-0 particle-button min-h-[48px] text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Projeler bölümüne git"
          >
            Projelerimi İncele
          </motion.button>
          
          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 min-h-[48px] text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="İletişim bölümüne git"
          >
            İletişime Geç
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="flex justify-center space-x-4 sm:space-x-6 mb-20 sm:mb-32"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3 glass-effect rounded-full text-gray-400 hover:text-white transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
                aria-label={`${social.label} profiline git`}
              >
                <Icon size={20} className="sm:size-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
        role="button"
        tabIndex={0}
        aria-label="Aşağı kaydır"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToNext();
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 bg-slate-950/30 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-white/10 min-h-[48px] min-w-[48px]"
        >
          <span className="text-xs mb-1 font-mono hidden sm:block">Keşfet</span>
          <ChevronDown size={18} className="sm:size-5" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50 pointer-events-none" />
    </section>
  );
};

export default HeroSection; 