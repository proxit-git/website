import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  Send,
  ArrowUp
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import teamLogo from '@/assets/team-logo.png';

export const Footer = () => {
  const quickLinks = [
    { name: 'خانه', href: '#home' },
    { name: 'درباره ما', href: '#about' },
    { name: 'خدمات', href: '#services' },
    { name: 'رویدادها', href: '#events' },
    { name: 'تماس', href: '#contact' }
  ];

  const services = [
    'توسعه وب',
    'اپلیکیشن موبایل',
    'هوش مصنوعی',
    'تحلیل داده',
    'مشاوره فنی'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'توییتر' },
    { icon: Linkedin, href: '#', label: 'لینکدین' },
    { icon: Instagram, href: '#', label: 'اینستاگرام' },
    { icon: Github, href: '#', label: 'گیت‌هاب' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative mt-20 section-background">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <GlassCard variant="strong" className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                خبرنامه ما
              </h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                برای دریافت آخرین اخبار، مقالات، و اطلاع از رویدادهای جدید، در خبرنامه ما عضو شوید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="ایمیل شما"
                  className="glass-strong border-primary/30 text-right"
                />
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-6">
                  <Send className="w-4 h-4 ml-2" />
                  عضویت
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={teamLogo} 
                    alt="لوگو" 
                    className="w-12 h-8 object-contain rounded-xl"
                  />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    قهرمانان زندگی
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  ما با ارائه راه‌حل‌های نوآورانه و استفاده از جدیدترین تکنولوژی‌ها، آینده‌ای روشن‌تر برای کسب‌وکارها می‌سازیم.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <h4 className="text-lg font-semibold mb-6 text-primary">دسترسی سریع</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-foreground/70 hover:text-primary transition-colors relative group block"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <h4 className="text-lg font-semibold mb-6 text-primary">خدمات</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                        {service}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <h4 className="text-lg font-semibold mb-6 text-primary">تماس با ما</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <div className="p-2 glass rounded-lg">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <div className="p-2 glass rounded-lg">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>info@ayandeh-negar.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <div className="p-2 glass rounded-lg">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="strong" className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-foreground/60 text-sm text-center md:text-right">
                  © ۱۴۰۴ قهرمانان زندگی. تمامی حقوق محفوظ است.
                </p>
                
                <div className="flex items-center gap-4">
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                    حریم خصوصی
                  </a>
                  <span className="text-foreground/30">|</span>
                  <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                    شرایط استفاده
                  </a>
                  <motion.button
                    onClick={scrollToTop}
                    className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors ml-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUp className="w-4 h-4 text-primary" />
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};