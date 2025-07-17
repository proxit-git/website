import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'دکتر علی محمدی',
      role: 'مدیرعامل شرکت تکنولوژی پارس',
      avatar: '👨‍💼',
      rating: 5,
      text: 'همکاری با تیم آینده‌نگر تجربه‌ای فوق‌العاده بود. پروژه ما را با کیفیت بی‌نظیر و در زمان مقرر تحویل دادند. قطعاً برای پروژه‌های آینده دوباره با آن‌ها همکاری خواهیم کرد.',
      project: 'سیستم مدیریت هوشمند'
    },
    {
      id: 2,
      name: 'مهندس سارا حسینی',
      role: 'مدیر فناوری اطلاعات',
      avatar: '👩‍💻',
      rating: 5,
      text: 'راه‌حل ارائه شده توسط این تیم نه تنها انتظارات ما را برآورده کرد، بلکه فراتر از آن عمل کرد. پشتیبانی و خدمات پس از فروش آن‌ها نیز بسیار عالی است.',
      project: 'پلتفرم تجارت الکترونیک'
    },
    {
      id: 3,
      name: 'احمد رضایی',
      role: 'بنیانگذار استارتاپ نوآور',
      avatar: '🚀',
      rating: 5,
      text: 'به عنوان یک استارتاپ، نیاز به راه‌حلی سریع و مقرون‌به‌صرفه داشتیم. تیم آینده‌نگر با درک کامل نیازهای ما، محصولی ارائه دادند که کاملاً متناسب با بودجه و زمان‌بندی ما بود.',
      project: 'اپلیکیشن موبایل'
    },
    {
      id: 4,
      name: 'دکتر فاطمه کریمی',
      role: 'مدیر پژوهش و توسعه',
      avatar: '👩‍🔬',
      rating: 5,
      text: 'استفاده از فناوری‌های روز دنیا و رویکرد علمی این تیم در حل مسائل پیچیده، واقعاً قابل تحسین است. نتایج کار آن‌ها تأثیر مثبت زیادی بر پروژه‌های تحقیقاتی ما گذاشته است.',
      project: 'سیستم تحلیل داده'
    },
    {
      id: 5,
      name: 'محمد امینی',
      role: 'مدیر بازاریابی دیجیتال',
      avatar: '📊',
      rating: 5,
      text: 'طراحی و پیاده‌سازی کمپین‌های دیجیتال ما توسط این تیم، منجر به افزایش ۳۰۰ درصدی تعامل کاربران شد. خلاقیت و تخصص آن‌ها در این زمینه واقعاً چشمگیر است.',
      project: 'کمپین بازاریابی دیجیتال'
    },
    {
      id: 6,
      name: 'نگار صادقی',
      role: 'مدیر عملیات',
      avatar: '⚙️',
      rating: 5,
      text: 'سیستم‌های اتوماسیون که برای ما طراحی کردند، کارایی سازمان را به طرز قابل توجهی افزایش داده است. حالا می‌توانیم روی کارهای استراتژیک‌تر تمرکز کنیم.',
      project: 'سیستم اتوماسیون'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 relative">
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full relative">
                {/* Quote icon */}
                <div className="absolute top-4 left-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-end">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Project */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard variant="strong" className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۴.۹
                </motion.div>
                <p className="text-foreground/70 text-sm">امتیاز رضایت</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۲۰۰+
                </motion.div>
                <p className="text-foreground/70 text-sm">مشتری راضی</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۹۵%
                </motion.div>
                <p className="text-foreground/70 text-sm">نرخ تکرار</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  ۲۴/۷
                </motion.div>
                <p className="text-foreground/70 text-sm">پشتیبانی</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};