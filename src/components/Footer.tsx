import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [cdmxTime, setCdmxTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCdmxTime(new Date().toLocaleTimeString('es-MX', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-200 bg-white py-8 text-neutral-600 text-xs mt-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name & Copyright */}
        <div>
          <p className="text-black font-bold">Ana Karen Hernández Méndez</p>
          <p className="text-neutral-500 text-[11px]">
            © {new Date().getFullYear()} • Content Manager & Social Media Strategist
          </p>
        </div>

        {/* Live Clock */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono text-[11px]">
          <Clock className="w-3.5 h-3.5 text-[#c93b8d] animate-pulse" />
          <span>CDMX: {cdmxTime || '20:51 CST'}</span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:anakarheme@gmail.com"
            className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 hover:border-[#faa1d4] text-black transition-colors"
          >
            <Mail className="w-4 h-4 text-[#c93b8d]" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-neutral-100 border border-neutral-200 hover:border-[#faa1d4] text-black transition-colors"
          >
            <svg className="w-4 h-4 fill-[#c93b8d]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl pink-gradient-btn text-black font-bold shadow-sm"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
