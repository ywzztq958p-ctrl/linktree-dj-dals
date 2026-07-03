import React from 'react';

export const FleurDeLysIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
  >
    {/* Highly precise and authentic traditional Quebec fleur-de-lys shape */}
    <path d="M50 3c-4.2 21.3-12.7 33-14.7 44.8C33 60.5 41 64 50 64s17-3.5 14.7-16.2C62.7 36 54.2 24.3 50 3zm-17.5 54c-11 0-19.1 7.2-19.1 16.2 0 7.2 6.1 11.8 13.9 11.8 11.4 0 20.3-11.8 21.9-25.2-7.5 0-12.8-1.5-16.7-2.8zm35 0c-3.9 1.3-9.2 2.8-16.7 2.8 1.6 13.4 10.5 25.2 21.9 25.2 7.8 0 13.9-4.6 13.9-11.8 0-9-8.1-16.2-19.1-16.2zm-20 10.3h25v5.2H47.5zm2.5 7.8c-3.4 6-6.4 11.8-6.4 13.1 0 1.2 2.8 2.8 6.4 2.8s6.4-1.6 6.4-2.8c0-1.3-3-7.1-6.4-13.1z" />
  </svg>
);

export default function BackgroundPattern() {
  // Generate random positions for subtle floating background icons
  const floaters = [
    { top: '10%', left: '15%', size: 'w-16 h-16', delay: '0s', duration: '25s' },
    { top: '25%', left: '80%', size: 'w-24 h-24', delay: '-5s', duration: '30s' },
    { top: '55%', left: '5%', size: 'w-20 h-20', delay: '-12s', duration: '28s' },
    { top: '75%', left: '85%', size: 'w-16 h-16', delay: '-8s', duration: '22s' },
    { top: '90%', left: '20%', size: 'w-28 h-28', delay: '-15s', duration: '35s' },
  ];

  // Nocturnal glowing blue light particles moving slowly
  const particles = [
    { top: '12%', left: '8%', size: '6px', delay: '0s', duration: '22s', x: '35px', y: '-120px' },
    { top: '28%', left: '78%', size: '8px', delay: '-4s', duration: '28s', x: '-40px', y: '-160px' },
    { top: '42%', left: '15%', size: '5px', delay: '-9s', duration: '19s', x: '45px', y: '-100px' },
    { top: '58%', left: '88%', size: '10px', delay: '-2s', duration: '35s', x: '-50px', y: '-220px' },
    { top: '68%', left: '38%', size: '6px', delay: '-14s', duration: '25s', x: '55px', y: '-130px' },
    { top: '82%', left: '12%', size: '9px', delay: '-6s', duration: '26s', x: '40px', y: '-180px' },
    { top: '18%', left: '48%', size: '7px', delay: '-16s', duration: '31s', x: '-35px', y: '-150px' },
    { top: '48%', left: '58%', size: '8px', delay: '-1s', duration: '23s', x: '30px', y: '-140px' },
    { top: '78%', left: '72%', size: '6px', delay: '-11s', duration: '27s', x: '-25px', y: '-110px' },
    { top: '92%', left: '52%', size: '7px', delay: '-3s', duration: '29s', x: '50px', y: '-170px' },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-cyber-dark text-white select-none">
      {/* 1. Base Gradient Nocturnal Background */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,var(--color-deep-blue)_0%,var(--color-cyber-dark)_80%]" />

      {/* 2. Cyber Neon Blue Glow Orbs */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-electric-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-electric-blue/15 blur-[100px] pointer-events-none" />

      {/* 3. Subtle Repeating Grid of Fleur-de-lys Pattern (Watermark style) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-12 gap-y-16 p-8">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <FleurDeLysIcon className="w-12 h-12 text-electric-blue" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Floating Animated Fleur-de-lys Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floaters.map((f, i) => (
          <div
            key={i}
            className="absolute opacity-[0.03] text-electric-blue animate-float-fleur"
            style={{
              top: f.top,
              left: f.left,
              animationDelay: f.delay,
              animationDuration: f.duration,
            }}
          >
            <FleurDeLysIcon className={f.size} />
          </div>
        ))}
      </div>

      {/* 5. Nocturnal Glowing Blue Light Particles moving slowly */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="ambient-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              '--duration': p.duration,
              '--delay': p.delay,
              '--x-offset': p.x,
              '--y-offset': p.y,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* 6. Delicate scanlines or music grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
    </div>
  );
}
