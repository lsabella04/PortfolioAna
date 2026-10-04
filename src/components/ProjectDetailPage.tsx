import React, { useEffect } from 'react';
import type { Language, ClientBrand, ProjectCase } from '../types';
import { projectDetailsData } from '../data/projectDetails';
import { translations } from '../i18n/translations';
import { NissanReelsCarousel, NissanDesktopCarousel, NissanInstagramCarousel } from './ProjectMediaCarousels';
import {
  ArrowLeft,
  PlusCircle,
  Video,
  PlayCircle,
  Share2,
  MessageSquare,
  FileSpreadsheet,
  FileText,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

interface ProjectDetailPageProps {
  lang: Language;
  brand?: ClientBrand | null;
  project?: ProjectCase | null;
  onBackToPortfolio: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  lang,
  brand,
  project,
  onBackToPortfolio,
}) => {
  // Determine active project ID (nissan, uber, thesoul, iuv, coa-dental, niebla-magazine)
  const projectId = brand?.id || project?.id || 'nissan';
  const info = projectDetailsData[lang][projectId] || projectDetailsData[lang]['nissan'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  // Minimalist Lucide icon based on mediaType
  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'reels':
        return <Video className="w-4 h-4 text-[#c93b8d]" />;
      case 'youtube':
        return <PlayCircle className="w-4 h-4 text-[#c93b8d]" />;
      case 'linkedin':
        return <Share2 className="w-4 h-4 text-[#c93b8d]" />;
      case 'twitter':
        return <MessageSquare className="w-4 h-4 text-[#c93b8d]" />;
      case 'infographics':
        return <FileSpreadsheet className="w-4 h-4 text-[#c93b8d]" />;
      case 'article':
        return <FileText className="w-4 h-4 text-[#c93b8d]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#c93b8d]" />;
    }
  };

  return (
    <article className="min-h-screen bg-white text-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-12 animate-fadeIn max-w-[1350px] mx-auto select-none font-sans">
      {/* Editorial Navigation Top Bar */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <button
          onClick={onBackToPortfolio}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-[#c93b8d] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#c93b8d] group-hover:-translate-x-1 transition-transform" />
          <span>{translations[lang].projectDetail.backBtn}</span>
        </button>

        <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
          {info.category}
        </span>
      </nav>

      {/* Editorial Header & Summary Split Layout (8-col / 4-col split on desktop) */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Title & Lead Quote */}
        <div className="lg:col-span-8 space-y-6">
          <span className="text-xs font-mono font-extrabold text-[#c93b8d] tracking-wider uppercase block">
            {info.brandName}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-black tracking-tight leading-[1.12]">
            {info.mainTitle}
          </h1>

          {/* Lead Quote / Introduction */}
          <div className="border-l-2 border-[#faa1d4] pl-4 sm:pl-6 py-1 my-4">
            <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed">
              {info.introduction}
            </p>
          </div>
        </div>

        {/* Right Column: Inline Metrics & Deliverables Sidebar Box */}
        {brand && ((brand.kpis && brand.kpis.length > 0) || (brand.deliverables && brand.deliverables.length > 0)) && (
          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-8 space-y-6">
            {/* Key Metrics */}
            {brand.kpis && brand.kpis.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#c93b8d]" />
                  <span>{lang === 'es' ? 'Métricas Destacadas' : 'Highlight Metrics'}</span>
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {brand.kpis.map((kpi, idx) => (
                    <div key={idx} className="space-y-0.5 p-3 rounded-xl bg-neutral-50/80 border border-neutral-200">
                      <span className="text-xl sm:text-2xl font-extrabold font-display text-[#c93b8d] block leading-tight">
                        {kpi.value}
                      </span>
                      <span className="text-[10px] text-neutral-600 font-mono font-bold uppercase tracking-wider block">
                        {kpi.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Deliverables */}
            {brand.deliverables && brand.deliverables.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                  {lang === 'es' ? 'Entregables Clave & Enfoque' : 'Key Deliverables & Focus'}
                </span>
                <div className="space-y-1.5">
                  {brand.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c93b8d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        )}
      </header>

      {/* Subsections Main List Section */}
      <main className="space-y-12 pt-6 border-t border-neutral-200">
        <div className="flex items-center gap-3 pb-2 border-b border-neutral-200">
          <span className="w-2 h-6 bg-[#faa1d4] rounded-xs" />
          <h2 className="text-sm font-mono font-bold uppercase text-neutral-500 tracking-wider">
            {lang === 'es' ? 'DESGLOSE DE SUBSECCIONES & CONTENIDO' : 'SUBSECTIONS & DELIVERABLES BREAKDOWN'}
          </h2>
        </div>

        {/* Subsection Rows */}
        <div className="divide-y divide-neutral-200 space-y-12">
          {info.subsections.map((sub) => {
            const isReelsSection = sub.title.toUpperCase().includes('REELS') || sub.mediaType === 'reels';
            const isVideoLargoSection = sub.title.toUpperCase().includes('VÍDEO LARGO') || sub.title.toUpperCase().includes('LONG VIDEO') || sub.mediaType === 'youtube';
            const isCarruselesSection = sub.title.toUpperCase().includes('CARRUSELES') || sub.title.toUpperCase().includes('IMÁGENES') || sub.title.toUpperCase().includes('CAROUSELS') || sub.title.toUpperCase().includes('IMAGES');

            return (
              <section
                key={sub.letter}
                className="py-8 first:pt-4 last:pb-0 space-y-6"
              >
                {/* Section Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#c93b8d] font-mono text-xs font-black flex items-center justify-center shrink-0 shadow-xs">
                      {sub.letter}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-black tracking-tight leading-snug uppercase">
                      {sub.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal pl-0 sm:pl-10 max-w-4xl whitespace-pre-line">
                    {sub.description}
                  </p>
                </div>

                {/* Sub-content Display: Dedicated Carousels for REELS, VÍDEO LARGO & CARRUSELES/IMÁGENES */}
                {isReelsSection && projectId === 'nissan' ? (
                  <div className="pt-2">
                    <NissanReelsCarousel lang={lang} />
                  </div>
                ) : isVideoLargoSection && projectId === 'nissan' ? (
                  <div className="pt-2">
                    <NissanDesktopCarousel />
                  </div>
                ) : isCarruselesSection && projectId === 'nissan' ? (
                  <div className="pt-2">
                    <NissanInstagramCarousel lang={lang} />
                  </div>
                ) : (
                  /* Standard Media Card Placeholder */
                  <div className="pl-0 sm:pl-10 pt-2">
                    <div className="p-4 sm:p-5 rounded-2xl border border-dashed border-neutral-300 hover:border-[#faa1d4] bg-neutral-50/60 transition-all flex flex-col justify-between space-y-3 max-w-xl group">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#c93b8d] shadow-2xs">
                            {getMediaIcon(sub.mediaType)}
                          </div>
                          <span className="text-xs font-bold text-black font-heading uppercase">
                            {lang === 'es' ? 'APARTADO MULTIMEDIA RESERVADO' : 'RESERVED MEDIA SPACE'}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono font-bold text-neutral-500 bg-white px-2.5 py-1 rounded-md border border-neutral-200 uppercase">
                          {sub.formatBadge}
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-500 text-[11px] font-mono font-bold group-hover:text-[#c93b8d] group-hover:border-pink-200 transition-colors">
                        <PlusCircle className="w-3.5 h-3.5 text-[#c93b8d]" />
                        <span>{lang === 'es' ? 'Espacio listo para contenido' : 'Ready for content'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </article>
  );
};
