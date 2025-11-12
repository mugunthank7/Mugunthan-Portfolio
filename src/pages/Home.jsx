import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HeroSection from '../components/portfolio/HeroSection';
import AboutWithPhoto from '../components/portfolio/AboutWithPhoto';
import CurrentStudiesSection from '../components/portfolio/CurrentStudiesSection';
import CourseworkSection from '../components/portfolio/CourseworkSection';
import CertificationsSection from '../components/portfolio/CertificationsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import PublicationsSection from '../components/portfolio/PublicationsSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ContactSection from '../components/portfolio/ContactSection';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Publications', id: 'publications' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1117]/95 backdrop-blur-lg border-b border-[#30363d] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              MK
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#7d8590] hover:text-[#58a6ff] transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#c9d1d9] hover:text-[#58a6ff] transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#30363d]">
              <div className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#7d8590] hover:text-[#58a6ff] transition-colors font-medium text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sections */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutWithPhoto />
      <CurrentStudiesSection />
      <CourseworkSection />
      <CertificationsSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#30363d] bg-[#010409]">
        <div className="max-w-7xl mx-auto text-center text-[#7d8590]">
          <p>© 2025 Mugunthan Kesavan. Built with passion for AI & Data Science.</p>
          <p className="text-sm mt-2 text-[#6e7681]">Crafted with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
