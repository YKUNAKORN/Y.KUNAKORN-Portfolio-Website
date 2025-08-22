import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development", 
      description: "Working with both Frontend and Backend using cutting-edge technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing beautiful and user-friendly interfaces"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Optimizing website performance for speed and stability"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Solving complex problems with creative thinking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A Full Stack Developer passionate about website development and design. 
            Skilled in React.js, JavaScript, and Python, with a focus on creating 
            modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed font-['IBM_Plex_Mono']">
                <p>
                  I'm a developer with years of experience creating web applications and systems 
                  that truly serve users. With a passion for technology and design, 
                  I'm committed to developing high-quality work and creating great user experiences.
                </p>
                <p>
                  I believe good technology should be easy to use, beautiful, and solve real problems. 
                  With experience working on diverse projects, 
                  I'm ready to help turn your ideas into reality.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Javascript', 'TypeScript', 'React.js', 'Node.js', 'Next.js', 'Python', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{skill.title}</h4>
                    <p className="font-['IBM_Plex_Mono'] text-gray-600 text-sm leading-relaxed">{skill.description}</p>
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