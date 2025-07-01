import React, { useEffect, useRef } from 'react';

// Number of stars
const STAR_COUNT = 180;

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const FuturisticBackground: React.FC = () => {
  // For twinkle animation, assign each star a random animation duration and delay
  const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
    const top = getRandom(0, 100);
    const left = getRandom(0, 100);
    const size = getRandom(1, 2.2);
    const duration = getRandom(1.5, 3.5); // seconds
    const delay = getRandom(0, 3); // seconds
    return (
      <div
        key={i}
        className="absolute star-twinkle"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 8px 2px #00eaff, 0 0 16px 4px #00eaff33',
          opacity: 0.85,
          animation: `starTwinkle ${duration}s infinite ease-in-out`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden" style={{ background: '#000' }}>
      {/* Neon Grid Overlay (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2, opacity: 0.12 }} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grid-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00eaff" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Vertical lines */}
        {Array.from({ length: 21 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={(i * 5).toString()}
            y1="0"
            x2={(i * 5).toString()}
            y2="100"
            stroke="url(#grid-glow)"
            strokeWidth="0.18"
            style={{ filter: 'drop-shadow(0 0 2px #00eaff)' }}
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: 21 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={(i * 5).toString()}
            x2="100"
            y2={(i * 5).toString()}
            stroke="url(#grid-glow)"
            strokeWidth="0.18"
            style={{ filter: 'drop-shadow(0 0 2px #00eaff)' }}
          />
        ))}
      </svg>

      {/* Animated Stars */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 3 }}>{stars}</div>
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FuturisticBackground; 