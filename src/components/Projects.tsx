import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Weather Assistant",
      description: "An intelligent weather application powered by AI that provides personalized weather insights and predictions using machine learning algorithms. Features real-time weather data, AI-powered forecasting, and personalized recommendations.",
      image: "/Images/weatherApp.png",
      github: "https://github.com/Abhijeetk4118/Weather-App",
      live: "https://abhijeetk4118.github.io/Weather-App/",
      tech: ["Html", "CSS", "Tailwind CSS", "JavaScript"],
      category: "frontend",
      status: "Live",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "VirtualR",
      description: "Empower your creativity and bring your VR app ideas to life with our intuitive development tools. turn your imagination into immersive reality!",
      image: "/Images/virtualR.png",
      github: "https://github.com/Abhijeetk4118/VirtualR",
      live: "virtual-r-wheat.vercel.app",
      tech: ["React", "HTML", "TailwindCSS", "TypeScript",],
      category: "frontend",
      status: "Live",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Syaara.com",
      description: "Connecting businesses and professionals through meaningful events and networking opportunities.",
      image: "/Images/syaara.png",
      github: "https://github.com/syaara1",
      live: "https://www.syaara.com",
      tech: ["React","TypeScript","TailwindCSS", "NestJs", "Postgres", "AI"],
      category: "AI/ML",
      status: "Live",
      difficulty: "Advanced"
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-400 to-emerald-500';
      case 'Intermediate': return 'from-yellow-400 to-orange-500';
      case 'Advanced': return 'from-red-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'from-green-400 to-emerald-500';
      case 'In Development': return 'from-yellow-400 to-orange-500';
      case 'Coming Soon': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden min-h-screen">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-center text-white text-4xl lg:text-6xl font-['Orbitron'] font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Featured Projects
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-12"></div>
        
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-transparent transition-all duration-700 transform hover:scale-105 hover:-translate-y-3"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced neon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    
                    {/* Status and Category Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-xs font-['Orbitron'] font-bold rounded-full shadow-lg`}>
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-['Orbitron'] font-bold rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white text-xs font-['Orbitron'] font-bold rounded-full shadow-lg`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-['Orbitron'] font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 font-['Rubik'] text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-cyan-400 font-['Exo_2'] font-semibold text-sm mb-3">🛠️ Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gray-800/80 border border-gray-600/50 text-cyan-400 text-xs font-['Exo_2'] rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 text-gray-300 text-sm font-['Exo_2'] font-medium rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-center group/btn"
                      >
                        <span className="group-hover/btn:scale-110 transition-transform duration-300">📁 GitHub</span>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-['Exo_2'] font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 text-center group/btn"
                      >
                        <span className="group-hover/btn:scale-110 transition-transform duration-300">🚀 Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
              <h3 className="text-2xl font-['Orbitron'] font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-400 font-['Rubik'] text-lg mb-6">
                Let's collaborate on your next project and bring your ideas to life!
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-['Exo_2'] font-bold rounded-xl hover:from-cyan-500 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                🚀 Start Your Project
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 