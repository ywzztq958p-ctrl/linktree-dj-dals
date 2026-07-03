import React from 'react';
import { motion } from 'motion/react';
import BackgroundPattern, { FleurDeLysIcon } from './components/BackgroundPattern';
import ProfileHeader from './components/ProfileHeader';
import SocialLinks from './components/SocialLinks';
import BookingForm from './components/BookingForm';
import { Share2 } from 'lucide-react';

export default function App() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'DJ DALS - Linktree',
        text: 'Découvrez les réseaux officiels et coordonnées de booking de DJ DALS.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Lien de la page copié dans le presse-papiers !');
    }
  };

  return (
    <div id="dj-dals-root" className="min-h-screen w-full relative flex justify-center py-4 px-3 sm:py-12 select-none antialiased">
      {/* 1. Subtle, premium nocturnal fleur-de-lys background with ambient glows */}
      <BackgroundPattern />

      {/* 2. Centered Elegant Mobile Container */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg z-10 flex flex-col"
      >
        {/* Top Floating Accessory Bar (Share Button + Live Status) */}
        <div className="w-full flex items-center justify-between px-3 mb-4">
          {/* Quebec branding accent */}
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] rounded-full py-1.5 px-3 backdrop-blur-md">
            <FleurDeLysIcon className="w-3.5 h-3.5 text-electric-blue" />
            <span className="text-[10px] font-bold font-mono tracking-wider text-slate-300 uppercase">
              QC Artist
            </span>
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center justify-center p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-electric-blue/40 text-slate-300 hover:text-electric-blue transition-all backdrop-blur-md cursor-pointer active:scale-95"
            title="Partager la page"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Primary Glassmorphic Content Card */}
        <div className="w-full bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/[0.05] rounded-[32px] p-4 sm:p-6 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
          {/* Header Section: Avatar, Title, Presentation */}
          <ProfileHeader />

          {/* Social Links Network Block */}
          <SocialLinks />

          {/* Booking Request Form Block */}
          <BookingForm />
        </div>

        {/* Elegant Minimalist Footer */}
        <footer className="w-full text-center mt-12 mb-4 space-y-3 flex flex-col items-center">
          <div className="flex items-center gap-1.5 justify-center">
            <FleurDeLysIcon className="w-4 h-4 text-slate-600" />
            <div className="h-4 w-[1px] bg-slate-800" />
            <span className="text-[11px] font-bold font-mono tracking-widest text-slate-500 uppercase">
              BEA TEK EVENTS
            </span>
          </div>
          <p className="text-[10px] text-slate-600 font-mono tracking-wide">
            &copy; {new Date().getFullYear()} DJ DALS. Tous droits réservés.
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
