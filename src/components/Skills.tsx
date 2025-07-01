import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      name: "Languages",
      icon: "💻",
      skills: [
        { name: "HTML", level: 90, color: "from-orange-500 to-red-500", icon: "🌐" },
        { name: "CSS", level: 85, color: "from-blue-500 to-cyan-500", icon: "🎨" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500", icon: "⚡" },
        { name: "Java", level: 60, color: "from-green-500 to-blue-500", icon: "☕" }
      ]
    },
    {
      name: "Frameworks",
      icon: "⚛️",
      skills: [
        { name: "React", level: 85, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
        { name: "Nest.js", level: 70, color: "from-green-500 to-emerald-500", icon: "🪺" },
        { name: "Bootstrap", level: 80, color: "from-purple-500 to-pink-500", icon: "🎯" },
        { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-teal-500", icon: "🎨" }
      ]
    },
    {
      name: "Dev Tools",
      icon: "🛠️",
      skills: [
        { name: "Vs Code", level: 70, color: "from-orange-500 to-red-600", icon: "💻" },
        { name: "Postman", level: 75, color: "from-green-500 to-emerald-600", icon: "📮" },
        { name: "Cursor", level: 75, color: "from-purple-500 to-indigo-600", icon: "🚀" },
        { name: "ChatGPT", level: 80, color: "from-blue-500 to-cyan-600", icon: "🤖" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 mt-12 relative overflow-hidden min-h-screen">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
        
        {/* Additional cool particles */}
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        
        {/* Floating tech symbols */}
        <div className="absolute top-16 right-16 text-2xl opacity-20 animate-float">⚛️</div>
        <div className="absolute bottom-24 left-24 text-2xl opacity-20 animate-float" style={{animationDelay: '1s'}}>💻</div>
        <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-float" style={{animationDelay: '2s'}}>🚀</div>
        <div className="absolute bottom-1/2 left-8 text-2xl opacity-20 animate-float" style={{animationDelay: '3s'}}>⚡</div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-white text-4xl lg:text-6xl font-['Orbitron'] font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Skills & Technologies
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg font-['Exo_2'] max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern web development
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.name} 
                className={`group transition-all duration-1000 delay-${categoryIndex * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-gray-800/60 group-hover:to-gray-700/60">
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{category.icon}</div>
                    <h2 className="text-2xl font-['Orbitron'] font-bold text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-105">
                      {category.name}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-xl group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300 group-hover/skill:animate-pulse">{skill.icon}</span>
                            <span className="text-gray-300 font-['Exo_2'] font-medium group-hover/skill:text-white transition-colors duration-300 group-hover/skill:font-semibold">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-cyan-400 font-['Orbitron'] text-sm font-bold bg-gray-800/50 px-3 py-1 rounded-full border border-cyan-500/30 group-hover/skill:bg-cyan-500/20 group-hover/skill:border-cyan-400 group-hover/skill:scale-110 transition-all duration-300">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative h-4 bg-gray-800/50 rounded-full overflow-hidden border border-gray-600/50 group-hover/skill:border-cyan-500/50 transition-all duration-300">
                          <div 
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-cyan-500/25 relative overflow-hidden`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${(categoryIndex * 0.3 + skillIndex * 0.1)}s`
                            }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                            
                            {/* Glowing particles */}
                            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced additional skills section */}
          <div className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-['Orbitron'] font-bold text-purple-400 mb-4">
                Additional Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Git", icon: "📚", color: "from-orange-500 to-red-500" },
                { name: "Jira", icon: "📋", color: "from-blue-500 to-cyan-500" },
                { name: "AWS", icon: "☁️", color: "from-yellow-500 to-orange-500" },
                { name: "MySql", icon: "🗄️", color: "from-green-500 to-emerald-500" },
                { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-500" },
                { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
                { name: "React Query", icon: "⚡", color: "from-gray-700 to-black" },
                { name: "Notion", icon: "📝", color: "from-pink-500 to-purple-500" },
                { name: "REST APIs", icon: "🌐", color: "from-green-500 to-blue-500" },
                { name: "GoogleAuth0", icon: "🔐", color: "from-red-500 to-pink-500" },
                { name: "NodeMailer", icon: "📧", color: "from-green-600 to-emerald-600" }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`group px-6 py-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-gray-300 font-['Exo_2'] font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-500 cursor-pointer transform hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    background: `linear-gradient(135deg, ${tech.color})`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 group-hover:animate-bounce">{tech.icon}</span>
                    <span className="group-hover:scale-105 transition-transform duration-300 font-semibold group-hover:font-bold">{tech.name}</span>
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

export default Skills; 