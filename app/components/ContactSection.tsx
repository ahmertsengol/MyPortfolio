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
  Rocket
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
    content: '21sandn21@gmail.com',
    link: 'mailto:21sandn21@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '+90 000 000 0000',
    link: 'tel:+905551234567',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: MapPin,
    title: 'Konum',
    content: 'Muğla/Milas, Türkiye',
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
    url: 'https://github.com/ahmertsengol',
    color: 'from-gray-600 to-gray-800',
    description: 'Kod projelerim ve açık kaynak katkılarım'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ahmertsengol/',
    color: 'from-blue-600 to-blue-700',
    description: 'Profesyonel ağım ve kariyer bilgilerim'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://x.com/ahmertsengol',
    color: 'from-blue-400 to-blue-500',
    description: 'Teknoloji haberleri ve düşüncelerim'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/ahmertsengol/',
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
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

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
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 particle-interactive">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 particle-header"
        >
          <motion.h2 
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 particle-text"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">İletişime Geçin</span>
          </motion.h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            Yeni projelerde iş birliği yapmaya her zaman açığım. Fikirlerinizi paylaşın, 
            birlikte harika şeyler yapalım.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isHovered = hoveredContact === info.title;
            return (
              <motion.div
                key={info.title}
                className="text-center p-4 sm:p-6 rounded-2xl glass-effect particle-card particle-magnetic particle-ripple hover:border-white/30 transition-all duration-300 group"
                onMouseEnter={() => setHoveredContact(info.title)}
                onMouseLeave={() => setHoveredContact(null)}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

                <motion.div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${info.color} p-2 sm:p-2.5 mx-auto mb-3 sm:mb-4 particle-interactive transition-transform duration-300`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>
                <motion.h3 
                  className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 particle-text"
                  whileHover={{ scale: 1.02 }}
                >
                  {info.title}
                </motion.h3>
                {info.link ? (
                  <motion.a
                    href={info.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 block particle-interactive"
                    whileHover={{ scale: 1.02 }}
                  >
                    {info.content}
                  </motion.a>
                ) : (
                  <p className="text-gray-400">{info.content}</p>
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
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <motion.div 
              className="p-4 sm:p-8 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 particle-card particle-ripple"
              whileHover={{ scale: 1.01, y: -3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <motion.div 
                  className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 particle-interactive"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-2xl font-bold text-white particle-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Mesaj Gönderin
                </motion.h3>
              </div>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl glass-effect border border-green-500/30 flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </motion.div>
                  <span className="text-green-400">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative group"
                  >
                    <motion.label 
                      className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2 sm:mb-3 particle-interactive"
                      whileHover={{ x: 3 }}
                    >
                      <User size={16} />
                      Adınız
                    </motion.label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 sm:py-3 glass-effect text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 particle-form group-hover:border-gray-600 min-h-[48px] text-base"
                      placeholder="Adınızı girin"
                      whileFocus={{ scale: 1.02 }}
                      aria-describedby="name-description"
                      aria-required="true"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative group"
                  >
                    <motion.label 
                      className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3 particle-interactive"
                      whileHover={{ x: 3 }}
                    >
                      <AtSign size={16} />
                      E-posta
                    </motion.label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-effect text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 particle-form group-hover:border-gray-600"
                      placeholder="E-posta adresinizi girin"
                      whileFocus={{ scale: 1.02 }}
                      aria-describedby="email-description"
                      aria-required="true"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative group"
                >
                  <motion.label 
                    className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3 particle-interactive"
                    whileHover={{ x: 3 }}
                  >
                    <FileText size={16} />
                    Konu
                  </motion.label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-effect text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 particle-form group-hover:border-gray-600"
                    placeholder="Mesaj konusu"
                    whileFocus={{ scale: 1.02 }}
                    aria-describedby="subject-description"
                    aria-required="true"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="relative group"
                >
                  <motion.label 
                    className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-3 particle-interactive"
                    whileHover={{ x: 3 }}
                  >
                    <MessageSquare size={16} />
                    Mesajınız
                  </motion.label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass-effect text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none particle-form group-hover:border-gray-600"
                    placeholder="Mesajınızı buraya yazın..."
                    aria-describedby="message-description"
                    aria-required="true"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 particle-button particle-magnetic min-h-[48px] text-sm sm:text-base ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25'
                  } text-white`}
                  whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  aria-label={isSubmitting ? 'Mesaj gönderiliyor' : 'Mesajı gönder'}
                  aria-disabled={isSubmitting}
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
            </motion.div>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {/* Social Links */}
            <motion.div 
              className="p-4 sm:p-6 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 particle-card particle-ripple"
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <motion.div 
                  className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 particle-interactive"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-white particle-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Sosyal Medya
                </motion.h3>
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
                      className="flex items-center gap-4 p-4 rounded-xl glass-effect hover:border-white/30 transition-all duration-300 group particle-interactive"
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {/* Particle trail effect */}
                      {hoveredSocial === social.name && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}

                      <motion.div 
                        className={`p-3 rounded-lg bg-gradient-to-r ${social.color} text-white particle-interactive transition-transform duration-300`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div 
                          className="font-semibold text-white group-hover:text-blue-400 transition-colors particle-text"
                          whileHover={{ scale: 1.02 }}
                        >
                          {social.name}
                        </motion.div>
                        <div className="text-sm text-gray-400 mt-1">
                          {isHovered ? social.description : 'Takip edin'}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Message */}
            <motion.div 
              className="p-6 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 particle-card particle-ripple"
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 particle-interactive"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h4 
                  className="text-lg font-bold text-white particle-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Hızlı İletişim
                </motion.h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Acil projeleriniz için WhatsApp üzerinden 7/24 ulaşabilirsiniz. 
                Genellikle 1 saat içinde yanıtlarım.
              </p>
              <motion.button
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors duration-300 font-medium particle-button particle-magnetic"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp'ta Mesaj Gönder
              </motion.button>
            </motion.div>

            {/* Availability */}
            <motion.div 
              className="p-6 rounded-2xl glass-effect hover:border-white/30 transition-all duration-300 particle-card particle-ripple"
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 particle-interactive"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h4 
                  className="text-lg font-bold text-white particle-text"
                  whileHover={{ scale: 1.02 }}
                >
                  Çalışma Durumu
                </motion.h4>
              </div>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center gap-3 particle-interactive"
                  whileHover={{ x: 3 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-gray-300 text-sm">Şu anda yeni projeler alıyorum</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 particle-interactive"
                  whileHover={{ x: 3 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-gray-300 text-sm">Uzun dönem projeler tercihim</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 particle-interactive"
                  whileHover={{ x: 3 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-purple-400 rounded-full"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                  />
                  <span className="text-gray-300 text-sm">Remote çalışmaya uygunuм</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 