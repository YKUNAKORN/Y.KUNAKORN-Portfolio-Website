import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'path', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-700/20 rounded-3xl px-4 py-3 shadow-2xl backdrop-blur-lg">
        <div className="flex items-center space-x-5">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 transform ${
                  isActive
                    ? 'bg-white/20 scale-110 shadow-lg shadow-white/10 px-10'
                    : 'hover:bg-white/10 hover:scale-105'
                }`}
              >
                <IconComponent 
                  className={`w-5 h-5 mb-1 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`} 
                />
                <span className={`text-xs font-mono transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                }`}>
                  {section.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;