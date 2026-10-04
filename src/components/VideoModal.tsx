import React from 'react';
import { X, Play, Volume2, Maximize, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-red-500/30 rounded-3xl overflow-hidden shadow-2xl">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-sm font-bold text-white line-clamp-1">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={videoUrl}
            alt={title}
            className="w-full h-full object-cover filter brightness-90"
          />

          {/* Interactive Simulated Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <span className="px-3 py-1 rounded-full bg-red-600/80 text-white text-xs font-bold font-mono">
                HD 1080p • Nissan Insiders
              </span>
            </div>

            {/* Play Button & Progress bar */}
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
                  <div className="w-2/3 h-full bg-red-500" />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>02:45 / 04:12</span>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 cursor-pointer" />
                    <RotateCcw className="w-4 h-4 cursor-pointer" />
                    <Maximize className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
          <span>Serie Audiovisual Oficial • Nissan Insiders</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Cerrar Reproductor
          </button>
        </div>
      </div>
    </div>
  );
};
