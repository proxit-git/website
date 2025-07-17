import { motion } from 'framer-motion';
import { Rocket, ArrowLeft } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';
import { Button } from './ui/button';
import { useRef, useEffect, useState } from 'react';
import teamLogo from '@/assets/team-logo.png';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 400);
      setVideoOpacity(newOpacity);
      
      if (videoRef.current) {
        videoRef.current.volume = newOpacity * 0.3; // Fade audio with scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24">
      {/* Video Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={false}
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => {
            if (videoRef.current) {
              videoRef.current.volume = 0.3;
            }
          }}
        >
          <source src="https://raw.githubusercontent.com/proxit-git/website/main/ORG.mp4" type="video/mp4" />
          متصفح شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <img 
            src={teamLogo} 
            alt="لوگو قهرمانان زندگی" 
            className="w-24 h-16 mx-auto mb-6 object-contain animate-float filter drop-shadow-lg"
          />
        </motion.div>

        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-center relative z-10"
          >
            <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-pulse">
              آینده‌ای روشن،
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-300% animate-pulse">
              امروز آغاز می‌شود
            </span>
          </motion.h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-xl opacity-50 pointer-events-none"></div>
        </div>

        <AnimatedText
          as="p"
          text="ما تکنولوژی‌های پیشرفته را برای ساختن دنیایی بهتر و هوشمندتر توسعه می‌دهیم"
          className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
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
            className="glass-strong text-white border-white/30 hover:border-white px-8 py-4 rounded-2xl text-lg font-semibold group"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
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