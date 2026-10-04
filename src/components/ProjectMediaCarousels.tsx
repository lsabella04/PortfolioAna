import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  CheckCircle2,
  Maximize2,
  X,
} from 'lucide-react';

interface NissanReelsCarouselProps {
  lang: string;
}

export const NissanReelsCarousel: React.FC<NissanReelsCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevActiveIndexRef = useRef<number>(0);

  const reelsVideos = [
    '/assets/videos/Nissan/Reels/nissan-reel-1.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-2.mov',
    '/assets/videos/Nissan/Reels/nissan-reel-3.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-4.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-5.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-6.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-7.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-8.mp4',
    '/assets/videos/Nissan/Reels/nissan-reel-9.mp4',
  ];

  const count = reelsVideos.length;

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

  const getRelativeOffset = (phoneIndex: number) => {
    let diff = phoneIndex - activeIndex;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

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

  useEffect(() => {
    const isFocusChanged = prevActiveIndexRef.current !== activeIndex;
    prevActiveIndexRef.current = activeIndex;

    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (!isInViewport) {
        video.pause();
        video.muted = true;
        return;
      }

      if (idx === activeIndex) {
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
    <div ref={sectionRef} className="relative w-full overflow-hidden py-4 select-none">
      <div className="relative w-full max-w-[1250px] mx-auto overflow-hidden h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center">
        {reelsVideos.map((videoUrl, idx) => {
          const offset = getRelativeOffset(idx);
          const isCenter = offset === 0;
          const isNear = Math.abs(offset) === 1;

          if (Math.abs(offset) > 2) return null;

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

          const scaleVal = isCenter ? 1.1 : isNear ? 0.78 : 0.58;
          const opacityVal = isCenter ? 1 : isNear ? 0.65 : 0.35;
          const zIndexVal = isCenter ? 30 : isNear ? 20 : 10;
          const blurVal = isCenter ? 'blur(0px)' : isNear ? 'blur(1.5px)' : 'blur(3px)';

          return (
            <div
              key={idx}
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
              }}
              className="flex items-center justify-center"
            >
              {/* Left Arrow attached to center phone */}
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

              {/* Right Arrow attached to center phone */}
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

              {/* Phone Frame */}
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

                {/* Sound Button */}
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

                {/* Play Overlay */}
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
                    src={videoUrl}
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
    </div>
  );
};

export const NissanDesktopCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevActiveIndexRef = useRef<number>(0);

  const desktopVideos = [
    '/assets/videos/Nissan/VideosLargos/nissan-video-largo-3.mp4',
    '/assets/videos/Nissan/VideosLargos/nissan-video-largo-1.mp4',
    '/assets/videos/Nissan/VideosLargos/nissan-video-largo-2.mp4',
  ];

  const count = desktopVideos.length;

  const handleSelectLaptop = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setActiveIndex(newIndex);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : count - 1;
    handleSelectLaptop(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < count - 1 ? activeIndex + 1 : 0;
    handleSelectLaptop(nextIdx);
  };

  const getRelativeOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

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

  useEffect(() => {
    const isFocusChanged = prevActiveIndexRef.current !== activeIndex;
    prevActiveIndexRef.current = activeIndex;

    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (!isInViewport) {
        video.pause();
        video.muted = true;
        return;
      }

      if (idx === activeIndex) {
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
    <div ref={sectionRef} className="relative w-full overflow-hidden py-6 select-none">
      <div className="relative w-full max-w-[1250px] mx-auto overflow-hidden h-[320px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">
        {desktopVideos.map((videoUrl, idx) => {
          const offset = getRelativeOffset(idx);
          const isCenter = offset === 0;
          const isNear = Math.abs(offset) === 1;

          const leftPos =
            offset === 0
              ? '50%'
              : offset === -1
              ? '25%'
              : offset === 1
              ? '75%'
              : offset === -2
              ? '6%'
              : '94%';

          const scaleVal = isCenter ? 1.05 : isNear ? 0.72 : 0.52;
          const opacityVal = isCenter ? 1 : isNear ? 0.65 : 0.3;
          const zIndexVal = isCenter ? 30 : isNear ? 20 : 10;
          const blurVal = isCenter ? 'blur(0px)' : isNear ? 'blur(1.5px)' : 'blur(3px)';

          return (
            <div
              key={idx}
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
              }}
              className="flex flex-col items-center justify-center"
            >
              {/* Left Arrow attached to center laptop */}
              {isCenter && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute -left-7 sm:-left-11 lg:-left-13 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-white border border-neutral-300 hover:border-[#faa1d4] hover:bg-pink-50 text-black shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-50 flex items-center justify-center group"
                  title="Anterior"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 group-hover:text-[#c93b8d] transition-colors" />
                </button>
              )}

              {/* Right Arrow attached to center laptop */}
              {isCenter && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute -right-7 sm:-right-11 lg:-right-13 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-white border border-neutral-300 hover:border-[#faa1d4] hover:bg-pink-50 text-black shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-50 flex items-center justify-center group"
                  title="Siguiente"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 group-hover:text-[#c93b8d] transition-colors" />
                </button>
              )}

              {/* Authentic 16:9 Laptop Mockup Container */}
              <div
                onClick={() => {
                  if (isCenter) {
                    toggleCenterPlayPause();
                  } else {
                    handleSelectLaptop(idx);
                  }
                }}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Laptop Display Screen (16:9) */}
                <div
                  className={`w-[320px] sm:w-[500px] lg:w-[600px] aspect-video bg-black border-4 sm:border-[6px] rounded-t-2xl relative overflow-hidden transition-all shadow-2xl ${
                    isCenter
                      ? 'border-[#faa1d4] ring-4 ring-[#faa1d4]/30'
                      : 'border-[#1c1c1e]'
                  }`}
                >
                  {/* Top Camera Dot */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2c2c2e] z-40 flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
                  </div>

                  {/* Sound Toggle Button */}
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

                  {/* Play Overlay */}
                  {isCenter && !isPlaying && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center z-30 animate-fadeIn">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faa1d4]/90 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-black text-black" />
                      </div>
                    </div>
                  )}

                  {/* Screen Video Container */}
                  <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      src={videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Laptop Chassis Base (Keyboard Lip Deck) */}
                <div className="w-[105%] h-3.5 sm:h-4.5 bg-gradient-to-r from-[#2c2c2e] via-[#3a3a3c] to-[#2c2c2e] rounded-b-xl border-t border-neutral-600/50 shadow-xl flex justify-center items-start relative -mt-0.5 z-20">
                  {/* Laptop Center Trackpad Lip Notch */}
                  <div className="w-10 sm:w-16 h-1 sm:h-1.5 bg-[#1c1c1e] rounded-b-sm border-t border-neutral-700/50" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface NissanInstagramCarouselProps {
  lang?: string;
}

export const NissanInstagramCarousel: React.FC<NissanInstagramCarouselProps> = ({ lang = 'es' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1482);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Lightbox state for modal view with prev/next controls
  const [lightboxState, setLightboxState] = useState<{
    type: 'carrusel' | 'gallery';
    index: number;
  } | null>(null);

  const carruselImages = [
    { url: '/assets/images/Nissan/Carruseles/Carrusel1.jpg', title: 'Carrusel Infográfico 1' },
    { url: '/assets/images/Nissan/Carruseles/Carrusel2.jpg', title: 'Carrusel Infográfico 2' },
    { url: '/assets/images/Nissan/Carruseles/Carrusel3.jpg', title: 'Carrusel Infográfico 3' },
    { url: '/assets/images/Nissan/Carruseles/Carrusel4.jpg', title: 'Carrusel Infográfico 4' },
    { url: '/assets/images/Nissan/Carruseles/Carrusel5.jpg', title: 'Carrusel Infográfico 5' },
  ];

  const imagenesGallery = [
    { url: '/assets/images/Nissan/Imagenes/1686796977226.jpeg', label: 'Estrategia Digital 01' },
    { url: '/assets/images/Nissan/Imagenes/1688611071001.jpeg', label: 'Estrategia Digital 02' },
    { url: '/assets/images/Nissan/Imagenes/1689965873111.jpeg', label: 'Estrategia Digital 03' },
    { url: '/assets/images/Nissan/Imagenes/1698450596329.jpeg', label: 'Estrategia Digital 04' },
    { url: '/assets/images/Nissan/Imagenes/1709147910575.jpeg', label: 'Estrategia Digital 05' },
    { url: '/assets/images/Nissan/Imagenes/FqT8mM8XsAA1ffd.jpeg', label: 'Estrategia Digital 06' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < carruselImages.length - 1 ? prev + 1 : 0));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : carruselImages.length - 1));
  };

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  // Lightbox Navigation
  const activeImagesList =
    lightboxState?.type === 'carrusel'
      ? carruselImages.map((i) => i.url)
      : imagenesGallery.map((i) => i.url);

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const len = activeImagesList.length;
    const nextIdx = (lightboxState.index - 1 + len) % len;
    setLightboxState({ ...lightboxState, index: nextIdx });
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const len = activeImagesList.length;
    const nextIdx = (lightboxState.index + 1) % len;
    setLightboxState({ ...lightboxState, index: nextIdx });
  };

  return (
    <div className="w-full space-y-16 py-6 select-none font-sans">
      {/* 1. INSTAGRAM POST CAROUSEL MOCKUP */}
      <div className="space-y-4">
        <div className="max-w-[540px] mx-auto text-center space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c93b8d] bg-pink-50 px-3 py-1 rounded-full border border-pink-200 inline-block">
            {lang === 'es' ? 'Carrusel Secuencial • Instagram' : 'Sequential Carousel • Instagram'}
          </span>
        </div>

        <div className="max-w-[540px] mx-auto bg-white border border-neutral-200 sm:rounded-2xl shadow-2xl overflow-hidden font-sans">
          {/* IG Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-black p-0.5 flex items-center justify-center overflow-hidden border border-white">
                  <img
                    src="/assets/nissan-insiders.jpg"
                    alt="Nissan México"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="text-[9px] font-black text-white font-mono uppercase">NS</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-neutral-900 hover:text-[#c93b8d] transition-colors cursor-pointer">
                    nissan_mx
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" />
                </div>
                <p className="text-[10px] text-neutral-500 font-medium">
                  {lang === 'es' ? 'Nissan México • Publicación oficial' : 'Nissan Mexico • Official Post'}
                </p>
              </div>
            </div>

            <button className="text-neutral-500 hover:text-black p-1 rounded-full hover:bg-neutral-100 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* IG Image Slider Container */}
          <div className="relative w-full aspect-square bg-neutral-950 overflow-hidden group">
            <div
              className="w-full h-full flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carruselImages.map((img, idx) => (
                <div key={idx} className="w-full h-full shrink-0 relative bg-neutral-900 flex items-center justify-center">
                  <img
                    src={img.url}
                    alt={`Carrusel Nissan ${idx + 1}`}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={() => setLightboxState({ type: 'carrusel', index: idx })}
                  />
                </div>
              ))}
            </div>

            {/* Slide Counter Badge */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white shadow-md pointer-events-none">
              {currentSlide + 1} / {carruselImages.length}
            </div>

            {/* Expand Lightbox Button */}
            <button
              onClick={() => setLightboxState({ type: 'carrusel', index: currentSlide })}
              className="absolute top-3 left-3 bg-black/60 hover:bg-black/90 backdrop-blur-md p-1.5 rounded-full text-white shadow-md transition-transform hover:scale-110 cursor-pointer"
              title="Ver pantalla completa"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Left Navigation Arrow */}
            {currentSlide > 0 && (
              <button
                onClick={handlePrevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-800" />
              </button>
            )}

            {/* Right Navigation Arrow */}
            {currentSlide < carruselImages.length - 1 && (
              <button
                onClick={handleNextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-neutral-800" />
              </button>
            )}

            {/* Bottom Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full z-10">
              {carruselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? 'w-2.5 h-2.5 bg-[#c93b8d] scale-110'
                      : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* IG Action Bar */}
          <div className="px-4 py-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleLike}
                  className="transition-transform active:scale-125 cursor-pointer"
                  title={isLiked ? 'Ya no me gusta' : 'Me gusta'}
                >
                  <Heart
                    className={`w-6 h-6 transition-colors ${
                      isLiked ? 'text-red-500 fill-red-500' : 'text-neutral-800 hover:text-neutral-500'
                    }`}
                  />
                </button>
                <button className="text-neutral-800 hover:text-neutral-500 transition-colors cursor-pointer">
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button className="text-neutral-800 hover:text-neutral-500 transition-colors cursor-pointer">
                  <Send className="w-6 h-6" />
                </button>
              </div>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-neutral-800 hover:text-neutral-500 transition-colors cursor-pointer"
              >
                <Bookmark className={`w-6 h-6 ${isBookmarked ? 'fill-black text-black' : ''}`} />
              </button>
            </div>

            {/* Likes */}
            <p className="text-xs font-extrabold text-neutral-900">
              {likeCount.toLocaleString()} {lang === 'es' ? 'me gusta' : 'likes'}
            </p>

            {/* Caption */}
            <div className="text-xs text-neutral-800 space-y-1 leading-relaxed">
              <p>
                <span className="font-extrabold mr-1.5 text-neutral-900">nissan_mx</span>
                {lang === 'es'
                  ? 'Estrategia gráfica e infográfica multicanal para Nissan México. Desliza para revisar la secuencia completa del carrusel informativo.'
                  : 'Multi-channel graphic & infographic strategy for Nissan Mexico. Swipe to review the full informative carousel sequence.'}
              </p>
              <p className="text-[#c93b8d] font-semibold text-[11px]">
                #NissanInsiders #NissanMX #ePOWER #AutomotiveContent #SocialMediaStrategy
              </p>
            </div>

            <p className="text-[11px] text-neutral-400 font-medium cursor-pointer hover:underline">
              {lang === 'es' ? 'Ver los 54 comentarios' : 'View all 54 comments'}
            </p>

            <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-mono pt-1">
              {lang === 'es' ? 'HACE 2 DÍAS' : '2 DAYS AGO'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. CLEAN & COMPACT NISSAN IMAGES GALLERY (6 in a single row) */}
      <div className="max-w-6xl mx-auto space-y-4 pt-8 border-t border-neutral-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c93b8d]" />
          <h4 className="text-base sm:text-lg font-bold font-heading text-black tracking-tight">
            {lang === 'es' ? 'Galería de Publicaciones Visuales Nissan' : 'Nissan Visual Posts Gallery'}
          </h4>
        </div>

        {/* 6-Column Single Row Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {imagenesGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxState({ type: 'gallery', index: idx })}
              className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-[#faa1d4] transition-all duration-300 cursor-pointer"
            >
              {/* Clean Image */}
              <img
                src={item.url}
                alt={`Publicación Visual Nissan ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Expand Icon on Top Right Corner on Hover */}
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-md z-10">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ENHANCED FULLSCREEN LIGHTBOX MODAL WITH PREV / NEXT */}
      {lightboxState && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn select-none"
          onClick={() => setLightboxState(null)}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-50 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-mono font-bold pointer-events-auto shadow-xl">
              {lightboxState.type === 'carrusel' ? 'Carrusel Infográfico' : 'Publicación Visual'}{' '}
              • {lightboxState.index + 1} / {activeImagesList.length}
            </div>

            <button
              onClick={() => setLightboxState(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer pointer-events-auto shadow-xl"
              title="Cerrar (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handleLightboxPrev}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-50"
            title="Anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleLightboxNext}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-50"
            title="Siguiente"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          {/* Main Lightbox Image View */}
          <div
            className="max-w-5xl max-h-[85vh] flex items-center justify-center relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImagesList[lightboxState.index]}
              alt="Nissan High Res Preview"
              className="w-full h-full max-h-[85vh] object-contain transition-all duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};


