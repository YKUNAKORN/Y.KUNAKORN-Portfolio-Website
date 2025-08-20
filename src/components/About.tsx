import React, { useEffect, useRef } from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development", 
      description: "Working with both Frontend and Backend using cutting-edge technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing beautiful and user-friendly interfaces"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing website performance for speed and stability"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Solving complex problems with creative thinking"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16 opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A developer passionate about creating technology that can change the world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="fade-in-up opacity-0">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I'm a developer with years of experience creating web applications and systems 
                that truly serve users. With a passion for technology and design, 
                I'm committed to developing high-quality work and creating great user experiences.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                I believe good technology should be easy to use, beautiful, and solve real problems. 
                With experience working on diverse projects, 
                I'm ready to help turn your ideas into reality.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-medium text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="fade-in-up opacity-0 group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/5"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                    <p className="text-white/60 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;