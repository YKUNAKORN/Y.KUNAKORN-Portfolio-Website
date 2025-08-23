import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out forwards;
      }

      .before-animate {
        opacity: 0;
        transform: translateY(50px);
      }
    `;
    document.head.appendChild(style);

    // Trigger animation after mount (only for Hero)
    setTimeout(() => setAnimateHero(true), 100);

    // Setup IntersectionObserver for other sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navigation />

      <Hero className={animateHero ? 'animate-fadeInUp' : 'opacity-0'} />

      <div className="reveal-on-scroll before-animate">
        <About />
      </div>
      <div className="reveal-on-scroll before-animate">
        <Experience />
      </div>
      <div className="reveal-on-scroll before-animate">
        <Projects />
      </div>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
