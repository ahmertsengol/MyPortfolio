import { useState, useEffect } from 'react';
import ClickSpark from './components/ClickSpark';
import ModernNavbar from './components/ModernNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Particles from './components/Particles';
import './components/InteractiveElements.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  return (
    <ClickSpark 
      sparkColor="#3b82f6" 
      sparkRadius={25}
      sparkCount={12}
      duration={500}
    >
      <div className="min-h-screen bg-slate-950/30 text-white overflow-x-hidden relative particle-zone">
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']}
          particleCount={300}
          particleSpread={18}
          speed={0.2}
          particleBaseSize={140}
          moveParticlesOnHover={true}
          particleHoverFactor={5}
          alphaParticles={true}
          disableRotation={false}
          sizeRandomness={2.5}
          activeSection={activeSection}
        />
      </div>
      
      {/* Navigation */}
      <ModernNavbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/30 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Ahmet Developer
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern web teknolojileri ile yaratıcı çözümler üreten Full Stack Developer. 
              Her projede mükemmellik için çabalayan bir geliştirici.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a 
                href="#home" 
                className="hover:text-white transition-colors duration-300"
              >
                Ana Sayfa
              </a>
              <a 
                href="#about" 
                className="hover:text-white transition-colors duration-300"
              >
                Hakkımda
              </a>
              <a 
                href="#skills" 
                className="hover:text-white transition-colors duration-300"
              >
                Yetenekler
              </a>
              <a 
                href="#projects" 
                className="hover:text-white transition-colors duration-300"
              >
                Projeler
              </a>
              <a 
                href="#contact" 
                className="hover:text-white transition-colors duration-300"
              >
                İletişim
              </a>
            </div>
            <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
              © 2024 Ahmet Developer. Tüm hakları saklıdır. React Bits ile geliştirilmiştir.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </ClickSpark>
  );
}

export default App;
