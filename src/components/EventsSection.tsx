import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';
import { Button } from './ui/button';

export const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'کنفرانس هوش مصنوعی آینده',
      date: '۱۵ فروردین ۱۴۰۴',
      time: '۹:۰۰ - ۱۷:۰۰',
      location: 'تهران، مرکز همایش‌های بین‌المللی',
      attendees: 500,
      description: 'کنفرانسی جامع درباره آخرین دستاوردها و کاربردهای هوش مصنوعی در صنایع مختلف',
      status: 'upcoming',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'ورکشاپ طراحی UX/UI آینده‌نگر',
      date: '۲۸ فروردین ۱۴۰۴',
      time: '۱۰:۰۰ - ۱۶:۰۰',
      location: 'تهران، پارک علم و فناوری',
      attendees: 150,
      description: 'کارگاه عملی طراحی رابط کاربری با تمرکز بر تجربه کاربری مدرن و فناوری‌های نوین',
      status: 'upcoming',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'نمایشگاه فناوری‌های نوظهور',
      date: '۱۰ اردیبهشت ۱۴۰۴',
      time: '۸:۰۰ - ۲۰:۰۰',
      location: 'تهران، نمایشگاه بین‌المللی',
      attendees: 1000,
      description: 'نمایشگاه بزرگ فناوری‌های پیشرفته شامل روباتیک، IoT، بلاک‌چین و واقعیت مجازی',
      status: 'featured',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section id="events" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            text="رویدادهای پیش رو"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variant="slide"
          />
          <AnimatedText
            as="p"
            text="در رویدادهای تخصصی ما شرکت کنید و از آخرین دستاوردها و فناوری‌های نوین باخبر شوید"
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            variant="fade"
            delay={0.3}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={event.status === 'featured' ? 'lg:col-span-3' : ''}
            >
              <GlassCard 
                className={`p-6 h-full relative overflow-hidden group ${
                  event.status === 'featured' 
                    ? 'bg-gradient-to-r from-primary/10 to-accent/10' 
                    : ''
                }`}
              >
                {/* Status badge */}
                {event.status === 'featured' && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full">
                    ویژه
                  </div>
                )}

                {/* Event image/gradient */}
                <div 
                  className="h-32 rounded-xl mb-6 relative overflow-hidden"
                  style={{ background: event.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-white/80" />
                  </div>
                </div>

                <div className={event.status === 'featured' ? 'lg:flex lg:gap-8' : ''}>
                  <div className={event.status === 'featured' ? 'lg:flex-1' : ''}>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className={event.status === 'featured' ? 'lg:flex-1' : ''}>
                    {/* Event details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-foreground/80">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <Users className="w-5 h-5 text-primary" />
                        <span>{event.attendees.toLocaleString('fa-IR')} شرکت‌کننده</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-xl"
                      size="lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        ثبت نام
                        <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};