import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play, Code2, Sparkles, Layers, Database, Zap, Award } from 'lucide-react';

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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern ve responsive e-ticaret platformu. Full-stack çözüm ile admin paneli, ödeme sistemi ve real-time sipariş takibi.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Full Stack',
    featured: true,
    year: '2024',
    status: 'completed'
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    description: 'OpenAI GPT-4 entegrasyonu ile geliştirilmiş akıllı sohbet asistanı. Doğal dil işleme ve öğrenme kabiliyeti.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'AI/ML',
    featured: true,
    year: '2024',
    status: 'ongoing'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Takım çalışması için geliştirilmiş modern görev yönetim sistemi. Drag & drop, real-time güncelleme ve iş birliği.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web App',
    featured: false,
    year: '2023',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Cryptocurrency Dashboard',
    description: 'Real-time kripto para takibi ve analiz platformu. Canlı grafikler, portfolio yönetimi ve market analizi.',
    technologies: ['Vue.js', 'Chart.js', 'WebSocket', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Frontend',
    featured: false,
    year: '2023',
    status: 'completed'
  },
  {
    id: 5,
    title: 'IoT Data Analytics',
    description: 'IoT sensörlerinden gelen verilerin analizi ve görselleştirilmesi için geliştirilmiş backend sistemi.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Backend',
    featured: false,
    year: '2023',
    status: 'completed'
  },
  {
    id: 6,
    title: 'Machine Learning Model',
    description: 'Satış tahmini için geliştirilmiş makine öğrenmesi modeli. TensorFlow ve scikit-learn kullanımı.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Jupyter'],
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'AI/ML',
    featured: false,
    year: '2023',
    status: 'completed'
  }
];

const categories = [
  { name: 'Tümü', value: 'all', icon: Layers, color: 'from-blue-500 to-cyan-500' },
  { name: 'Full Stack', value: 'Full Stack', icon: Code2, color: 'from-purple-500 to-pink-500' },
  { name: 'Frontend', value: 'Frontend', icon: Sparkles, color: 'from-green-500 to-teal-500' },
  { name: 'Backend', value: 'Backend', icon: Database, color: 'from-orange-500 to-red-500' },
  { name: 'AI/ML', value: 'AI/ML', icon: Zap, color: 'from-indigo-500 to-purple-500' },
  { name: 'Web App', value: 'Web App', icon: Code2, color: 'from-pink-500 to-rose-500' }
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
    <section id="projects" className="relative py-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projelerim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler kullanarak geliştirdiğim projeler. Her biri farklı alanlarda 
            uzmanlığımı ve yaratıcılığımı yansıtıyor.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Toplam Proje', value: projects.length, icon: Layers, color: 'from-blue-500 to-cyan-500' },
            { label: 'Öne Çıkan', value: projects.filter(p => p.featured).length, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
            { label: 'Devam Eden', value: projects.filter(p => p.status === 'ongoing').length, icon: Zap, color: 'from-green-500 to-teal-500' },
            { label: 'Tamamlanan', value: projects.filter(p => p.status === 'completed').length, icon: Award, color: 'from-orange-500 to-red-500' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="text-center p-6 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mx-auto mb-3`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.value;
            
            return (
              <motion.button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-slate-950/70 border border-blue-500/50'
                    : 'text-gray-400 hover:text-white bg-slate-950/30 border border-white/10 hover:border-white/20'
                } backdrop-blur-sm particle-card`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 relative z-10">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${category.color} ${isActive ? 'scale-110' : ''} transition-transform duration-300`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  {category.name}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-96 overflow-hidden rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card">
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                    <div className="flex gap-2">
                      {/* Year Badge */}
                      <div className="px-3 py-1 bg-slate-950/60 backdrop-blur-sm rounded-full border border-white/10">
                        <span className="text-xs font-medium text-gray-300">{project.year}</span>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`px-3 py-1 backdrop-blur-sm rounded-full border text-xs font-medium ${getStatusColor(project.status)}`}>
                        {getStatusText(project.status)}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                        <Sparkles size={14} className="text-blue-400" />
                        <span className="text-xs font-medium text-blue-400">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Category */}
                      <div className="mb-3">
                        <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, project.featured ? 5 : 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-md border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > (project.featured ? 5 : 3) && (
                          <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded-md border border-white/20">
                            +{project.technologies.length - (project.featured ? 5 : 3)}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0, 
                          y: hoveredProject === project.id ? 0 : 20 
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex gap-3"
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 particle-button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={16} />
                          Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-950/50 backdrop-blur-sm text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="p-8 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Github className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold gradient-text">Daha Fazla Proje</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bu sadece projelerimin bir kısmı. GitHub hesabımda daha fazla açık kaynak 
              proje ve deneysel çalışmalarımı bulabilirsiniz.
            </p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white font-medium rounded-full border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub'da Daha Fazlası
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 