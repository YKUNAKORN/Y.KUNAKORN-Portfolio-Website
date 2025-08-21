import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Agentic AI for Healthcare Hackathon", 
      company: "CMKL University",
      period: "31 July - 2 August 2025",
      location: "Bangkok, Thailand",
      description: "Creating healthcare solutions with our Inttelligent Agentic AI",
      achievements: [
        "Developed a prototype for Agentic-AI patient management system",
        "Implemented AI-driven patient FAQ response system", 
      ]
    },
    {
      title: "SWU Metaverse workshop and competition",
      company: "Srinakharinwirot University",
      period: "7 March - 8 March 2025", 
      location: "Bangkok, Thailand",
      description: "Hand on workshop and competition to create a Srinakharinwirot University into metaverse",
      achievements: [
        "Designed and developed a virtual campus environment",
        "Workshop on Unity and Blender for 3D modeling",
      ]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Srinakharinwirot University",
      period: "2023 - present",
      gpa: "3.20"
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16 opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-xl text-white/70 max-w-3xl mx-auto">
            Experience and education journey that creates quality results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="fade-in-up opacity-0 text-2xl font-bold text-white mb-8 flex items-center"> 
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-4"></div>
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="fade-in-up opacity-0 group relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/5"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-white/50 text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <p className="text-lg font-medium text-blue-300">{exp.company}</p>
                      <div className="flex items-center text-white/50 text-sm mt-1 sm:mt-0">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="fade-in-up opacity-0 text-2xl font-bold text-white mb-8 flex items-center"> 
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-4"></div>
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="fade-in-up opacity-0 bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-xl shadow-black/10"
                  style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
                >
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-300 font-medium mb-2">{edu.school}</p>
                  <div className="flex justify-between items-center text-sm text-white/50">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center"> 
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-4"></div>
                Technical Skills
              </h3>
              <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-xl shadow-black/10">
                <div className="space-y-4">
                  {[
                    { skill: 'React/Next.js', level: 76 },
                    { skill: 'Node.js', level: 69 },
                    { skill: 'Python', level: 70 },
                    { skill: 'TypeScript', level: 52 },
                    { skill: 'AWS/Docker', level: 55 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{item.skill}</span>
                        <span className="text-blue-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;