import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import { 
  Code2, Lightbulb, Target, Users, Coffee, 
  Calendar, MapPin, Mail, Trophy, Star, Zap 
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const personalInfo = {
    name: "Ahmet Mert Şengöl",
    title: "Full Stack Developer",
    location: "Istanbul, Turkey",
    email: "hello@ahmetdev.com",
    experience: "3+ Yıl Deneyim",
    projects: "25+ Proje"
  };

  const values = [
    {
      id: 1,
      icon: Code2,
      title: "Clean Code",
      subtitle: "Temiz & Sürdürülebilir",
      description: "SOLID prensiplerine uygun, okunabilir ve bakımı kolay kod yazma konusunda tutkulu",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Innovation",
      subtitle: "Yenilik & Yaratıcılık", 
      description: "Sürekli öğrenme ve yeni teknolojileri keşfetme konusunda meraklı",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Users,
      title: "Collaboration",
      subtitle: "Takım Çalışması",
      description: "Etkili iletişim ve takım ruhu ile başarılı projeler geliştirme",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      icon: Target,
      title: "Excellence",
      subtitle: "Mükemmellik Arayışı",
      description: "Her projede en yüksek kalite standartlarını hedefleme",
      color: "from-orange-500 to-red-500"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Startup",
      description: "Modern web teknolojileri ile scalable aplikasyonlar geliştirme",
      type: "work"
    },
    {
      year: "2023",
      title: "Freelance Developer",
      company: "Çeşitli Projeler",
      description: "E-ticaret, fintech ve SaaS projelerinde uzmanlaşma",
      type: "work"
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Agency",
      description: "React, Node.js ve modern frontend framework'leri ile proje geliştirme",
      type: "work"
    },
    {
      year: "2021",
      title: "Computer Engineering",
      company: "Üniversite Mezunu",
      description: "Yazılım mühendisliği ve algoritma tasarımı konularında derinleşme",
      type: "education"
    }
  ];

  const stats = useMemo(() => [
    { label: "Tamamlanan Proje", value: 25, icon: Trophy, color: "from-blue-500 to-cyan-500" },
    { label: "Mutlu Müşteri", value: 15, icon: Star, color: "from-purple-500 to-pink-500" },
    { label: "Kod Satırı", value: 50000, icon: Code2, color: "from-green-500 to-teal-500" },
    { label: "Kahve", value: 1247, icon: Coffee, color: "from-orange-500 to-red-500" }
  ], []);

  // Counter animation for stats
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }, 16);
        
        timers.push(timer);
      });
    }
    
    // Cleanup function to clear all timers
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isInView, stats]);

  return (
    <section id="about" className="relative py-20 px-6 particle-interactive">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 particle-header"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 particle-text"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">Hakkımda</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Teknoloji tutkunu bir geliştirici olarak, sürekli öğrenmeye ve kendimi geliştirmeye 
            odaklanıyorum.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <motion.div 
              className="space-y-6 p-8 rounded-2xl glass-effect particle-card particle-magnetic"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="space-y-4">
                <motion.h3 
                  className="text-3xl font-bold text-white particle-text"
                  whileHover={{ scale: 1.02 }}
                >
                  {personalInfo.name}
                </motion.h3>
                <motion.p 
                  className="text-xl text-blue-400 font-medium"
                  whileHover={{ scale: 1.02 }}
                >
                  {personalInfo.title}
                </motion.p>
                
                <div className="space-y-3 text-gray-300">
                  <motion.div 
                    className="flex items-center gap-3 particle-interactive"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <MapPin size={18} className="text-blue-400" />
                    <span>{personalInfo.location}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 particle-interactive"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <Mail size={18} className="text-blue-400" />
                    <span>{personalInfo.email}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 particle-interactive"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <Calendar size={18} className="text-blue-400" />
                    <span>{personalInfo.experience}</span>
                  </motion.div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                Merhaba! Ben {personalInfo.name}, modern web teknolojileri ile yaratıcı çözümler 
                üreten bir Full Stack Developer'ım. Kullanıcı deneyimini ön planda tutan, 
                performanslı ve ölçeklenebilir uygulamalar geliştirme konusunda tutkulu.
              </p>

              <div className="flex gap-6">
                <motion.div 
                  className="text-center particle-card p-4 rounded-xl glass-effect"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    {personalInfo.experience}
                  </motion.div>
                  <div className="text-sm text-gray-400">Deneyim</div>
                </motion.div>
                <motion.div 
                  className="text-center particle-card p-4 rounded-xl glass-effect"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    {personalInfo.projects}
                  </motion.div>
                  <div className="text-sm text-gray-400">Proje</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Interactive Avatar/Visual */}
            <div className="flex justify-center">
              <motion.div
                className="relative particle-card particle-magnetic"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-80 h-80 rounded-full glass-effect flex items-center justify-center relative overflow-hidden particle-ripple">
                  {/* Animated background particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full particle-interactive"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Center content */}
                  <div className="text-center z-10">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      👨‍💻
                    </motion.div>
                    <motion.div 
                      className="text-white font-semibold particle-text"
                      whileHover={{ scale: 1.05 }}
                    >
                      Full Stack
                    </motion.div>
                    <div className="text-blue-400">Developer</div>
                  </div>

                  {/* Rotating border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-12 text-white particle-text"
            whileHover={{ scale: 1.02 }}
          >
            Değerlerim & Prensiplerİm
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredCard === value.id;
              return (
                <motion.div
                  key={value.id}
                  className="relative group cursor-pointer particle-card particle-magnetic"
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-72 p-6 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 relative overflow-hidden particle-ripple">
                    {/* Background gradient */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 pointer-events-none`}
                      animate={{ opacity: isHovered ? 0.15 : 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Particle trail effect */}
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} p-2.5 mb-4 particle-interactive transition-transform duration-300`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <motion.h4 
                        className="text-xl font-bold text-white mb-2 particle-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        {value.title}
                      </motion.h4>
                      <p className="text-sm text-blue-400 mb-3">{value.subtitle}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>

                    {/* Hover effect indicator */}
                    {isHovered && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                        layoutId="aboutValueIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Corner particle effect */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 particle-interactive"
                      animate={{ 
                        opacity: isHovered ? [0, 1, 0] : 0,
                        scale: isHovered ? [1, 1.5, 1] : 1
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-12 text-white particle-text"
            whileHover={{ scale: 1.02 }}
          >
            Yolculuğum
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                  className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                   <motion.div 
                     className="p-6 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 particle-card particle-magnetic"
                     whileHover={{ scale: 1.02, y: -3 }}
                   >
                      <div className="flex items-center gap-2 mb-2">
                        <motion.span 
                          className="text-2xl font-bold text-blue-400"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.year}
                        </motion.span>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Zap size={16} className={`${item.type === 'work' ? 'text-green-400' : 'text-purple-400'}`} />
                        </motion.div>
                      </div>
                      <motion.h4 
                        className="text-lg font-bold text-white mb-1 particle-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.title}
                      </motion.h4>
                      <p className="text-sm text-gray-400 mb-2">{item.company}</p>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-950 z-10 particle-interactive"
                      whileHover={{ scale: 1.5 }}
                      animate={{ 
                        boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.3)', '0 0 20px 8px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0.3)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-12 text-white particle-text"
            whileHover={{ scale: 1.02 }}
          >
            Sayılarla Ben
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="text-center p-6 rounded-2xl glass-effect particle-card particle-magnetic particle-ripple hover:border-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`w-8 h-8 mx-auto mb-3 p-1.5 rounded-lg bg-gradient-to-br ${stat.color} particle-interactive`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                  >
                    {stat.value > 1000 ? `${Math.floor(counters[idx] / 1000)}K+` : counters[idx]}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 