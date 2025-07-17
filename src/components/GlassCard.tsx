import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'hero';
  animate?: boolean;
  delay?: number;
}

export const GlassCard = ({ 
  children, 
  className, 
  variant = 'default',
  animate = true,
  delay = 0
}: GlassCardProps) => {
  const baseClasses = {
    default: 'glass-card',
    strong: 'glass-strong rounded-3xl',
    hero: 'glass-card bg-gradient-to-br from-primary/10 to-accent/5'
  };

  const motionProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.6, 
      delay,
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    },
    viewport: { once: true }
  } : {};

  return (
    <motion.div
      className={cn(
        baseClasses[variant],
        'hover-lift hover-glow transition-all duration-300',
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};