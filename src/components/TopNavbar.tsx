import React, { useState, useEffect } from 'react';
import type { Language, ClientBrand } from '../types';
import { translations, clientBrandsData } from '../i18n/translations';
import { Globe, FileText, ChevronDown, Menu, X } from 'lucide-react';

interface TopNavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCvModal: () => void;
  onSelectBrandPage: (brand: ClientBrand) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  lang,
  onToggleLang,
  onOpenCvModal,
  onSelectBrandPage,
  onNavigateToSection,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const t = translations[lang].nav;
  const brands = clientBrandsData[lang];

  useEffect(() => {
    const sectionIds = ['about', 'portfolio', 'just-for-fun', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating Centered Pill Navbar Container */}
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full px-4 sm:px-6 py-2.5 shadow-lg shadow-neutral-300/40 flex items-center justify-between transition-all">
        {/* Left Side: Brand name on mobile/tablet (`lg:hidden`), Left spacer on desktop (`lg:block`) */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => scrollToSection('about')}
            className="font-extrabold font-mono text-xs sm:text-sm tracking-tight text-black flex items-center gap-2 hover:text-[#c93b8d] transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#faa1d4] animate-pulse" />
            <span>ANA HERNÁNDEZ</span>
          </button>
        </div>
        <div className="hidden lg:block w-36" />

        {/* Centered Desktop Navigation Menu Options (`hidden lg:flex`) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-7 text-xs font-bold text-neutral-800">
          {/* 1. Sobre mí / About Me */}
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-all py-1 ${activeSection === 'about'
                ? 'text-[#c93b8d] font-extrabold underline decoration-2 underline-offset-4'
                : 'text-neutral-800 hover:text-[#c93b8d]'
              }`}
          >
            {t.about}
          </button>

          {/* 2. Proyectos / Projects Dropdown */}
          <div
            className="relative py-1"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => {
                scrollToSection('portfolio');
                setDropdownOpen(!dropdownOpen);
              }}
              className={`inline-flex items-center gap-1 transition-all py-1 ${activeSection === 'portfolio'
                  ? 'text-[#c93b8d] font-extrabold underline decoration-2 underline-offset-4'
                  : 'text-neutral-800 hover:text-[#c93b8d]'
                }`}
            >
              <span>{t.projects}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#c93b8d]' : ''}`} />
            </button>

            {/* Dropdown Options with Seamless Invisible Hover Bridge (pt-2.5, no dead gap) */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 z-50 pointer-events-auto">
                <div className="bg-white border border-neutral-200 rounded-2xl shadow-xl py-2 space-y-1 animate-fadeIn">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => {
                        setDropdownOpen(false);
                        onSelectBrandPage(brand);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-neutral-800 hover:bg-[#faa1d4] hover:text-black transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>{brand.name === 'Revista Cultura Pop' ? 'NieblaMagazine' : brand.logoText}</span>
                      <span className="text-[10px] font-mono opacity-60">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Just for fun */}
          <button
            onClick={() => scrollToSection('just-for-fun')}
            className={`transition-all py-1 ${activeSection === 'just-for-fun'
                ? 'text-[#c93b8d] font-extrabold underline decoration-2 underline-offset-4'
                : 'text-neutral-800 hover:text-[#c93b8d]'
              }`}
          >
            {t.justForFun}
          </button>

          {/* 4. Contacto / Contact */}
          <button
            onClick={() => scrollToSection('contact')}
            className={`transition-all py-1 ${activeSection === 'contact'
                ? 'text-[#c93b8d] font-extrabold underline decoration-2 underline-offset-4'
                : 'text-neutral-800 hover:text-[#c93b8d]'
              }`}
          >
            {t.contact}
          </button>
        </nav>

        {/* Right Desktop Actions (`hidden lg:flex`) */}
        <div className="hidden lg:flex items-center gap-3.5 justify-end">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/anakarheme/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-800 hover:text-[#c93b8d] hover:scale-110 hover:drop-shadow-sm transition-all"
            title="LinkedIn Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Descargar CV */}
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 hover:border-[#faa1d4] text-neutral-900 text-xs font-bold transition-all hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5 text-[#c93b8d]" />
            <span>{t.downloadCv}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 hover:border-[#faa1d4] text-xs font-bold text-neutral-900 transition-all active:scale-95 cursor-pointer"
            title={lang === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
          >
            <Globe className="w-3.5 h-3.5 text-[#c93b8d]" />
            <span className="font-mono font-extrabold text-black">
              {lang.toUpperCase()}
            </span>
            <span className="text-[10px] text-[#c93b8d] font-mono bg-pink-100 px-1.5 py-0.5 rounded-full font-bold">
              {lang === 'es' ? 'EN ➔' : 'ES ➔'}
            </span>
          </button>
        </div>

        {/* Compressed View Actions (`lg:hidden`): Language Toggle ALWAYS VISIBLE next to Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          {/* ALWAYS VISIBLE Language Switcher */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 hover:border-[#faa1d4] text-xs font-bold text-neutral-900 transition-all active:scale-95 cursor-pointer shadow-xs"
            title={lang === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
          >
            <Globe className="w-3.5 h-3.5 text-[#c93b8d]" />
            <span className="font-mono font-extrabold text-black">
              {lang.toUpperCase()}
            </span>
            <span className="text-[10px] text-[#c93b8d] font-mono bg-pink-100 px-1.5 py-0.5 rounded-full font-bold">
              {lang === 'es' ? 'EN ➔' : 'ES ➔'}
            </span>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 hover:text-[#c93b8d] hover:border-[#faa1d4] transition-all flex items-center justify-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/35 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* Mobile/Tablet Menu Drawer (`lg:hidden`) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 max-w-lg mx-auto bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-3xl p-6 shadow-2xl space-y-4 text-xs font-bold text-neutral-800 text-center z-50 animate-slide-down">
          <button
            onClick={() => scrollToSection('about')}
            className={`block w-full py-3 rounded-xl transition-all ${activeSection === 'about'
                ? 'bg-pink-50 text-[#c93b8d] font-black'
                : 'hover:text-[#c93b8d] hover:bg-neutral-50'
              }`}
          >
            {t.about}
          </button>

          <div className="space-y-2 py-3 border-y border-neutral-100">
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`block w-full py-2 font-extrabold uppercase text-[11px] tracking-wider transition-all ${activeSection === 'portfolio' ? 'text-[#c93b8d]' : 'text-neutral-500'
                }`}
            >
              {t.projects} ➔
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectBrandPage(brand);
                  }}
                  className="py-2 px-3 rounded-xl bg-neutral-50 hover:bg-[#faa1d4] hover:text-black text-[11px] font-bold text-neutral-700 transition-all text-center truncate"
                >
                  {brand.name === 'Revista Cultura Pop' ? 'NieblaMag' : brand.logoText}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection('just-for-fun')}
            className={`block w-full py-3 rounded-xl transition-all ${activeSection === 'just-for-fun'
                ? 'bg-pink-50 text-[#c93b8d] font-black'
                : 'hover:text-[#c93b8d] hover:bg-neutral-50'
              }`}
          >
            {t.justForFun}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`block w-full py-3 rounded-xl transition-all ${activeSection === 'contact'
                ? 'bg-pink-50 text-[#c93b8d] font-black'
                : 'hover:text-[#c93b8d] hover:bg-neutral-50'
              }`}
          >
            {t.contact}
          </button>

          <div className="pt-3 border-t border-neutral-100 flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/anakarheme/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-neutral-100 text-neutral-800 hover:text-[#c93b8d] transition-all"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex-1 py-2.5 px-4 rounded-full bg-neutral-900 text-white text-xs font-bold shadow-md hover:bg-neutral-800 transition-all"
            >
              {t.downloadCv}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
