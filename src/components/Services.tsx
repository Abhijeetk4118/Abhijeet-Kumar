import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: "⚛️",
      title: "Frontend Development",
      subtitle: "Crafting Beautiful User Interfaces",
      description: "Building stunning, interactive user interfaces that captivate users and provide seamless experiences. Specializing in modern React applications with TypeScript and advanced CSS frameworks. Creating pixel-perfect designs that work flawlessly across all devices and browsers. Implementing smooth animations and micro-interactions that enhance user engagement.",
      features: [
        "React & Next.js Applications",
        "TypeScript for Type Safety",
        "Tailwind CSS & Bootstrap",
        "Responsive Design Expert",
        "Modern UI/UX Implementation"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-500/10 to-blue-600/10",
      stats: { projects: "50+", satisfaction: "99%", speed: "2x Faster" }
    },
    {
      id: 2,
      icon: "🪺",
      title: "Backend Developer",
      subtitle: "Building Robust Server Solutions",
      description: "Developing powerful backend systems and APIs that handle complex business logic and data management. Creating scalable server architectures using Node.js and Nest.js frameworks. Implementing database design and optimization for high-performance applications. Building RESTful APIs and real-time communication systems.",
      features: [
        "Node.js & Nest.js Development",
        "Database Design & Optimization",
        "RESTful API Development",
        "PostgreSQL & MongoDB",
        "Server Architecture Design"
      ],
      technologies: ["Nest.js", "PostgreSQL", "MongoDB", "REST APIs", "Node.js"],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/10 to-pink-600/10",
      stats: { projects: "30+", uptime: "99.9%", performance: "3x Better" }
    },
    {
      id: 3,
      icon: "🌐",
      title: "Full Stack Web Developer",
      subtitle: "End-to-End Web Solutions",
      description: "Delivering complete web applications from frontend to backend with seamless integration. Building full-stack applications using React, Node.js, and modern databases. Implementing user authentication, payment systems, and third-party integrations. Deploying applications with CI/CD pipelines and cloud infrastructure.",
      features: [
        "Complete Web Application Development",
        "Frontend & Backend Integration",
        "User Authentication Systems",
        "Payment Gateway Integration",
        "Deployment & DevOps"
      ],
      technologies: ["React", "Nest.js", "PostgreSQL", "JavaScript", "Java"],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/10 to-emerald-600/10",
      stats: { projects: "25+", clients: "100%", delivery: "On Time" }
    },
    {
      id: 4,
      icon: "📱",
      title: "Responsive Web Design",
      subtitle: "Mobile-First Design Approach",
      description: "Creating websites that look and function perfectly on all devices and screen sizes. Implementing mobile-first design principles with CSS Grid and Flexbox layouts. Optimizing user experience across desktop, tablet, and mobile devices. Ensuring fast loading times and smooth interactions on all platforms.",
      features: [
        "Mobile-First Design Strategy",
        "CSS Grid & Flexbox Layouts",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "Touch-Friendly Interfaces"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/10 to-red-600/10",
      stats: { speed: "5x Faster", loadTime: "<1s", score: "100/100" }
    },
    {
      id: 5,
      icon: "🔒",
      title: "Security Implementation",
      subtitle: "Enterprise-Grade Protection",
      description: "Implementing comprehensive security measures to protect applications and user data from threats. Setting up secure authentication systems with JWT tokens and OAuth protocols. Implementing data encryption, input validation, and protection against common vulnerabilities. Conducting security audits and penetration testing.",
      features: [
        "JWT & OAuth Authentication",
        "Data Encryption & Hashing",
        "SQL Injection Prevention",
        "XSS & CSRF Protection",
        "Security Audits & Testing"
      ],
      technologies: ["JWT", "bcrypt", "Helmet.js", "Rate Limiting", "HTTPS"],
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-indigo-500/10 to-purple-600/10",
      stats: { security: "100%", breaches: "0", compliance: "GDPR" }
    },
    {
      id: 6,
      icon: "🤖",
      title: "AI Implementation",
      subtitle: "Intelligent Application Features",
      description: "Integrating artificial intelligence and machine learning capabilities into web applications. Implementing ChatGPT and OpenAI APIs for intelligent chat systems and content generation. Building AI-powered features like smart recommendations and automated responses. Creating intelligent automation workflows and data analysis tools.",
      features: [
        "OpenAI & ChatGPT Integration",
        "AI-Powered Chat Systems",
        "Smart Content Generation",
        "Intelligent Automation",
        "Machine Learning Features"
      ],
      technologies: ["ChatGPT", "OpenAI", "API Integration", "JavaScript", "Python"],
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-500/10 to-rose-600/10",
      stats: { accuracy: "95%", efficiency: "10x", innovation: "Cutting-Edge" }
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="text-center text-white text-3xl lg:text-5xl font-['Orbitron'] font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Services
        </h1>
        
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-400 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-['Orbitron'] font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 font-['Rubik'] text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
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

export default Services; 