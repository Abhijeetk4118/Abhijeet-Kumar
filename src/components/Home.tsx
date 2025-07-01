import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Web Developer',
    'Front End Developer', 
    'Full Stack Web Developer',
    'Responsive Web Designer'
  ];

  const roleDescriptions = [
    'I build modern, high-performance websites that are visually appealing, user-friendly, and optimized for all devices.',
    'I specialize in crafting interactive, responsive, and accessible user interfaces using the latest front-end technologies.',
    'I develop robust web applications from front to back, seamlessly integrating user experience with powerful server-side logic and databases.',
    'I design and implement layouts that adapt beautifully to any screen size, ensuring a flawless experience on mobile, tablet, and desktop.'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;

    if (!isDeleting && currentText === currentRole) {
      setTimeout(() => setIsDeleting(true), 4000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentRole?.substring(0, currentText.length - 1) || '');
      } else {
        setCurrentText(currentRole?.substring(0, currentText.length + 1) || '');
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row justify-around items-center max-w-7xl mx-auto px-8 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="home-left flex items-center w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0 z-10">
        <div className="home-content text-center lg:text-left">
          <h6 className="font-['Orbitron'] text-cyan-400 text-lg lg:text-xl mb-4 tracking-wider">
            <span className="animate-pulse">⚡</span> Hello, It's me
          </h6>
          <h1 className="text-white text-4xl lg:text-6xl font-['Orbitron'] font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Abhijeet Kumar
          </h1>
          <h4 className="font-['Exo_2'] text-gray-300 text-xl lg:text-2xl mb-2 tracking-wide">
            <span className="text-cyan-400">And I'm a </span>
            <span className="text-purple-400 font-semibold min-w-[200px] inline-block">
              {currentText}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </h4>
          <div className="min-h-[60px] mb-6">
            <p className="text-cyan-200 font-['Rubik'] text-base lg:text-lg transition-all duration-500 ease-in-out">
              {roleDescriptions[currentRoleIndex]}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a 
              href="/Files/resume.pdf.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-futuristic text-white font-['Exo_2'] font-semibold"
            >
              📄 Download Resume
            </a>
            <a 
              className="btn-futuristic text-white font-['Exo_2'] font-semibold bg-gradient-to-r from-purple-500 to-pink-500"
              href="https://www.linkedin.com/in/abhijeet4004/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Let's Connect
            </a>
          </div>
        </div>
      </div>
      
      <div className="home-right flex justify-center items-center w-full lg:w-1/2 z-10">
        <div className="relative">
          <div className="circle group flex justify-center items-center w-56 h-56 lg:w-72 lg:h-72 rounded-full border-2 border-cyan-400 relative cursor-pointer transition-all duration-1000 hover:scale-105 aspect-square">
            <img 
              src="/Images/main.png" 
              alt="Abhijeet Kumar" 
              className="w-full h-full rounded-full object-cover transform scale-x-[-1] relative z-10 transition-transform duration-500 group-hover:scale-125"
            />
          </div>
          {/* Orbiting elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-purple-400 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Home; 