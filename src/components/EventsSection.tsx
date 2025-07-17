import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';
import { Button } from './ui/button';

export const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'معرفی پلتفرم قهرمانان زندگی',
      date: '۲۵ دی ۱۴۰۳',
      time: '۱۰:۰۰ - ۱۲:۰۰',
      location: 'آنلاین - لایو استریم',
      attendees: 1000,
      description: 'رویداد رسمی معرفی پلتفرم قهرمانان زندگی و ماموریت تیم ما در تحول دیجیتال',
      status: 'featured',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop&crop=faces',
      imageAlt: 'رویداد معرفی پلتفرم'
    },
    {
      id: 2,
      title: 'کارگاه آموزشی برنامه‌نویسی',
      date: '۵ بهمن ۱۴۰۳',
      time: '۹:۰۰ - ۱۷:۰۰',
      location: 'تهران، مرکز نوآوری',
      attendees: 50,
      description: 'کارگاه عملی آموزش برنامه‌نویسی مدرن و فناوری‌های روز دنیا',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop&crop=faces',
      imageAlt: 'کارگاه برنامه‌نویسی'
    },
    {
      id: 3,
      title: 'همایش فناوری و نوآوری',
      date: '۱۵ بهمن ۱۴۰۳',
      time: '۸:۰۰ - ۲۰:۰۰',
      location: 'تهران، پالاس بین‌المللی',
      attendees: 500,
      description: 'همایش بزرگ نوآوری و فناوری با حضور متخصصان برتر کشور',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&crop=faces',
      imageAlt: 'همایش فناوری'
    }
  ];

  return (
    <section id="events" className="py-20 px-4 relative section-background">
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

                {/* Event image */}
                <div className="h-32 rounded-xl mb-6 relative overflow-hidden">
                  {event.image.startsWith('http') ? (
                    <img 
                      src={event.image} 
                      alt={event.imageAlt || event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div 
                      className="w-full h-full"
                      style={{ background: event.image }}
                    />
                  )}
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