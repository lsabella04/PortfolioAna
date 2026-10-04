import React from 'react';
import type { Language, ProjectCase } from '../types';
import { translations, projectCasesData } from '../i18n/translations';
import { ArrowRight } from 'lucide-react';

interface ProjectSummariesRowProps {
  lang: Language;
  onOpenProjectDetail: (project: ProjectCase) => void;
}

export const ProjectSummariesRow: React.FC<ProjectSummariesRowProps> = ({
  lang,
  onOpenProjectDetail,
}) => {
  const t = translations[lang].summariesRow;
  const coaProject = projectCasesData[lang].find((p) => p.id === 'coa-dental')!;
  const nissanProject = projectCasesData[lang].find((p) => p.id === 'nissan')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* COA Summary Card */}
      <div
        onClick={() => onOpenProjectDetail(coaProject)}
        className="light-card light-card-hover p-6 sm:p-8 rounded-3xl bg-[#fafafa] border border-neutral-200 cursor-pointer flex flex-col justify-between group space-y-4"
      >
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-black group-hover:text-[#c93b8d] transition-colors">
            {t.coaTitle}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{t.coaDesc}</p>
        </div>

        <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-mono">+120% Patient Consultations</span>
          <button className="inline-flex items-center gap-1.5 text-[#c93b8d] font-bold group-hover:translate-x-1 transition-transform">
            <span>{t.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Nissan Summary Card */}
      <div
        onClick={() => onOpenProjectDetail(nissanProject)}
        className="light-card light-card-hover p-6 sm:p-8 rounded-3xl bg-[#fafafa] border border-neutral-200 cursor-pointer flex flex-col justify-between group space-y-4"
      >
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-black group-hover:text-[#c93b8d] transition-colors">
            {t.nissanTitle}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{t.nissanDesc}</p>
        </div>

        <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-mono">+850K Organic Views</span>
          <button className="inline-flex items-center gap-1.5 text-[#c93b8d] font-bold group-hover:translate-x-1 transition-transform">
            <span>{t.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
