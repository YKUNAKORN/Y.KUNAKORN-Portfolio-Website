import { useEffect, useState } from 'react';
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
    document.documentElement.style.scrollBehavior = 'smooth';

    setTimeout(() => setAnimateHero(true), 100);

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

    return () => {
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
