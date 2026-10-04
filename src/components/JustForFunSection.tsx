import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play } from 'lucide-react';

interface JustForFunSectionProps {
  lang: Language;
}

export const JustForFunSection: React.FC<JustForFunSectionProps> = ({ lang }) => {
  const t = translations[lang].justForFun;
  const [activeIndex, setActiveIndex] = useState(0); // Phone #1 / JustForFun1.mp4 active by default
  const [isInViewport, setIsInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevActiveIndexRef = useRef<number>(0);

  const phones = [1, 2, 3, 4, 5];
  const count = phones.length;

  const handleSelectPhone = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setActiveIndex(newIndex);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : count - 1;
    handleSelectPhone(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < count - 1 ? activeIndex + 1 : 0;
    handleSelectPhone(nextIdx);
  };

  // Map 5 phones seamlessly relative to activeIndex for smooth transition animations
  const getRelativeOffset = (phoneIndex: number) => {
    let diff = phoneIndex - activeIndex;
    if (diff > 2) diff -= count;
    if (diff < -2) diff += count;
    return diff;
  };

  const videoMetricsData = [
    {
      videoUrl: '/assets/videos/JustForFun/JustForFun1.mp4',
      likes: '8,420',
      comments: '39',
      shares: '3',
      saved: '647',
      views: '47,500',
    },
    {
      videoUrl: '/assets/videos/JustForFun/JustForFun2.mp4',
      likes: '142,300',
      comments: '1,785',
      shares: '2,171',
      saved: '5,016',
      views: '37,000',
    },
    {
      videoUrl: '/assets/videos/JustForFun/JustForFun5.mp4',
      likes: '331',
      comments: '1',
      shares: '1',
      saved: '16',
      views: '6,722',
    },
    {
      videoUrl: '/assets/videos/JustForFun/JustForFun4.mp4',
      likes: '857',
      comments: '22',
      shares: '32',
      saved: '21',
      views: '7,805',
    },
    {
      videoUrl: '/assets/videos/JustForFun/JustForFun3.mp4',
      likes: '6,840',
      comments: '127',
      shares: '760',
      saved: '643',
      views: '7,805',
    },
  ];

  // 1. Intersection Observer to detect when section enters / leaves viewport
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  // 2. Playback Control Effect: Resumes on viewport re-entry without resetting to 0, resets to 0 ONLY on focus change
  useEffect(() => {
    const isFocusChanged = prevActiveIndexRef.current !== activeIndex;
    prevActiveIndexRef.current = activeIndex;

    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (!isInViewport) {
        // Section out of viewport: pause all videos, do NOT reset currentTime
        video.pause();
        video.muted = true;
        return;
      }

      if (idx === activeIndex) {
        // Center video: reset to 0 ONLY if focus JUST changed to this phone
        if (isFocusChanged) {
          video.currentTime = 0;
        }

        video.muted = isMuted;

        if (isPlaying) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              video.muted = true;
              video.play().catch(() => {});
            });
          }
        } else {
          video.pause();
        }
      } else {
        // Background side videos: keep playing silently in background
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    });
  }, [activeIndex, isInViewport, isMuted, isPlaying]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleCenterPlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section ref={sectionRef} id="just-for-fun" className="w-full py-12 space-y-8 select-none max-w-[1400px] mx-auto">
      {/* Left-Aligned Tall Uppercase Section Title with Architectural Horizontal Lines & Pink Accent Indicator */}
      <div className="flex items-center gap-4 sm:gap-6 w-full">
        <div className="w-2.5 sm:w-3.5 h-8 sm:h-12 bg-[#faa1d4] rounded-sm shrink-0" />
        <h2 className="section-title-stretched text-4xl sm:text-6xl lg:text-7xl text-black shrink-0">
          {t.title}
        </h2>
        <div className="flex-1 h-[2px] bg-black" />
        <div className="w-8 sm:w-16 h-[2px] bg-[#faa1d4]" />
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 text-left max-w-xl font-medium -mt-4">
        {t.subtitle}
      </p>

      {/* Synchronized Collision-Free 3D Carousel Stage */}
      <div className="relative w-full max-w-[1250px] mx-auto overflow-hidden h-[480px] sm:h-[540px] lg:h-[580px] flex items-center justify-center">
        {phones.map((phoneNum, idx) => {
          const offset = getRelativeOffset(idx);
          const isCenter = offset === 0;
          const isNear = Math.abs(offset) === 1;
          const metrics = videoMetricsData[idx];

          // Uniform 20% step spacing (-2: 10%, -1: 30%, 0: 50%, 1: 70%, 2: 90%)
          const leftPos =
            offset === 0
              ? '50%'
              : offset === -1
              ? '30%'
              : offset === 1
              ? '70%'
              : offset === -2
              ? '10%'
              : '90%';

          const scaleVal = isCenter ? 1.12 : isNear ? 0.78 : 0.58;
          const opacityVal = isCenter ? 1 : isNear ? 0.65 : 0.35;
          const zIndexVal = isCenter ? 30 : isNear ? 20 : 10;
          const blurVal = isCenter ? 'blur(0px)' : isNear ? 'blur(1.5px)' : 'blur(3px)';

          return (
            <div
              key={phoneNum}
              style={{
                position: 'absolute',
                top: '50%',
                left: leftPos,
                transform: `translate(-50%, -50%) scale(${scaleVal})`,
                zIndex: zIndexVal,
                opacity: opacityVal,
                filter: blurVal,
                transitionProperty: 'left, transform, opacity, filter, box-shadow, border-color',
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '0ms',
              }}
              className="flex items-center justify-center"
            >
              {/* Discrete Left Arrow attached to center active phone */}
              {isCenter && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute -left-7 sm:-left-9 lg:-left-11 top-[calc(50%+6px)] -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white border border-neutral-300 hover:border-[#faa1d4] hover:bg-pink-50 text-black shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-50 flex items-center justify-center group"
                  title="Anterior"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-800 group-hover:text-[#c93b8d] transition-colors" />
                </button>
              )}

              {/* Discrete Right Arrow attached to center active phone */}
              {isCenter && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute -right-7 sm:-right-9 lg:-right-11 top-[calc(50%+6px)] -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white border border-neutral-300 hover:border-[#faa1d4] hover:bg-pink-50 text-black shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-50 flex items-center justify-center group"
                  title="Siguiente"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-800 group-hover:text-[#c93b8d] transition-colors" />
                </button>
              )}

              {/* Stacked Metric Ribbon Badges (shifted 5px higher) */}
              {isCenter && (
                <div className="absolute top-[11px] sm:top-[19px] left-[calc(100%-10px)] flex flex-col gap-1.5 z-40 pointer-events-none animate-fadeIn">
                  <div className="metric-ribbon-badge text-[9px] sm:text-xs">
                    {metrics.likes} {t.likes}
                  </div>
                  <div className="metric-ribbon-badge text-[9px] sm:text-xs">
                    {metrics.comments} {t.comments}
                  </div>
                  <div className="metric-ribbon-badge text-[9px] sm:text-xs">
                    {metrics.shares} {t.shares}
                  </div>
                  <div className="metric-ribbon-badge text-[9px] sm:text-xs">
                    {metrics.saved} {t.saved}
                  </div>
                  <div className="metric-ribbon-badge text-[9px] sm:text-xs">
                    {metrics.views} {t.views}
                  </div>
                </div>
              )}

              {/* Inner Phone Frame */}
              <div
                onClick={() => {
                  if (isCenter) {
                    toggleCenterPlayPause();
                  } else {
                    handleSelectPhone(idx);
                  }
                }}
                className={`phone-mockup-frame-lg cursor-pointer shrink-0 relative ${
                  isCenter
                    ? 'shadow-2xl border-[#faa1d4] ring-4 ring-[#faa1d4]/30'
                    : 'border-[#262626]'
                }`}
              >
                {/* Notch */}
                <div className="phone-notch-lg" />

                {/* Sound Toggle Button on Active Phone */}
                {isCenter && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#faa1d4] hover:text-black transition-all z-40 cursor-pointer shadow-lg"
                    title={isMuted ? 'Activar Sonido' : 'Silenciar'}
                    aria-label={isMuted ? 'Activar Sonido' : 'Silenciar'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#faa1d4]" />}
                  </button>
                )}

                {/* Paused Play Overlay on Center Phone */}
                {isCenter && !isPlaying && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center z-30 animate-fadeIn">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faa1d4]/90 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-black text-black" />
                    </div>
                  </div>
                )}

                {/* Screen Container */}
                <div className="phone-screen-container-lg">
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={metrics.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
