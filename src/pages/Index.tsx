import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { EventsSection } from '@/components/EventsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set dark theme by default on initial load
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Us Section */}
        <AboutSection />
        
        {/* Events Section */}
        <EventsSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
