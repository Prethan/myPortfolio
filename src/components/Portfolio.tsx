import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';

import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = {
    hero: HeroSection,
    projects: ProjectsSection,
    skills: SkillsSection,
    education: EducationSection,
    certifications: CertificationsSection,
    contact: ContactSection,
  };

  const handleSectionChange = (section: string) => {
    if (section === currentSection) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);
    setCurrentSection(section); // update immediately for nav highlight

    // Smooth scroll to section
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });

    // End transition after a short delay
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-update currentSection based on closest section to top
  useEffect(() => {
    const sectionNames = ['hero', 'projects', 'skills', 'education', 'certifications', 'contact'];

    const handleScroll = () => {
      if (isTransitioning) return;

      let closest: string = currentSection;
      let minDist = Infinity;

      for (const id of sectionNames) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top);
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      }

      if (closest !== currentSection) {
        setCurrentSection(closest);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, isTransitioning]);

  const CurrentSectionComponent = sections[currentSection as keyof typeof sections];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-r from-primary via-secondary to-accent z-40 origin-left"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>

        {/* Education Section */}
        <div id="education">
          <EducationSection />
        </div>

        {/* Certifications Section */}
        <div id="certifications">
          <CertificationsSection />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Gradient Overlay Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur rounded-full animate-pulse opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 gradient-blur rounded-full animate-pulse opacity-10" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default Portfolio;