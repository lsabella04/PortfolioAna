import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Mail, Phone } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const avatar2Src = '/assets/avatar/Avatar2.png';

  return (
    <section id="contact" className="pt-12 pb-0 relative overflow-hidden w-full space-y-8 max-w-[1400px] mx-auto min-h-[380px] select-none">
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

      {/* Clean Text-Only Contact Information (No background cards) */}
      <div className="flex flex-col space-y-6 pt-4 pb-12 pr-0 lg:pr-72 z-20 relative text-left">
        {/* 1. Email Link */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-200 text-[#c93b8d] flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider">
              {lang === 'es' ? 'Correo Electrónico' : 'Direct Email'}
            </span>
            <a
              href="mailto:anakarheme@gmail.com"
              className="text-lg sm:text-2xl font-black text-black hover:text-[#c93b8d] underline decoration-2 underline-offset-4 transition-colors break-all"
            >
              anakarheme@gmail.com
            </a>
          </div>
        </div>

        {/* 2. LinkedIn Link */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-200 text-[#c93b8d] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </div>
          <div>
            <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider">
              {lang === 'es' ? 'Red Profesional' : 'Professional Network'}
            </span>
            <a
              href="https://www.linkedin.com/in/anakarheme/"
              target="_blank"
              rel="noreferrer"
              className="text-lg sm:text-2xl font-black text-black hover:text-[#c93b8d] underline decoration-2 underline-offset-4 transition-colors"
            >
              linkedin.com/in/anakarheme/
            </a>
          </div>
        </div>

        {/* 3. Phone (NO LINK, plain text) */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-200 text-[#c93b8d] flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider">
              {lang === 'es' ? 'Teléfono' : 'Phone'}
            </span>
            <span className="text-lg sm:text-2xl font-black text-neutral-900">
              +52 1 2284240926
            </span>
          </div>
        </div>
      </div>

      {/* Avatar2 image resting flush against the bottom border right above the copyright section */}
      <div className="absolute bottom-0 right-0 sm:right-4 lg:right-10 z-10 pointer-events-none flex items-end justify-center">
        <img
          src={avatar2Src}
          alt="Ana Karen Avatar 2"
          className="w-36 sm:w-60 md:w-72 lg:w-80 h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] opacity-85 sm:opacity-100"
        />
      </div>
    </section>
  );
};
