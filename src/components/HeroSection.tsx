import { motion } from 'framer-motion';
import { Rocket, Sparkles, ArrowLeft } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
        </motion.div>

        <div className="relative">
          <AnimatedText
            as="h1"
            text="آینده‌ای روشن، امروز آغاز می‌شود"
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variant="glow"
            delay={0.3}
          />
          <div className="absolute inset-0 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight pointer-events-none">
            آینده‌ای روشن، امروز آغاز می‌شود
          </div>
        </div>

        <AnimatedText
          as="p"
          text="ما تکنولوژی‌های پیشرفته را برای ساختن دنیایی بهتر و هوشمندتر توسعه می‌دهیم"
          className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto"
          variant="slide"
          delay={0.6}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              شروع کنید
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="glass-strong text-foreground border-primary/30 hover:border-primary px-8 py-4 rounded-2xl text-lg font-semibold group"
          >
            <span className="flex items-center gap-2">
              بیشتر بدانید
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20"
        >
          <GlassCard className="p-8" delay={1.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۱۰۰+
                </motion.div>
                <p className="text-foreground/70">پروژه موفق</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۵۰+
                </motion.div>
                <p className="text-foreground/70">متخصص</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۹۹%
                </motion.div>
                <p className="text-foreground/70">رضایت مشتریان</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};