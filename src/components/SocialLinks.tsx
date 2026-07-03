import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { SocialLink } from '../types';

// Let's create beautiful custom SVGs for each major platform for premium brand representation
const BRAND_ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  tiktok: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.5 3.02 1.25 4.34.82.78 1.84 1.34 2.94 1.62.01 1.35-.01 2.69-.01 4.04-1.09-.01-2.17-.32-3.13-.88-.41-.24-.78-.55-1.11-.9-.02 3.12-.01 6.25-.02 9.37-.02.94-.22 1.89-.63 2.74-.75 1.57-2.22 2.76-3.95 3.17-1.42.34-2.92.21-4.26-.39-1.89-.83-3.23-2.62-3.53-4.66-.41-2.83 1.45-5.59 4.24-6.28.1-.03.21-.05.31-.08v4.11c-.51.13-.99.39-1.37.76-.71.7-1 1.74-.75 2.71.24.97 1 1.76 1.97 2.03.96.26 2 .02 2.75-.62.61-.53.94-1.32.93-2.12v-17.1z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  soundcloud: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.56 12.78c0-.52.06-1 .19-1.46L11 11.52v5.27l.75-.2c-.13-.44-.19-.92-.19-1.41v-2.4zm-1.87.52c0-.36.03-.7.1-1.02L9 12.38v4.06l.79-.1c-.07-.3-.1-.63-.1-1.02V13.3zm-1.88.3c0-.2.01-.39.05-.58L7 13.1v3.13l.81-.07c-.04-.17-.06-.35-.06-.56v-1zm-1.87.2c0-.07 0-.15.02-.22L4.5 13.6v2.24l.94-.03c-.02-.07-.02-.12-.02-.2v-1.15zM2.62 14.5c0-.1.02-.2.07-.29L2 14.28v1.36l.69-.09c-.05-.08-.07-.17-.07-.27v-.78zm13.31-4.88c-.34 0-.66.08-.96.22l-.16.08V16.5l.38-.05c2.3-.32 3.81-1.74 3.81-3.6 0-1.84-1.39-3.23-3.07-3.23zm-3.75 1.7c0-.52.08-1.02.24-1.48L12.5 10.3v6.2l.38-.1c.16-.48.24-.98.24-1.5v-2.3zM21 12.55c0-.82-.36-1.55-.95-2.07l-.23-.19V16.5l.31-.05c.5-.12.87-.55.87-1.1v-2.8z" />
    </svg>
  ),
  spotify: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .007a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.49 17.31a.75.75 0 0 1-1.03.25c-2.83-1.73-6.39-2.12-10.59-1.16a.75.75 0 0 1-.34-1.46c4.6-1.05 8.52-.61 11.71 1.34a.75.75 0 0 1 .25 1.03zm1.47-3.26a.938.938 0 0 1-1.28.31c-3.24-1.99-8.18-2.57-12-1.41a.937.937 0 1 1-.54-1.8c4.37-1.32 9.81-.68 13.51 1.6a.937.937 0 0 1 .31 1.3zm.1-3.39c-3.88-2.3-10.3-2.52-14.04-1.39a1.125 1.125 0 0 1-1.32-.78 1.125 1.125 0 0 1 .78-1.32c4.29-1.3 11.41-1.04 15.9 1.63a1.125 1.125 0 1 1-1.14 1.95l-.18-.09z" />
    </svg>
  )
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'link-instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/dj__dals/',
    iconName: 'instagram',
    color: 'hover:border-[#E1306C] hover:text-[#E1306C]'
  },
  {
    id: 'link-facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61591411989839',
    iconName: 'facebook',
    color: 'hover:border-[#1877F2] hover:text-[#1877F2]'
  }
];

export default function SocialLinks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-2 mb-4 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
        <h2 className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
          Mes Réseaux Officiels
        </h2>
      </div>

      {/* Grid containing brand cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3"
      >
        {SOCIAL_LINKS.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-3 p-3.5 rounded-2xl glass-button text-slate-200 transition-all text-sm font-medium font-display ${link.color}`}
          >
            {/* Custom Brand Icon container */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {BRAND_ICONS[link.iconName] || <ExternalLink className="w-5 h-5" />}
            </div>

            {/* Label */}
            <span className="flex-grow truncate">{link.name}</span>

            {/* Micro Arrow */}
            <ExternalLink className="w-3.5 h-3.5 opacity-30 hover:opacity-100 flex-shrink-0" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
