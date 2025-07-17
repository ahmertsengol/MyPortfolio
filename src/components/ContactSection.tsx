import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  MessageSquare,
  Clock,
  User,
  AtSign,
  FileText,
  Sparkles,
  CheckCircle,
  Heart
} from 'lucide-react';

interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
  link?: string;
  color: string;
}

interface SocialLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  url: string;
  color: string;
  description: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    content: 'ahmet@developer.com',
    link: 'mailto:ahmet@developer.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '+90 555 123 4567',
    link: 'tel:+905551234567',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: MapPin,
    title: 'Konum',
    content: 'İstanbul, Türkiye',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    content: '09:00 - 18:00 (GMT+3)',
    color: 'from-orange-500 to-red-500'
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com',
    color: 'from-gray-600 to-gray-800',
    description: 'Kod projelerim ve açık kaynak katkılarım'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    color: 'from-blue-600 to-blue-700',
    description: 'Profesyonel ağım ve kariyer bilgilerim'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com',
    color: 'from-blue-400 to-blue-500',
    description: 'Teknoloji haberleri ve düşüncelerim'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com',
    color: 'from-pink-500 to-purple-600',
    description: 'Günlük yaşam ve çalışma ortamım'
  }
];

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Yeni projelerde iş birliği yapmaya her zaman açığım. Fikirlerinizi paylaşın, 
            birlikte harika şeyler yapalım.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                className="text-center p-6 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group particle-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-2.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.content}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mesaj Gönderin</h3>
              </div>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative group"
                  >
                    <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3">
                      <User size={16} />
                      Adınız
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 particle-form group-hover:border-gray-600"
                      placeholder="Adınızı girin"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative group"
                  >
                    <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3">
                      <AtSign size={16} />
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 particle-form group-hover:border-gray-600"
                      placeholder="E-posta adresinizi girin"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative group"
                >
                  <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3">
                    <FileText size={16} />
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 particle-form group-hover:border-gray-600"
                    placeholder="Mesaj konusu"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="relative group"
                >
                  <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3">
                    <MessageSquare size={16} />
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none particle-form group-hover:border-gray-600"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 particle-button ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105'
                  } text-white`}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Sosyal Medya</h3>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const isHovered = hoveredSocial === social.name;
                  
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-white/20 transition-all duration-300 group"
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          {isHovered ? social.description : 'Takip edin'}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Message */}
            <div className="p-6 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white">Hızlı İletişim</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Acil projeleriniz için WhatsApp üzerinden 7/24 ulaşabilirsiniz. 
                Genellikle 1 saat içinde yanıtlarım.
              </p>
              <motion.button
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp'ta Mesaj Gönder
              </motion.button>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-slate-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 particle-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white">Çalışma Durumu</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">Şu anda yeni projeler alıyorum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Uzun dönem projeler tercihim</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Remote çalışmaya uygunuм</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 