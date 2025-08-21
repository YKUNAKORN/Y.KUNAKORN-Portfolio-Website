import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
  topics: string[];
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/YKUNAKORN/repos?sort=updated&per_page=12');
        const data = await response.json();
        setRepositories(data.filter((repo: Repository) => !repo.name.includes('.github')));
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

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
  }, [repositories]);

  const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#007396',
      'C++': '#00599c',
      HTML: '#e34f26',
      CSS: '#1572b6',
      React: '#61dafb',
      Vue: '#4fc08d',
      PHP: '#777bb4',
      Go: '#00add8',
      Rust: '#000000',
      Swift: '#fa7343',
      Kotlin: '#7f52ff'
    };
    return colors[language] || '#6b7280';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Featured projects (mock data for showcase)
  const featuredProjects = [
    {
      title: "MyFavFood", 
      description: "Backend management restaurant system that help employee can do everything in one stop service OPS",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Node.js", "MySQL"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/YKUNAKORN/MyFavFood-Project"
    },
    {
      title: "CareFeine App", 
      description: "A mobile app for managing litmit your caffeine intake and track your health for a day",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Fultter", "Figma",],
      liveUrl: "https://task-manager-demo.com",
      githubUrl: "https://github.com/YKUNAKORN/CareFeine"
    },
    {
      title: "Do-Covid", 
      description: "The website that report Covid-19 situation in Thailand with real-time data and statistics",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Javascript", "FastAPI"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/YKUNAKORN/Do-Covid-2021"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up text-center mb-16 opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-l text-white/70 max-w-3xl mx-auto">
            Project that showcase development capabilities and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="fade-in-up opacity-0 mb-20" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center"> 
            <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-4"></div>
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="fade-in-up opacity-0 group bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/5"
                style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="font-['IBM_Plex_Mono'] text-white/70 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs font-medium text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl text-white text-sm font-medium rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div className="fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center"> 
            <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-4"></div>
            GitHub Repositories
          </h3>
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-white/20 rounded w-full mb-2"></div>
                  <div className="h-3 bg-white/20 rounded w-2/3 mb-4"></div>
                  <div className="flex space-x-4">
                    <div className="h-3 bg-white/20 rounded w-16"></div>
                    <div className="h-3 bg-white/20 rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.slice(0, 9).map((repo, index) => (
                <div
                  key={repo.id}
                  className="fade-in-up opacity-0 group bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/5"
                  style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 truncate pr-2">
                      {repo.name}
                    </h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {repo.description && (
                    <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>
                  )}

                  <div className="flex items-center space-x-4 mb-4 text-xs text-white/50">
                    {repo.language && (
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></div>
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {repo.forks_count}
                    </div>
                  </div>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center text-xs text-white/40">
                    <span>Updated {formatDate(repo.updated_at)}</span>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="fade-in-up opacity-0 text-center mt-12" style={{ animationDelay: '1.5s' }}>
          <a
            href="https://github.com/YKUNAKORN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;