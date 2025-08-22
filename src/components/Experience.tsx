import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Agentic AI for Healthcare Hackathon", 
      company: "CMKL University",
      period: "31 July - 2 August 2025",
      location: "Bangkok, Thailand",
      description: "Creating healthcare solutions with our Intelligent Agentic AI",
      achievements: [
        "Developed a prototype for Agentic-AI patient management system",
        "Implemented AI-driven patient FAQ response system"
      ]
    },
    {
      title: "SWU Metaverse workshop and competition",
      company: "Srinakharinwirot University",
      period: "7 March - 8 March 2025", 
      location: "Bangkok, Thailand",
      description: "Hands-on workshop and competition to create a Srinakharinwirot University into metaverse",
      achievements: [
        "Designed and developed a virtual campus environment",
        "Workshop on Unity and Blender for 3D modeling"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Srinakharinwirot University",
      period: "2023 - present",
      gpa: "3.20"
    }
  ];

  const skills = [
    { skill: 'React/Next.js', level: 76 },
    { skill: 'Node.js', level: 69 },
    { skill: 'Python', level: 70 },
    { skill: 'TypeScript', level: 52 },
    { skill: 'AWS/Docker', level: 55 }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Experience
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-gray-600 max-w-2xl mx-auto">
            Experience and education journey that creates quality results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{exp.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-700">{exp.company}</span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
                <p className="font-['IBM_Plex_Mono'] text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="font-['IBM_Plex_Mono'] text-sm text-gray-600 flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="font-['IBM_Plex_Mono'] text-gray-700 mb-2">{edu.school}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">Technical Skills</h3>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="space-y-4">
                  {skills.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-['IBM_Plex_Mono'] text-gray-700 font-medium text-sm">{item.skill}</span>
                        <span className="text-gray-600 text-sm">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gray-600 h-1.5 rounded-full"
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