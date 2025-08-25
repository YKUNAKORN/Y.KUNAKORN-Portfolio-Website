import { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Path', icon: Briefcase },
    { id: 'projects', label: 'Project', icon: FolderOpen },
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
      <div className="bg-gray-900/25 rounded-3xl px-4 py-3 shadow-2xl backdrop-blur-lg">
        <div className="flex items-center space-x-5">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isActive = activeSection === section.id;  
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex flex-col items-center justify-center 
                  w-8 h-8 rounded-lg transition-all duration-300 transform
                  sm:w-14 sm:h-14 sm:rounded-2xl
                  ${isActive
                    ? 'bg-white/20 scale-105 shadow-lg shadow-white/10 px-8'
                    : 'hover:bg-white/10 hover:scale-110'
                  }`}
              >
                <IconComponent 
                  className={`w-4 h-4 mb-0.5 transition-colors duration-300
                    sm:w-5 sm:h-5 sm:mb-1
                    ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}
                  `} 
                />
                <span className={`text-[9px] font-mono transition-colors duration-300
                  sm:text-xs
                  ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}
                `}>
                  {section.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50 sm:w-3 sm:h-3" />
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
