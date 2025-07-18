import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code2, Sparkles, Layers, Award, Eye, Star, TrendingUp, Brain, Camera, BarChart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
  year: string;
  status: 'completed' | 'ongoing' | 'planned';
  stars: number;
  forks: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Face Authentication with OpenCV',
    description: 'OpenCV ve deep learning modelleri kullanarak IoT sistemlere kullanıcı entegrasyonu sağlayan yüz tanıma sistemi. Güvenli kimlik doğrulama ve kullanıcı yönetimi.',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision', 'IoT'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/ahmertsengol/face-auth-opencv',
    liveUrl: 'https://github.com/ahmertsengol/face-auth-opencv',
    category: 'AI/ML',
    featured: true,
    year: '2024',
    status: 'completed',
    stars: 1,
    forks: 0
  },
  {
    id: 2,
    title: 'YolAI - AI Navigation System',
    description: 'Yapay zeka destekli navigasyon sistemi. Akıllı rota planlama ve optimizasyon algoritmaları ile geliştirilmiş modern web uygulaması.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI', 'Navigation APIs'],
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/ahmertsengol/yolai',
    liveUrl: 'https://github.com/ahmertsengol/yolai',
    category: 'AI/ML',
    featured: true,
    year: '2024',
    status: 'completed',
    stars: 2,
    forks: 0
  },
  {
    id: 3,
    title: 'Sorting Algorithms Visualization',
    description: 'Çeşitli sıralama algoritmalarının görselleştirilmesi ve performans analizi. Bubble sort, merge sort, quick sort gibi algoritmaların karşılaştırmalı analizi.',
    technologies: ['Python', 'Matplotlib', 'Algorithm Analysis', 'Data Structures'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/ahmertsengol/SortingAlgorithms',
    liveUrl: 'https://github.com/ahmertsengol/SortingAlgorithms',
    category: 'Algorithm',
    featured: false,
    year: '2024',
    status: 'completed',
    stars: 3,
    forks: 1
  },
  {
    id: 4,
    title: 'Ensturman - Music Platform',
    description: 'Modern müzik platformu uygulaması. Kullanıcı dostu arayüz ve gelişmiş özelliklerle müzik keşfi ve dinleme deneyimi.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Web Audio API'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/ahmertsengol/Ensturman',
    liveUrl: 'https://github.com/ahmertsengol/Ensturman',
    category: 'Web App',
    featured: false,
    year: '2024',
    status: 'completed',
    stars: 1,
    forks: 0
  },
  {
    id: 5,
    title: 'Machine Learning Portfolio',
    description: 'Kaggle yarışmaları ve ML projeleri için geliştirdiğim model koleksiyonu. Veri analizi, feature engineering ve model optimizasyonu.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/ahmertsengol',
    liveUrl: 'https://www.kaggle.com/ahmetmertengl',
    category: 'AI/ML',
    featured: false,
    year: '2024',
    status: 'ongoing',
    stars: 0,
    forks: 0
  },
  {
    id: 6,
    title: 'LeetCode Solutions',
    description: 'Algorithm ve data structure problemlerinin çözümleri. Competitive programming ve teknik mülakat hazırlığı için optimized çözümler.',
    technologies: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/ahmertsengol',
    liveUrl: 'https://leetcode.com/u/Lazzaran/',
    category: 'Algorithm',
    featured: false,
    year: '2024',
    status: 'ongoing',
    stars: 0,
    forks: 0
  }
];

