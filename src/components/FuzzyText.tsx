import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface FuzzyTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
  delay?: number;
}

const FuzzyText: React.FC<FuzzyTextProps> = ({
  text,
  className = '',
  trigger = true,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const animateText = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const originalText = text;
    const textArray = originalText.split('');
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        textArray
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return char === ' ' ? ' ' : getRandomChar();
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalText);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(animateText, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger, delay]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <motion.span
      className={`fuzzy-text font-mono tracking-wider ${className}`}
      data-text={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => !isAnimating && animateText()}
      style={{
        textShadow: isAnimating 
          ? '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.5)' 
          : '0 0 1px rgba(255,255,255,0.5)',
        transition: 'text-shadow 0.3s ease'
      }}
    >
      {displayText}
    </motion.span>
  );
};

export default FuzzyText; 