import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Play, Tv } from 'lucide-react';

interface VideoBlockProps {
  lang: Language;
  onOpenVideoModal: (url: string, title: string) => void;
}

export const VideoBlock: React.FC<VideoBlockProps> = ({ lang, onOpenVideoModal }) => {
  const t = translations[lang].videoBlock;

  const videoData = {
    title: 'Nissan Insiders — Ep. 04: The Future of Performance',
    thumbnail: '/assets/nissan-insiders.jpg',
  };

  return (
    <div className="light-card light-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full bg-[#fafafa] border border-neutral-200">
      <div>
        {/* Title */}
        <div className="flex items-center gap-2 text-black font-extrabold text-lg border-b border-neutral-200 pb-3 mb-4">
          <Tv className="w-5 h-5 text-[#c93b8d]" />
          <h3>{t.title}</h3>
        </div>

        {/* Video Thumbnail */}
        <div
          onClick={() => onOpenVideoModal(videoData.thumbnail, videoData.title)}
          className="relative rounded-2xl overflow-hidden aspect-video border border-neutral-200 shadow-md cursor-pointer group my-2"
        >
          <img
            src={videoData.thumbnail}
            alt={videoData.title}
            className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300"
          />

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#faa1d4] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 ml-1 fill-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-bold text-black line-clamp-1">{t.subtitle}</h4>
          <p className="text-[11px] text-neutral-500 font-mono">Nissan Insiders Series</p>
        </div>

        <button
          onClick={() => onOpenVideoModal(videoData.thumbnail, videoData.title)}
          className="px-3.5 py-1.5 rounded-xl bg-pink-100 hover:bg-[#faa1d4] text-black text-xs font-bold transition-all border border-pink-200"
        >
          {t.watchNow}
        </button>
      </div>
    </div>
  );
};
