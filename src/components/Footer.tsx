import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 bg-gradient-to-t from-gray-900 to-gray-800 border-t border-gray-700/50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5">
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-cyan-400 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-purple-400 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-['Orbitron'] font-bold text-xl">A</span>
              </div>
              <span className="text-white font-['Orbitron'] font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Abhijeet Kumar
              </span>
            </div>
            <p className="text-gray-400 font-['Rubik'] text-base leading-relaxed mb-6 max-w-md">
              Crafting the future through innovative web development and cutting-edge AI solutions. 
              Transforming ideas into digital reality with precision and creativity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/abhijeet4004/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <span className="text-lg">💼</span>
              </a>
              <a 
                href="https://github.com/Abhijeetk4118"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <span className="text-lg">🐙</span>
              </a>
              <a 
                href="https://www.instagram.com/abhijeetk8629/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <span className="text-lg">📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Services', href: '#services' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-400 font-['Exo_2'] hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="mailto:abhijeetk452@gmail.com"
                className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">📧</span>
                </div>
                <span className="text-gray-400 font-['Rubik'] text-sm group-hover:text-cyan-400 transition-colors duration-300">abhijeetk452452@gmail.com</span>
              </a>
              <a 
                href="tel:+919636464118"
                className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                <span className="text-gray-400 font-['Rubik'] text-sm group-hover:text-purple-400 transition-colors duration-300">+91 6395998629</span>
              </a>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">🌍</span>
                </div>
                <span className="text-gray-400 font-['Rubik'] text-sm">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-['Rubik'] text-sm text-center md:text-left">
              © {currentYear} Abhijeet Kumar. All rights reserved. | Crafted with pure ❤️ and passion.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-400 font-['Exo_2'] text-sm">Built with</span>
              <div className="flex items-center space-x-1">
                <span className="text-cyan-400 font-['Orbitron'] font-bold text-sm">React</span>
                <span className="text-gray-400">•</span>
                <span className="text-purple-400 font-['Orbitron'] font-bold text-sm">Tailwind</span>
                <span className="text-gray-400">•</span>
                <span className="text-pink-400 font-['Orbitron'] font-bold text-sm">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 