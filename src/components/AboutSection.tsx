import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users, Target, Award } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'هوش مصنوعی پیشرفته',
      description: 'استفاده از آخرین دستاوردهای هوش مصنوعی برای حل مسائل پیچیده'
    },
    {
      icon: Shield,
      title: 'امنیت بالا',
      description: 'سیستم‌های امنیتی قدرتمند برای محافظت از داده‌های حساس شما'
    },
    {
      icon: Zap,
      title: 'سرعت فوق‌العاده',
      description: 'پردازش سریع و بهینه‌سازی عملکرد برای تجربه کاربری بهتر'
    },
    {
      icon: Users,
      title: 'تیم متخصص',
      description: 'تیمی از بهترین متخصصان صنعت برای ارائه خدمات درجه یک'
    },
    {
      icon: Target,
      title: 'هدفمند و دقیق',
      description: 'راه‌حل‌های سفارشی متناسب با نیازهای خاص هر پروژه'
    },
    {
      icon: Award,
      title: 'کیفیت برتر',
      description: 'استانداردهای بین‌المللی و کیفیت بی‌نظیر در تمام خدمات'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            text="درباره تیم آینده‌نگر"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variant="slide"
          />
          <AnimatedText
            as="p"
            text="ما گروهی از متخصصان پرشور هستیم که با استفاده از جدیدترین تکنولوژی‌ها، راه‌حل‌هایی نوآورانه برای چالش‌های آینده ارائه می‌دهیم"
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            variant="fade"
            delay={0.3}
          />
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">ماموریت ما</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                در دنیای امروز که تکنولوژی با سرعت نور پیش می‌رود، ما متعهد به ایجاد راه‌حل‌هایی هستیم که نه تنها نیازهای فعلی را برطرف کنند، بلکه آماده‌ساز آینده‌ای روشن‌تر باشند.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                تیم ما با ترکیب خلاقیت، تخصص فنی، و تجربه گسترده، پروژه‌هایی می‌سازد که تحول واقعی در صنایع مختلف ایجاد می‌کند.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">چشم‌انداز ما</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                ما آینده‌ای را متصور می‌کنیم که در آن تکنولوژی در خدمت بشریت قرار گیرد و زندگی افراد را بهتر، راحت‌تر و امن‌تر کند.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                هدف ما پیشگام بودن در زمینه نوآوری‌های تکنولوژیک است و کمک به شرکت‌ها و سازمان‌ها برای تحقق اهداف بلندمدت‌شان.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};