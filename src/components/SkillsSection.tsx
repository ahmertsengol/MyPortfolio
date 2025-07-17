import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  Globe,
  Settings,
  Layers,
  Star,
  Award,
  Target,
  TrendingUp,
  Brain
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  description: string;
  experience: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    subtitle: 'Modern UI/UX Çözümleri',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      {
        name: 'React/Next.js',
        level: 95,
        icon: Code,
        color: 'from-blue-400 to-blue-600',
        description: 'Modern React, hooks, context, Next.js ile SSR/SSG',
        experience: '3+ yıl'
      },
      {
        name: 'TypeScript',
        level: 90,
        icon: Code,
        color: 'from-blue-500 to-indigo-600',
        description: 'Type-safe kod geliştirme ve advanced TypeScript patterns',
        experience: '2+ yıl'
      },
      {
        name: 'TailwindCSS',
        level: 95,
        icon: Palette,
        color: 'from-cyan-400 to-blue-500',
        description: 'Utility-first CSS framework ve responsive design',
        experience: '2+ yıl'
      },
      {
        name: 'Vue.js',
        level: 85,
        icon: Code,
        color: 'from-green-400 to-emerald-600',
        description: 'Composition API, Pinia state management',
        experience: '1+ yıl'
      }
    ]
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable Server Solutions',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    skills: [
      {
        name: 'Node.js',
        level: 88,
        icon: Server,
        color: 'from-green-500 to-emerald-600',
        description: 'Express.js, RESTful APIs, microservices architecture',
        experience: '3+ yıl'
      },
      {
        name: 'Python',
        level: 85,
        icon: Server,
        color: 'from-yellow-400 to-orange-500',
        description: 'Django, FastAPI, web scraping ve automation',
        experience: '2+ yıl'
      },
      {
        name: 'PostgreSQL',
        level: 80,
        icon: Database,
        color: 'from-blue-600 to-indigo-700',
        description: 'Relational database design ve optimization',
        experience: '2+ yıl'
      },
      {
        name: 'MongoDB',
        level: 82,
        icon: Database,
        color: 'from-green-600 to-green-700',
        description: 'NoSQL database design ve aggregation pipelines',
        experience: '2+ yıl'
      }
    ]
  },
  {
    title: 'Mobile & DevOps',
    subtitle: 'Cross-platform & Deployment',
    icon: Smartphone,
    color: 'from-green-500 to-teal-500',
    skills: [
      {
        name: 'React Native',
        level: 80,
        icon: Smartphone,
        color: 'from-purple-400 to-pink-500',
        description: 'Cross-platform mobile app development',
        experience: '1+ yıl'
      },
      {
        name: 'Docker',
        level: 75,
        icon: Settings,
        color: 'from-blue-500 to-cyan-600',
        description: 'Containerization ve deployment automation',
        experience: '1+ yıl'
      },
      {
        name: 'Git/GitHub',
        level: 92,
        icon: Settings,
        color: 'from-gray-600 to-gray-800',
        description: 'Version control, collaboration ve CI/CD',
        experience: '3+ yıl'
      },
      {
        name: 'UI/UX Design',
        level: 82,
        icon: Palette,
        color: 'from-pink-400 to-rose-500',
        description: 'Figma, user research ve prototyping',
        experience: '2+ yıl'
      }
    ]
  }
];

const achievementStats = [
  { label: 'Teknoloji', value: 15, icon: Layers, color: 'from-blue-500 to-cyan-500' },
  { label: 'Proje', value: 50, icon: Globe, color: 'from-purple-500 to-pink-500' },
  { label: 'Sertifika', value: 8, icon: Award, color: 'from-green-500 to-teal-500' },
  { label: 'Deneyim Yılı', value: 4, icon: Target, color: 'from-orange-500 to-red-500' },
];

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [counters, setCounters] = useState(achievementStats.map(() => 0));

  // Counter animation for achievement stats
  useEffect(() => {
    if (isInView) {
      achievementStats.forEach((stat, index) => {
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
      });
    }
  }, [isInView]);

  return (
    <section id="skills" className="relative py-20 px-6 particle-interactive">
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
            <span className="gradient-text">Yeteneklerim</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler ve araçlarla geliştirme sürecindeki uzmanlık alanlarım. 
            Her teknolojide sürekli kendimi geliştirmeye devam ediyorum.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievementStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="text-center p-6 rounded-2xl glass-effect particle-card particle-magnetic particle-ripple hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mx-auto mb-3 particle-interactive`}
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
                  {counters[idx]}+
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-6 mb-16"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;
            
            return (
              <motion.div
                key={category.title}
                className={`flex-1 p-6 rounded-2xl cursor-pointer transition-all duration-500 particle-card particle-magnetic ${
                  isActive 
                    ? 'glass-effect border-2 border-blue-500/50' 
                    : 'glass-effect hover:border-white/30'
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} transition-transform duration-300 particle-interactive`}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    whileHover={{ rotate: 180 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className={`text-lg font-bold transition-colors duration-300 particle-text ${isActive ? 'text-white' : 'text-gray-300'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {category.title}
                    </motion.h3>
                    <p className="text-sm text-gray-400">{category.subtitle}</p>
                  </div>
                </div>
                
                {/* Skill count */}
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="text-2xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {category.skills.length}
                  </motion.div>
                  <div className="text-sm text-gray-400">Teknoloji</div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillIndicator"
                    className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Particle indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 particle-interactive"
                  animate={{ 
                    opacity: isActive ? [0, 1, 0] : 0,
                    scale: isActive ? [1, 1.5, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 group particle-card particle-magnetic"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 rounded-2xl pointer-events-none`}
                  animate={{ opacity: isHovered ? 0.1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Particle trail effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: isHovered 
                      ? [
                          'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                          'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
                        ]
                      : 'transparent'
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} particle-interactive transition-transform duration-300`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 particle-text"
                          whileHover={{ scale: 1.02 }}
                        >
                          {skill.name}
                        </motion.h3>
                        <p className="text-sm text-gray-400">{skill.experience}</p>
                      </div>
                    </div>
                    
                    {/* Skill Level Badge */}
                    <motion.div 
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20 border border-current border-opacity-30 particle-interactive`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm font-bold text-white">{skill.level}%</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Yeterlilik</span>
                      <span className="text-gray-300">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.8 + index * 0.1, 
                          ease: "easeOut" 
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="mt-4 flex items-center gap-2"
                  >
                    <Star size={14} className="text-yellow-400" />
                    <span className="text-xs text-gray-400">
                      {skill.level > 90 ? 'Expert Level' : skill.level > 80 ? 'Advanced' : skill.level > 70 ? 'Intermediate' : 'Beginner'}
                    </span>
                  </motion.div>

                  {/* Hover stats overlay */}
                  <motion.div
                    className="absolute top-4 right-4 flex items-center gap-2 opacity-0 pointer-events-none"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-1 text-white text-xs glass-effect px-2 py-1 rounded-full">
                      <TrendingUp size={10} />
                      <span>Growing</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div 
            className="p-8 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 particle-card particle-ripple"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div 
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text particle-text">Sürekli Öğrenme</h3>
            </motion.div>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Teknoloji dünyasındaki hızlı değişime ayak uydurmak için sürekli yeni teknolojiler 
              öğreniyor ve mevcut bilgilerimi güncel tutuyorum. Şu anda{' '}
              <span className="text-blue-400 font-medium">Web3, AI/ML ve Cloud Architecture</span>{' '}
              konularında kendimi geliştiriyorum.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 