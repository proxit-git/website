import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  variant?: 'fade' | 'slide' | 'glow';
}

export const AnimatedText = ({ 
  text, 
  className, 
  delay = 0,
  as: Component = 'p',
  variant = 'fade'
}: AnimatedTextProps) => {
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, delay }
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, type: "spring" as const }
    },
    glow: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay }
    }
  };

  return (
    <motion.div
      {...animations[variant]}
      whileInView={animations[variant].animate}
      viewport={{ once: true }}
    >
      <Component className={cn(
        variant === 'glow' && 'animate-glow',
        className
      )}>
        {text}
      </Component>
    </motion.div>
  );
};