import React from 'react';
import { Info, Sparkles, CalendarCheck } from 'lucide-react';

export default function BookingForm() {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-2 mb-4 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
        <h2 className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
          Booking & Événements
        </h2>
      </div>

      <div className="w-full glass-panel border border-white/[0.08] rounded-3xl p-5 relative overflow-hidden shadow-xl">
        {/* Decorative corner flash */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-electric-blue/10 to-transparent pointer-events-none" />

        <div className="text-center sm:text-left mb-4">
          <h3 className="text-base font-semibold text-white font-display flex items-center gap-2 justify-center sm:justify-start">
            <Sparkles className="w-4 h-4 text-electric-blue animate-pulse" />
            Réserver DJ DALS
          </h3>
          <p className="text-xs text-slate-400 font-sans mt-1">
            Pour événements, clubs, festivals ou collaborations.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Direct Official Website Link */}
          <a
            href="https://beatek-five.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-electric-blue text-white font-display font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Visiter le site de réservation BEA TEK EVENTS</span>
          </a>

          {/* Strict notice warning requirement beautifully presented */}
          <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-xl p-3 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-electric-blue mt-0.5 flex-shrink-0" />
            <p className="text-[11px] text-slate-300 leading-normal font-sans">
              Veuillez indiquer <strong className="text-electric-blue">"DJ DALS"</strong> dans votre demande de réservation pour faciliter le traitement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
