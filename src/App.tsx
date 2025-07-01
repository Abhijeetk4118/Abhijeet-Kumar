import React from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';
import FuturisticBackground from './components/FuturisticBackground';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <FuturisticBackground />
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      <BottomNav />
      <ScrollTop />
    </div>
  );
}

export default App;
