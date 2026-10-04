import React, { useEffect } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { X, Printer, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang].cvModal;

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#c084fc', '#60a5fa'],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0f121e] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-pink-400" />
            <h2 className="text-base font-extrabold text-white">{t.title}</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printBtn}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-cv" className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-[#0d0f17]">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl font-extrabold font-heading text-white">
              Ana Karen Hernández Méndez
            </h1>
            <p className="text-sm font-bold gradient-text-pink-purple mt-1">{t.subtitle}</p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-pink-400" />
                anakarheme@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-pink-400" />
                +52 (55) 8402-9182
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                CDMX, México (Remote Available)
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 fill-blue-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                linkedin.com/in/anakaren-hernandez
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              {t.summaryTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-white/5">
              Especialista en Content Management y Social Media Strategy con más de 7 años de experiencia diseñando y ejecutando estrategias de contenido multicanal para marcas automotrices globales (Nissan), plataformas tecnológicas de movilidad (Uber), medios virales internacionales (TheSoul Publishing) e instituciones educativas de prestigio (IUV). Experta en copywriting persuasivo, guionismo para video, análisis de métricas y liderazgo de equipos creativos.
            </p>
          </div>

          {/* Core Skills Tag Grid */}
          <div>
            <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
              {t.skillsTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                'Estrategia de Contenidos',
                'Copywriting & UX Writing',
                'Guionismo para Video & Reels',
                'SEO & Inbound Marketing',
                'Social Media Analytics',
                'Gestión de Redes Sociales',
                'Brand Voice & Style Guides',
                'Community Management',
                'Gestión de Equipos Creativos',
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-white/5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {t.experienceTitle}
            </h3>

            <div className="space-y-4">
              {/* Job 1 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">Senior Content Strategist & Lead</h4>
                    <p className="text-xs text-pink-400">Nissan & Uber Campaigns (Agencia / Digital Lead)</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">2021 — Presente</span>
                </div>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 mt-2">
                  <li>Liderazgo de la serie audiovisual Nissan Insiders (+850K vistas orgánicas).</li>
                  <li>Redacción UX para Help Center LatAm de Uber y campaña ecologista Uber Planet.</li>
                  <li>Incremento del 42% en engagement rate orgánico mediante calendarios de alta relevancia.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">Viral Scriptwriter & Content Editor</h4>
                    <p className="text-xs text-purple-400">TheSoul Publishing ("Bella y Genial")</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">2019 — 2021</span>
                </div>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 mt-2">
                  <li>Creación de más de 140 guiones virales acumulando +12 millones de reproducciones.</li>
                  <li>Optimización de hooks iniciales (retención del 78% en los primeros 3 segundos).</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">SEO & Inbound Content Specialist</h4>
                    <p className="text-xs text-emerald-400">IUV Universidad</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">2017 — 2019</span>
                </div>
                <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 mt-2">
                  <li>Crecimiento del 160% en tráfico orgánico del blog institucional.</li>
                  <li>Posicionamiento en Top 3 de Google para 24 palabras clave estratégicas de educación superior.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              {t.educationTitle}
            </h3>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 space-y-2">
              <div>
                <span className="font-bold text-white block">Licenciatura en Ciencias de la Comunicación & Medios Digitales</span>
                <span className="text-slate-400">Mención de Excelencia Académica</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200">Certificación Google Analytics</span>
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-200">HubSpot Content Marketing Certified</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200">Bilingüe Español / Inglés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-900 flex justify-between items-center">
          <span className="text-xs text-slate-400">CV Formateado & Verificado • Ana Karen Hernández</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
