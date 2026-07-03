import React from 'react';
import { FleurDeLysIcon } from './BackgroundPattern';
// @ts-ignore
import logoImg from '../assets/images/dj_dals_logo_1783120190912.jpg';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center px-4 pt-8 pb-6">
      {/* 1. Circular Avatar Frame with Breathing Neon Glow */}
      <div className="relative group mb-5">
        {/* Animated glowing rings behind avatar */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-electric-blue via-blue-500 to-indigo-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
        <div className="absolute -inset-2 rounded-full bg-electric-blue/20 blur-xl opacity-50 animate-bounce-slow" />
        
        {/* Main circular image container */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 bg-cyber-dark shadow-2xl flex items-center justify-center">
          <img
            src={logoImg}
            alt="DJ DALS Logo"
            className="w-full h-full object-cover select-none scale-105 group-hover:scale-110 transition duration-500 ease-out"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fail-safe if the image is missing or cannot load
              console.warn('DJ DALS Logo path failed to load, falling back to SVG generation');
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-4';
                fallback.innerHTML = `
                  <div class="text-electric-blue text-xs font-bold font-mono tracking-widest mb-1">DJ</div>
                  <div class="text-white text-2xl font-black font-sans tracking-tight">DALS</div>
                  <div class="text-slate-400 text-[9px] font-medium mt-1">QUEBEC</div>
                `;
                parent.appendChild(fallback);
              }
            }}
          />
        </div>

        {/* Small floating silver fleur-de-lys badge on the corner of avatar */}
        <div className="absolute bottom-1 right-1 bg-gradient-to-b from-slate-200 to-slate-400 text-slate-950 p-1 rounded-full border border-slate-500 shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-300">
          <FleurDeLysIcon className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* 2. DJ DALS Logo Typo (Futuristic yet readable) */}
      <div className="relative mb-2">
        <h1 className="text-4xl font-extrabold font-display tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 drop-shadow-[0_2px_10px_rgba(0,240,255,0.2)]">
          DJ DALS
        </h1>
        {/* Ambient neon under-dash */}
        <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-electric-blue to-transparent mt-1.5 shadow-[0_0_8px_var(--color-electric-blue)]" />
      </div>

      {/* 3. Subtitle / Label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-bold font-mono tracking-widest text-electric-blue uppercase">
          DJ / Producteur
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-ping" />
        <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-semibold">
          Disponible
        </span>
      </div>

      {/* 4. Presentation bio (court) */}
      <div className="max-w-md bg-white/[0.02] border border-white/[0.05] rounded-2xl px-5 py-4 backdrop-blur-md shadow-inner">
        <p className="text-sm text-slate-300 leading-relaxed font-sans">
          DJ DALS – DJ / Producer basé au Québec. Sets énergiques, productions originales et ambiance unique.
        </p>
      </div>
    </div>
  );
}
