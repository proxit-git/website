import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';

export const TestimonialsSection = () => {
  const placeholderCards = [
    {
      id: 1,
      title: 'نظرات کاربران',
      description: 'به زودی نظرات و تجربیات کاربران ما در اینجا نمایش داده خواهد شد',
      icon: '💬',
      status: 'coming-soon'
    },
    {
      id: 2,
      title: 'امتیازدهی',
      description: 'سیستم امتیازدهی و بازخورد کاربران فعال خواهد شد',
      icon: '⭐',
      status: 'coming-soon'
    },
    {
      id: 3,
      title: 'تجربیات مشتریان',
      description: 'داستان‌های موفقیت و تجربیات مشتریان ما',
      icon: '🏆',
      status: 'coming-soon'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 relative section-background">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            text="نظرات مشتریان"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variant="slide"
          />
          <AnimatedText
            as="p"
            text="اعتماد و رضایت مشتریان، بزرگ‌ترین دستاورد ماست"
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            variant="fade"
            delay={0.3}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full relative text-center">
                <div className="text-6xl mb-4 opacity-50">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>
                <p className="text-foreground/60 mb-4">{card.description}</p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  به زودی
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard variant="strong" className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                به زودی راه‌اندازی می‌شویم
              </h3>
              <p className="text-foreground/70 mb-6">
                ما در حال آماده‌سازی پلتفرم جامع خود هستیم. آمارها و اطلاعات تفصیلی به زودی در این بخش اضافه خواهند شد.
              </p>
              <div className="text-4xl mb-4">🚀</div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                <span className="text-primary font-semibold">مرحله توسعه</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};