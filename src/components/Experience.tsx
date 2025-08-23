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
    { skill: 'React.js', level: 76 },
    { skill: 'Node.js', level: 71 },
    { skill: 'Python', level: 66 },
    { skill: 'UX & UI', level: 82 },
    { skill: 'Next.js', level: 64 }
  ];

  const certificate = [
    {
      title: "Essential of SQL for Everyone", 
      description: "Free SQL online course from Born to Dev",
      image: "/assets/images/essential-sql-for-everyone.webp",
      expore: "https://drive.google.com/file/d/10Zo9KI7mMP1hILYjjaIDeQu3QL_qGS_s/view?usp=drive_link"
    },
    {
      title: "Certificate CEFR B2", 
      description: "EF-SET an online English proficiency test has been developed over a decade.",
      image: "/assets/images/ef-set-certificate.jpg",
      expore: "https://www.efset.org/"
    },
    {
      title: "SWU Metaverse", 
      description: "Hand-on workshop and competition to create a Srinakharinwirot University into metaverse",
      image: "/assets/images/swu-mataverse.jpg",
      expore: "https://drive.google.com/file/d/1OFU8bozyLK2NEJFO4hHiwUBum0ZnLCtH/view?usp=drive_link"
    },
    {
      title: "Agentic AI for Healthcare Hackathon", 
      description: "Creating healthcare solutions with our Intelligent Agentic AI",
      image: "/assets/images/cmkl-hackathon.png",
      expore: "https://drive.google.com/drive/folders/1xB2BeORyNaL1qv1ipytlDN6Hdp_J9LEf?usp=sharing"
    }
  ];
  
  // Duplicate Certificate array to make the marquee long enough
  const MARQUEE_REPEAT = 4; // Adjust the repeat count for desired width
  const marqueeCertificates = Array(MARQUEE_REPEAT)
    .fill(certificate)
    .flat();

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light bg-gradient-to-t from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-gray-600 max-w-2xl mx-auto">
            Experience and education journey that creates quality results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6">
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
                <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6">
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
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="space-y-4">
                  {skills.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-['IBM_Plex_Mono'] text-gray-700 font-medium text-sm">{item.skill}</span>
                        <span className="text-gray-600 text-sm">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-1.5 rounded-full"
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

      {/* Certificate Marquee */}
      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 flex flex-col items-center mt-16">
        <h3 className="text-xl font-medium text-gray-900 mb-6">Certificate</h3>
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeCertificates.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[220px] sm:min-w-[320px] max-w-xs border border-gray-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h4>
                  <p className="font-['IBM_Plex_Mono'] text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <a
                    href={project.expore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    Show more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;