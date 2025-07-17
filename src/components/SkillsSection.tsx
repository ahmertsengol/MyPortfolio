import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  Globe,
  Settings,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      {
        name: 'React/Next.js',
        level: 95,
        icon: Code,
        color: 'from-blue-400 to-blue-600',
        description: 'Modern React, hooks, context, Next.js ile SSR/SSG'
      },
      {
        name: 'TypeScript',
        level: 90,
        icon: Code,
        color: 'from-blue-500 to-indigo-600',
        description: 'Type-safe kod geliştirme ve advanced TypeScript patterns'
      },
      {
        name: 'TailwindCSS',
        level: 95,
        icon: Palette,
        color: 'from-cyan-400 to-blue-500',
        description: 'Utility-first CSS framework ve responsive design'
      },
      {
        name: 'Vue.js',
        level: 85,
        icon: Code,
        color: 'from-green-400 to-emerald-600',
        description: 'Composition API, Pinia state management'
      }
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      {
        name: 'Node.js',
        level: 88,
        icon: Server,
        color: 'from-green-500 to-emerald-600',
        description: 'Express.js, RESTful APIs, microservices architecture'
      },
      {
        name: 'Python',
        level: 85,
        icon: Server,
        color: 'from-yellow-400 to-orange-500',
        description: 'Django, FastAPI, web scraping ve automation'
      },
      {
        name: 'PostgreSQL',
        level: 80,
        icon: Database,
        color: 'from-blue-600 to-indigo-700',
        description: 'Relational database design ve optimization'
      },
      {
        name: 'MongoDB',
        level: 82,
        icon: Database,
        color: 'from-green-600 to-green-700',
        description: 'NoSQL database design ve aggregation pipelines'
      }
    ]
  },
  {
    title: 'Mobile & Tools',
    icon: Smartphone,
    skills: [
      {
        name: 'React Native',
        level: 80,
        icon: Smartphone,
        color: 'from-purple-400 to-pink-500',
        description: 'Cross-platform mobile app development'
      },
      {
        name: 'Docker',
        level: 75,
        icon: Settings,
        color: 'from-blue-500 to-cyan-600',
        description: 'Containerization ve deployment automation'
      },
      {
        name: 'Git/GitHub',
        level: 92,
        icon: Settings,
        color: 'from-gray-600 to-gray-800',
        description: 'Version control, collaboration ve CI/CD'
      },
      {
        name: 'UI/UX Design',
        level: 82,
        icon: Palette,
        color: 'from-pink-400 to-rose-500',
        description: 'Figma, user research ve prototyping'
      }
    ]
  }
];

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Yeteneklerim
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Modern teknolojiler ve araçlarla geliştirme sürecindeki uzmanlık alanlarım
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'glass-effect text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group particle-card"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {isHovered ? skill.description : `${skill.level}% Yeterlilik`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Level Bar */}
                <div className="relative">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Yeterlilik</span>
                    <span>{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.5 + index * 0.1, 
                        ease: "easeOut" 
                      }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Animated dots */}
                  <div className="absolute -top-1 left-0 w-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ left: `${(i + 1) * 20}%` }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Experience Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="mt-4 text-xs text-gray-500"
                >
                  Deneyim: {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : skill.level > 70 ? 'Intermediate' : 'Beginner'}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Teknoloji', value: '15+', icon: Layers },
            { label: 'Proje', value: '50+', icon: Globe },
            { label: 'Müşteri', value: '25+', icon: Database },
            { label: 'Deneyim', value: '4+', icon: Settings },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center hover:bg-white/5 transition-all duration-300 group particle-card"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 