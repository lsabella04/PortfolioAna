import { useState } from 'react';
import type { Language, ClientBrand, ProjectCase, ViewState } from './types';
import { TopNavbar } from './components/TopNavbar';
import { HeroAnimatedSection } from './components/HeroAnimatedSection';
import { AboutMeBlock } from './components/AboutMeBlock';
import { VideoBlock } from './components/VideoBlock';
import { MetricsBlock } from './components/MetricsBlock';
import { SectionSeparator } from './components/SectionSeparator';
import { ProjectLogosGrid } from './components/ProjectLogosGrid';
import { JustForFunSection } from './components/JustForFunSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ContactSection } from './components/ContactSection';
import { VideoModal } from './components/VideoModal';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<Language>('es');
  const [viewState, setViewState] = useState<ViewState>('home');
  const [activeBrand, setActiveBrand] = useState<ClientBrand | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectCase | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const handleNavigateToBrand = (brand: ClientBrand) => {
    setActiveBrand(brand);
    setActiveProject(null);
    setViewState('project-detail');
  };

  const handleBackToPortfolio = () => {
    setViewState('home');
    setActiveBrand(null);
    setActiveProject(null);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setViewState('home');
    setActiveBrand(null);
    setActiveProject(null);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (viewState === 'project-detail') {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col justify-between selection:bg-[#faa1d4] selection:text-black">
        <TopNavbar
          lang={lang}
          onToggleLang={toggleLang}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onSelectBrandPage={handleNavigateToBrand}
          onNavigateToSection={handleNavigateToSection}
        />
        <div className="pt-24 flex-1">
          <ProjectDetailPage
            lang={lang}
            brand={activeBrand}
            project={activeProject}
            onBackToPortfolio={handleBackToPortfolio}
          />
        </div>
        <Footer />

        {/* MODALES AUXILIARES */}
        <CvModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
          lang={lang}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative selection:bg-[#faa1d4] selection:text-black">
      {/* MENÚ NAVEGACIÓN SUPERIOR FLOTANTE */}
      <TopNavbar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onSelectBrandPage={handleNavigateToBrand}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 1. HERO CON ANIMACIÓN DE NOMBRE "ANA HERNÁNDEZ" Y AVATAR */}
      <HeroAnimatedSection lang={lang} />

      {/* MAIN CONTAINER FOR CONTENT */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-8 py-4 space-y-16">
        {/* 2. SECCIÓN SOBRE MÍ (TÍTULO LIMPIO FUERA DE TARJETA, UBICADO DIRECTAMENTE DEBAJO DEL HÉROE) */}
        <AboutMeBlock lang={lang} />

        {/* 3. BLOQUES DE PRESENTACIÓN EN VIDEO Y MÉTRICAS */}
        <section id="experience" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <VideoBlock
            lang={lang}
            onOpenVideoModal={(url, title) => setSelectedVideo({ url, title })}
          />
          <MetricsBlock lang={lang} />
        </section>

        {/* 4. SEPARADOR VISUAL "PORTAFOLIO Y PROYECTOS" */}
        <SectionSeparator lang={lang} />

        {/* 6. LOGOTIPOS DE PROYECTOS (CON LOGOS SUBIDOS UNIFORMES Y CENTRADOS) */}
        <section className="w-full">
          <ProjectLogosGrid
            lang={lang}
            onNavigateToProjectPage={handleNavigateToBrand}
          />
        </section>

        {/* 7. SECCIÓN "JUST FOR FUN": CARRUSEL 3D DE 5 TELÉFONOS CON ENFOQUE CENTRAL Y DIFUMINADO LATERAL */}
        <JustForFunSection lang={lang} />

        {/* 8. SECCIÓN DE CONTACTO DIRECTO */}
        <ContactSection lang={lang} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALES AUXILIARES (Video Player & CV Download) */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
