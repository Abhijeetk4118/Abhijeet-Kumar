import React, { useEffect, useState } from 'react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/Files/resume.pdf.pdf', '_blank');
  };

  const experiences = [
    {
      id: 1,
      jobTitle: "Full Stack Developer",
      company: "Syaara",
      duration: "Jan 2025 - Present",
      location: "Remote",
      type: "Intern",
      description: "Leading development of modern web applications using cutting-edge technologies.",
      achievements: [
        "Developed and maintained 5+ full-stack applications using React, Nest.js, and PostgreSQL",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["React", "Nest.js", "PostgreSQL", "AWS", "Jira"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      jobTitle: "Associate Software Developer",
      company: "Synergy Universal",
      duration: "May 2024 - Sept 2024",
      location: "Remote",
      type: "Contract",
      description: "Specialized in creating responsive and accessible user interfaces.",
      achievements: [
        "Built responsive web applications with 99.9% accessibility score",
        "Optimized application performance resulting in 40% faster load times",
      ],
      technologies: ["Java", "JavaScript", "HTML", "CSS", "MySQL", "Jira"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      jobTitle: "Full Stack Developer",
      company: "MilestoneOs",
      duration: "May 2023 - July 2023",
      location: "Remote",
      type: "Trainee",
      description: "Kickstarted career in a fast-paced startup environment.",
      achievements: [
        "Built a web application using React, HTML, CSS,",

      ],
      technologies: ["JavaScript", "React", "Git",],
      color: "from-green-500 to-emerald-600"
    },
  ];

  return (
    <section id="experience" className="py-20 mt-12 relative overflow-hidden min-h-screen">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        
        {/* Floating experience symbols */}
        <div className="absolute top-16 right-16 text-2xl opacity-20 animate-float">💼</div>
        <div className="absolute bottom-24 left-24 text-2xl opacity-20 animate-float" style={{animationDelay: '1s'}}>🚀</div>
        <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-float" style={{animationDelay: '2s'}}>⭐</div>
        <div className="absolute bottom-1/2 left-8 text-2xl opacity-20 animate-float" style={{animationDelay: '3s'}}>🎯</div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-white text-4xl lg:text-6xl font-['Orbitron'] font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Professional Experience
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg font-['Exo_2'] max-w-2xl mx-auto">
            My journey through the world of software development
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full border-4 border-gray-900 shadow-lg z-10 group-hover:scale-125 transition-all duration-300`}>
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  </div>

                  {/* Experience Card */}
                  <div className={`group relative ${
                    index % 2 === 0 ? 'lg:pr-8 lg:mr-8' : 'lg:pl-8 lg:ml-8'
                  }`}>
                    <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                      index % 2 === 0 ? 'lg:mr-auto lg:max-w-lg' : 'lg:ml-auto lg:max-w-lg'
                    }`}>
                      
                      {/* Job Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-['Orbitron'] font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {experience.jobTitle}
                          </h3>
                          <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${experience.color} text-white`}>
                            {experience.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="text-xl font-['Exo_2'] font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                            {experience.company}
                          </h4>
                          <span className="text-gray-400 text-sm">📍 {experience.location}</span>
                        </div>
                        
                        <p className="text-cyan-400 font-['Orbitron'] text-sm font-bold">
                          {experience.duration}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 font-['Exo_2'] leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-white font-['Orbitron'] font-bold mb-3 text-lg">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 text-gray-300 font-['Exo_2']">
                              <span className="text-blue-400 mt-1">▸</span>
                              <span className="group-hover:text-gray-200 transition-colors duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-white font-['Orbitron'] font-bold mb-3 text-lg">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-gray-300 text-sm font-['Exo_2'] font-medium hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 cursor-pointer group-hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Connection Line */}
                    <div className={`absolute top-8 w-8 h-1 bg-gradient-to-r ${experience.color} ${
                      index % 2 === 0 ? 'right-0 lg:right-8' : 'left-0 lg:left-8'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 