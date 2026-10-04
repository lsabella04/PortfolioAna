import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';

interface SectionSeparatorProps {
  lang: Language;
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({ lang }) => {
  const t = translations[lang].separator;

  return (
    <div id="portfolio" className="w-full py-10 my-4 max-w-[1400px] mx-auto">
      {/* Left-Aligned Tall Uppercase Section Title with Architectural Horizontal Lines & Pink Accent Indicator */}
      <div className="flex items-center gap-4 sm:gap-6 w-full mb-2">
        <div className="w-2.5 sm:w-3.5 h-8 sm:h-12 bg-[#faa1d4] rounded-sm shrink-0" />
        <h2 className="section-title-stretched text-4xl sm:text-6xl lg:text-7xl text-black shrink-0">
          {t.title}
        </h2>
        <div className="flex-1 h-[2px] bg-black" />
        <div className="w-8 sm:w-16 h-[2px] bg-[#faa1d4]" />
      </div>
      <p className="text-xs sm:text-sm text-neutral-600 max-w-xl text-left font-medium">
        {t.subtitle}
      </p>
    </div>
  );
};