const categories = [
  { name: 'Hepsi', value: 'all', icon: Layers, color: 'from-blue-500 to-cyan-500' },
  { name: 'AI/ML', value: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { name: 'Web App', value: 'Web App', icon: Code2, color: 'from-green-500 to-teal-500' },
  { name: 'Algorithm', value: 'Algorithm', icon: BarChart, color: 'from-orange-500 to-red-500' },
  { name: 'Computer Vision', value: 'Computer Vision', icon: Camera, color: 'from-indigo-500 to-purple-500' }
];

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'ongoing': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'planned': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Tamamlandı';
      case 'ongoing': return 'Devam Ediyor';
      case 'planned': return 'Planlanıyor';
      default: return 'Bilinmiyor';
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 particle-interactive">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20 particle-header"
        >
          <motion.div 
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 particle-interactive"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-4xl md:text-6xl font-bold particle-text"
              whileHover={{ scale: 1.02 }}
            >
              <span className="gradient-text">Projelerim</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fırat Üniversitesi Yazılım Mühendisliği öğrencisi olarak geliştirdiğim projeler. 
            AI/ML, Computer Vision ve algoritma alanlarında uzmanlaşıyorum.
          </motion.p>
          
          {/* GitHub Profile Link */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/ahmertsengol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-effect text-gray-300 text-sm font-medium rounded-full border border-white/20 hover:border-white/40 particle-interactive transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              @ahmertsengol
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20"
        >
          {[
            { label: 'Toplam Proje', value: projects.length, icon: Layers, color: 'from-blue-500 to-cyan-500', growth: '+6' },
            { label: 'GitHub Stars', value: projects.reduce((sum, p) => sum + p.stars, 0), icon: Star, color: 'from-purple-500 to-pink-500', growth: '+7' },
            { label: 'AI/ML Projesi', value: projects.filter(p => p.category === 'AI/ML').length, icon: Brain, color: 'from-green-500 to-teal-500', growth: '+3' },
            { label: 'Tamamlanan', value: projects.filter(p => p.status === 'completed').length, icon: Award, color: 'from-orange-500 to-red-500', growth: '+4' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="group text-center p-3 sm:p-6 rounded-2xl glass-effect particle-card particle-magnetic particle-ripple hover:border-white/30 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${stat.color} p-2 sm:p-3 mx-auto mb-3 sm:mb-4 particle-interactive overflow-hidden`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Icon className="w-full h-full text-white relative z-10" />
                  {/* Particle trail effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div 
                  className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{stat.label}</div>
                
                {/* Growth indicator */}
                <motion.div 
                  className="flex items-center justify-center gap-1 text-xs text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                >
                  <TrendingUp size={12} />
                  <span>{stat.growth}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.value;
            
            return (
              <motion.button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`group relative px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-500 particle-button particle-interactive min-h-[48px] ${
                  isActive
                    ? 'text-white glass-effect border-blue-500/50 particle-magnetic scale-105'
                    : 'text-gray-400 hover:text-white glass-effect hover:border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`${category.name} kategorisini seç`}
                aria-selected={isActive}
                role="tab"
              >
                <span className="flex items-center gap-2 sm:gap-3 relative z-10 text-sm sm:text-base">
                  <motion.div 
                    className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${category.color} transition-all duration-300`}
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      rotate: isActive ? 360 : 0
                    }}
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={16} className="sm:size-[18px] text-white" />
                  </motion.div>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </span>
                
                {/* Enhanced active indicator */}
                {isActive && (
                  <>
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}

                {/* Particle indicator */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0"
                  animate={{ 
                    opacity: isActive ? [0, 1, 0] : 0,
                    scale: isActive ? [1, 1.5, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Enhanced hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-20"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative particle-card particle-magnetic ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-96 overflow-hidden rounded-2xl glass-effect hover:border-white/40 transition-all duration-700 particle-ripple">
                  {/* Enhanced Project Image */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                    
                    {/* Enhanced animated overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0"
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Corner particle indicators */}
                  {[
                    { position: 'top-4 left-4', delay: 0 },
                    { position: 'top-4 right-4', delay: 0.2 },
                    { position: 'bottom-4 left-4', delay: 0.4 },
                    { position: 'bottom-4 right-4', delay: 0.6 }
                  ].map((corner, idx) => (
                    <motion.div
                      key={idx}
                      className={`absolute ${corner.position} w-2 h-2 bg-blue-400 rounded-full opacity-0 particle-interactive`}
                      animate={{ 
                        opacity: hoveredProject === project.id ? [0, 1, 0] : 0,
                        scale: hoveredProject === project.id ? [1, 1.5, 1] : 1
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: corner.delay 
                      }}
                    />
                  ))}

                  {/* Enhanced Badges */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                    <div className="flex gap-3">
                      {/* Year Badge */}
                      <motion.div 
                        className="px-4 py-2 glass-effect rounded-full border border-white/30 particle-interactive"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.5)' }}
                      >
                        <span className="text-sm font-medium text-gray-200">{project.year}</span>
                      </motion.div>
                      
                      {/* Status Badge */}
                      <motion.div 
                        className={`px-4 py-2 backdrop-blur-sm rounded-full border text-sm font-medium particle-interactive ${getStatusColor(project.status)}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {getStatusText(project.status)}
                      </motion.div>

                      {/* GitHub Stats */}
                      {(project.stars > 0 || project.forks > 0) && (
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-2 glass-effect rounded-full border border-white/30 particle-interactive"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.stars > 0 && (
                            <div className="flex items-center gap-1">
                              <Star size={14} className="text-yellow-400" />
                              <span className="text-sm text-gray-300">{project.stars}</span>
                            </div>
                          )}
                          {project.forks > 0 && (
                            <div className="flex items-center gap-1">
                              <svg width="14" height="14" viewBox="0 0 16 16" className="text-gray-400">
                                <path fill="currentColor" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/>
                              </svg>
                              <span className="text-sm text-gray-300">{project.forks}</span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full border border-blue-500/50 backdrop-blur-sm particle-magnetic"
                        whileHover={{ scale: 1.05 }}
                        animate={{ 
                          boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 30px 5px rgba(59, 130, 246, 0.3)', '0 0 0 0 rgba(59, 130, 246, 0)']
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Sparkles size={16} className="text-blue-400" />
                        <span className="text-sm font-medium text-blue-400">Featured</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Enhanced Project Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Category */}
                      <div className="mb-4">
                        <motion.span 
                          className="text-sm font-medium text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/40 particle-interactive"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                        >
                          {project.category}
                        </motion.span>
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-500 particle-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, project.featured ? 6 : 4).map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            className="text-xs px-3 py-1.5 glass-effect text-gray-300 rounded-lg border border-white/30 particle-interactive"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIdx * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > (project.featured ? 6 : 4) && (
                          <motion.span 
                            className="text-xs px-3 py-1.5 glass-effect text-gray-400 rounded-lg border border-white/30 particle-interactive"
                            whileHover={{ scale: 1.05 }}
                          >
                            +{project.technologies.length - (project.featured ? 6 : 4)}
                          </motion.span>
                        )}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0, 
                          y: hoveredProject === project.id ? 0 : 20 
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex gap-4"
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-xl particle-button particle-magnetic transition-all duration-500"
                          whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(59, 130, 246, 0.5)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={18} />
                          Görüntüle
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 glass-effect text-white text-sm font-medium rounded-xl border border-white/30 hover:bg-white/20 particle-interactive transition-all duration-500"
                          whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.5)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} />
                          Kaynak Kod
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Enhanced hover stats overlay */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 opacity-0 pointer-events-none"
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 text-white text-sm glass-effect px-4 py-2 rounded-full">
                      <Eye size={16} />
                      <span>Detayları Gör</span>
                    </div>
                    {project.featured && (
                      <div className="flex items-center gap-2 text-white text-sm glass-effect px-4 py-2 rounded-full">
                        <Star size={16} />
                        <span>Öne Çıkan</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Enhanced particle trail effect */}
                  {hoveredProject === project.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div 
            className="p-10 rounded-3xl glass-effect hover:border-white/40 transition-all duration-500 particle-card particle-ripple orb-background"
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Github className="w-10 h-10 text-blue-400" />
              </motion.div>
              <h3 className="text-3xl font-bold gradient-text particle-text">Daha Fazla Proje</h3>
            </motion.div>
            
            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Bu projeler GitHub profilimde mevcut olan aktif çalışmalarım. 
              Kaggle, LeetCode ve HuggingFace hesaplarımda da projelerimi inceleyebilirsiniz.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://github.com/ahmertsengol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-medium rounded-2xl border border-blue-500/40 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 particle-button particle-magnetic transition-all duration-500"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                GitHub Profili
                <ExternalLink size={16} />
              </motion.a>
              
              <motion.a
                href="https://www.kaggle.com/ahmetmertengl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 glass-effect text-white font-medium rounded-2xl border border-white/30 hover:bg-white/10 particle-interactive transition-all duration-500"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain size={20} />
                Kaggle
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 