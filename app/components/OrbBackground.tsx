import { useRef } from 'react';
import { motion } from 'framer-motion';

interface OrbBackgroundProps {
  className?: string;
  orbCount?: number;
  colors?: string[];
}

const OrbBackground: React.FC<OrbBackgroundProps> = ({ 
  className = '',
  orbCount = 3,
  colors = ['rgba(59, 130, 246, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(236, 72, 153, 0.15)']
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const orbs = Array.from({ length: orbCount }, (_, index) => ({
    id: index,
    color: colors[index % colors.length],
    size: Math.random() * 300 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div 
      ref={containerRef}
      className={`orb-background absolute inset-0 overflow-hidden ${className}`}
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full mix-blend-multiply filter blur-xl"
          style={{
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            width: orb.size,
            height: orb.size,
          }}
          initial={{
            x: `${orb.x}%`,
            y: `${orb.y}%`,
          }}
          animate={{
            x: [`${orb.x}%`, `${(orb.x + 30) % 100}%`, `${orb.x}%`],
            y: [`${orb.y}%`, `${(orb.y + 20) % 100}%`, `${orb.y}%`],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          WebkitFilter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          WebkitFilter: 'blur(50px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [-30, 30, -30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default OrbBackground; 