import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Mail, MapPin } from 'lucide-react';

interface AboutMeBlockProps {
  lang: Language;
}

export const AboutMeBlock: React.FC<AboutMeBlockProps> = ({ lang }) => {
  const t = translations[lang].aboutBlock;

  return (
    <section id="about" className="w-full py-10 space-y-8 max-w-[1400px] mx-auto">
      {/* Left-Aligned Tall Uppercase Section Title with Architectural Horizontal Lines & Pink Accent Indicator */}
      <div className="flex items-center gap-4 sm:gap-6 w-full my-4">
        <div className="w-2.5 sm:w-3.5 h-8 sm:h-12 bg-[#faa1d4] rounded-sm shrink-0" />
        <h2 className="section-title-stretched text-4xl sm:text-6xl lg:text-7xl text-black shrink-0">
          {t.title}
        </h2>
        <div className="flex-1 h-[2px] bg-black" />
        <div className="w-8 sm:w-16 h-[2px] bg-[#faa1d4]" />
      </div>

      {/* Clean Text directly on White Background (No Card Wrapper) */}
      <div className="space-y-6 max-w-4xl text-left pt-2">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-black tracking-tight">
            {t.name}
          </h3>
          <p className="text-sm sm:text-base font-bold text-[#c93b8d] mt-1 uppercase tracking-wider font-mono">
            {t.role}
          </p>
        </div>

        <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
          {t.bio}
        </p>

        {/* Clean Info Items */}
        <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2 text-neutral-700">
            <MapPin className="w-4 h-4 text-[#c93b8d] shrink-0" />
            <span>{t.location}</span>
          </div>

          <a
            href="mailto:anakarheme@gmail.com"
            className="flex items-center gap-2 text-[#c93b8d] font-extrabold hover:underline"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>{t.emailBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
