import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Award, Flame } from 'lucide-react';

interface MetricsBlockProps {
  lang: Language;
}

export const MetricsBlock: React.FC<MetricsBlockProps> = ({ lang }) => {
  const t = translations[lang].metricsBlock;

  return (
    <div className="flex flex-col gap-6 justify-between h-full w-full">
      {/* Top Stacked Card: +7 AÑOS DE EXPERIENCIA */}
      <div className="light-card light-card-hover p-6 sm:p-8 rounded-3xl bg-[#fafafa] border border-neutral-200 flex-1 flex flex-col justify-between group">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-2xl bg-pink-100 border border-pink-200 text-[#c93b8d] flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
            Proven Track Record
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-black tracking-tight group-hover:text-[#c93b8d] transition-colors">
            {t.card1Title}
          </h3>
          <p className="text-xs text-neutral-600 mt-1 leading-snug">
            {t.card1Subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Stacked Card: 800K+ ALCANCE ORGÁNICO EN TIKTOK */}
      <div className="light-card light-card-hover p-6 sm:p-8 rounded-3xl bg-[#fafafa] border border-neutral-200 flex-1 flex flex-col justify-between group">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-2xl bg-pink-100 border border-pink-200 text-[#c93b8d] flex items-center justify-center font-bold">
            <Flame className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
            Viral Performance
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-black tracking-tight group-hover:text-[#c93b8d] transition-colors">
            {t.card2Title}
          </h3>
          <p className="text-xs text-neutral-600 mt-1 leading-snug">
            {t.card2Subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
