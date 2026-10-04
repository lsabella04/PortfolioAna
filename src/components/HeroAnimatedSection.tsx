import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { ArrowDown } from 'lucide-react';

interface HeroAnimatedSectionProps {
  lang: Language;
}

export const HeroAnimatedSection: React.FC<HeroAnimatedSectionProps> = ({ lang }) => {
  const t = translations[lang].aboutBlock;

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const avatarSrc = '/assets/avatar/ANAK - PORTFOLIO ⭐ (1).png';

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between pt-16 sm:pt-20 pb-8 px-4 sm:px-8 overflow-hidden bg-white select-none">
      {/* Top Details Row (Role Title & Location) */}
      <div className="flex justify-between items-start max-w-[1400px] w-full mx-auto z-10 pt-2">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
            Freelance & Lead
          </span>
          <h3 className="text-sm sm:text-base font-bold text-neutral-900 max-w-xs leading-snug">
            {t.role}
          </h3>
        </div>

        <div className="hidden sm:block text-right">
          <span className="text-xs font-mono font-bold text-[#c93b8d] uppercase tracking-widest block">
            Portfolio 2026
          </span>
          <span className="text-xs text-neutral-500 font-medium block">
            {t.location}
          </span>
        </div>
      </div>

      {/* Main Center Area: Avatar and Animated Text vertically centered together */}
      <div className="relative w-full max-w-[1400px] mx-auto my-auto flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
        {/* Imposing Giant Animated Name Sliding Smoothly from Right to Center */}
        <div className="w-full text-center overflow-hidden z-10">
          <h1 className="hero-title-giant font-black font-display text-black uppercase tracking-tighter animate-hero-slide-in-right drop-shadow-[0_4px_20px_rgba(255,255,255,0.95)]">
            ANA HERNÁNDEZ
          </h1>
        </div>

        {/* Naked Avatar Image centered right over the text */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <img
            src={avatarSrc}
            alt="Ana Karen Hernández Méndez"
            className="w-52 sm:w-68 md:w-[340px] lg:w-[390px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] transition-transform hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom Row: Scroll Down Arrow Hint */}
      <div className="flex justify-end items-center max-w-[1400px] w-full mx-auto z-20 pt-4">
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-[#c93b8d] transition-colors group cursor-pointer"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-4 h-4 text-[#c93b8d] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
