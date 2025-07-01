import React from 'react';

const timeline = [
  {
    title: 'B.Tech Graduate',
    org: 'Roorkee institute of Technology',
    date: '2018 - 2022',
    details: ['Completed Bachelor of Technology in Artificial Intelligence'],
    color: 'bg-cyan-400',
    icon: '🎓'
  },
  {
    title: '1+ Years of Web Development Experience',
    org: 'Intern, Full Time',
    date: '2023 - Present',
    details: ['Developed and maintained various web applications'],
    color: 'bg-purple-400',
    icon: '💻'
  },
  {
    title: 'AI/ML Integration',
    org: 'Online Practice',
    date: '2022 - Present',
    details: ['Integrated AI like as ChatGPT, Gemini, Cursor, etc into web applications'],
    color: 'bg-pink-400',
    icon: '🤖'
  },
  {
    title: 'Future Technology Enthusiast',
    org: 'Online Learning',
    date: '2024 - Present',
    details: ['Exploring emerging technologies like AI, frontend frameworks, etc'],
    color: 'bg-blue-400',
    icon: '🚀'
  },
];

const cardData = [
  {
    title: 'Full-Stack Developer',
    img: '/Images/fullstack.png',
  },
  {
    title: 'Frontend Developer',
    img: '/Images/frontend.png',
  },
  {
    title: 'Backend Developer',
    img: '/Images/backend.png',
  },
  {
    title: 'Ui UX Designer',
    img: '/Images/uiux.png',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="pt-10 pb-20 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 212, 255, 0.10) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl lg:text-5xl font-['Orbitron'] font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
          About Me
        </h1>
        <p className="text-gray-200 font-['Rubik'] text-lg lg:text-xl leading-relaxed mb-12 text-center max-w-2xl">
          Creative and detail-oriented front-end developer with a passion for building visually stunning, user-friendly web interfaces. I transform ideas into interactive digital experiences using modern technologies, ensuring every project is fast, responsive, and accessible.
        </p>

        {/* Vertical Timeline/Progress Bar */}
        <div className="flex w-full justify-center">
          <div className="relative flex flex-col items-start w-full">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-[550px] w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-400 opacity-60 rounded-full"></div>
            {/* Timeline items */}
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-start mb-10 last:mb-0 w-full">
                <span className={`w-8 h-8 flex items-center justify-center rounded-full ${item.color} shadow-md shadow-white/20 animate-pulse z-10 text-xl ml-0`} style={{ marginLeft: '8px' }}>{item.icon}</span>
                <div className="ml-8 flex flex-col items-start text-left w-full max-w-xl">
                  <div className="font-['Exo_2'] text-lg lg:text-xl text-cyan-200 font-semibold mb-1">{item.title}</div>
                  {item.org && <div className="text-sm text-purple-300 mb-1">{item.org}</div>}
                  {item.date && <div className="text-xs text-gray-400 mb-2">{item.date}</div>}
                  <ul className="list-disc ml-5 text-gray-300 text-sm lg:text-base space-y-1">
                    {item.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic Cards Row - now matches Hero section width */}
      <div className="w-full mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="p-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 w-full aspect-square h-auto group transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-cyan-400/40 relative overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center rounded-3xl bg-[#18182a] w-full h-full p-10 shadow-lg relative z-10">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-400/10 z-0 rounded-3xl" />
                  <img src={card.img} alt={card.title} className="w-24 h-24 mb-8 object-contain z-10" />
                  <h3 className="text-white font-bold text-2xl text-center font-['Orbitron'] z-10 tracking-wide leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 