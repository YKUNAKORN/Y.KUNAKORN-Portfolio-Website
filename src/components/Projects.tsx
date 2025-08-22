import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/YKUNAKORN/repos?sort=updated&per_page=9');
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
      Go: '#00add8'
    };
    return colors[language] || '#6b7280';
  };

  // Featured projects
  const featuredProjects = [
    {
      title: "MyFavFood", 
      description: "Backend management restaurant system that helps employees do everything in one stop service",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Node.js", "MySQL"],
      githubUrl: "https://github.com/YKUNAKORN/MyFavFood-Project"
    },
    {
      title: "CareFeine App", 
      description: "A mobile app for managing limit your caffeine intake and track your health",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Figma"],
      githubUrl: "https://github.com/YKUNAKORN/CareFeine"
    },
    {
      title: "Do-Covid", 
      description: "The website that reports Covid-19 situation in Thailand with real-time data",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Javascript", "FastAPI"],
      githubUrl: "https://github.com/YKUNAKORN/Do-Covid-2021"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            My Projects
          </h2>
          <p className="font-['IBM_Plex_Mono'] text-gray-600 max-w-2xl mx-auto">
            Projects that showcase development capabilities and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h4>
                  <p className="font-['IBM_Plex_Mono'] text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-8">GitHub Repositories</h3>
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex space-x-4">
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.slice(0, 6).map((repo, index) => (
                <div key={repo.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium text-gray-900 truncate pr-2">{repo.name}</h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {repo.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{repo.description}</p>
                  )}

                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
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
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/YKUNAKORN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;