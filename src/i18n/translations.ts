import type { Language, ClientBrand, ProjectCase } from '../types';

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      justForFun: 'Just for fun',
      contact: 'Contacto',
      linkedIn: 'LinkedIn',
      letsTalk: "Let's Talk",
      downloadCv: 'Descargar CV',
      switchLang: 'EN',
    },
    aboutBlock: {
      title: 'Sobre mí',
      name: 'Ana Karen Hernández Méndez',
      role: 'Content Manager & Social Media Strategist',
      bio: 'Especialista en estrategia de contenidos multicanal, copywriting de alto impacto y crecimiento orgánico para marcas globales, sector salud y medios digitales.',
      location: 'Ciudad de México / Remoto',
      emailBtn: 'anakarheme@gmail.com',
    },
    videoBlock: {
      title: 'Presentación Destacada & Video',
      subtitle: 'Nissan Insiders & Campañas Audiovisuales Virales',
      watchNow: 'Reproducir Video',
    },
    metricsBlock: {
      card1Title: '+7 AÑOS DE EXPERIENCIA',
      card1Subtitle: 'Liderando estrategias de contenido multicanal & equipos creativos',
      card2Title: '800K+ ALCANCE ORGÁNICO EN TIKTOK',
      card2Subtitle: 'Vistas máximas alcanzadas en campañas audiovisuales virales',
    },
    summariesRow: {
      coaTitle: 'COA Clínica & Laboratorio Dental',
      coaDesc: 'Estrategia integral para el sector odontológico y laboratorio dental CAD/CAM.',
      nissanTitle: 'Nissan Insiders & Redes Sociales',
      nissanDesc: 'Serie audiovisual corporativa y posicionamiento de movilidad eléctrica.',
      exploreBtn: 'Ver Resumen',
    },
    separator: {
      title: 'Proyectos',
      subtitle: 'Explora nuestros proyectos y casos de estudio estratégicos.',
    },
    justForFun: {
      title: 'Just for fun',
      subtitle: 'Carrusel interactivo de videos en formato vertical con métricas de rendimiento.',
      placeholderText: 'Teléfono',
      slotText: 'Espacio listo para insertar contenido o video',
      likes: 'Me gustas',
      comments: 'Comentarios',
      shares: 'Compartidos',
      saved: 'Guardados',
      views: 'Vistas',
    },
    projectDetail: {
      backBtn: 'Volver a Proyectos',
      titleSuffix: '— Página Detallada',
      subtitle: 'Espacio de trabajo independiente preparado para detallar la estrategia, entregables y galería multimedia.',
      overviewTitle: 'Resumen General del Proyecto',
      deliverablesTitle: 'Entregables & Componentes',
      kpisTitle: 'Métricas & Resultados',
      placeholderSectionTitle: 'Lienzo de Contenido & Recursos',
      placeholderSectionDesc: 'Esta página independiente está lista para integrar recursos audiovisuales, gráficos en alta resolución y análisis profundo.',
    },
    contact: {
      title: 'Contacto Directo',
      subtitle: '¿Tienes una vacante o proyecto estratégico en mente? Envíame un mensaje.',
      formName: 'Nombre Completo',
      formEmail: 'Correo Electrónico',
      formSubject: 'Asunto / Empresa',
      formMessage: 'Mensaje',
      submitBtn: 'Enviar Mensaje',
      successMsg: '¡Mensaje recibido! Te responderé en breve.',
      emailDirect: 'anakarheme@gmail.com',
    },
    cvModal: {
      title: 'Curriculum Vitae — Ana Karen Hernández Méndez',
      subtitle: 'Content Manager & Social Media Strategist',
      summaryTitle: 'Perfil Profesional',
      skillsTitle: 'Habilidades Clave & Herramientas',
      experienceTitle: 'Experiencia Profesional',
      educationTitle: 'Educación & Certificaciones',
      printBtn: 'Imprimir / PDF',
      closeBtn: 'Cerrar',
    },
  },
  en: {
    nav: {
      about: 'About Me',
      projects: 'Projects',
      justForFun: 'Just for Fun',
      contact: 'Contact',
      linkedIn: 'LinkedIn',
      letsTalk: "Let's Talk",
      downloadCv: 'Download CV',
      switchLang: 'ES',
    },
    aboutBlock: {
      title: 'About Me',
      name: 'Ana Karen Hernández Méndez',
      role: 'Content Manager & Social Media Strategist',
      bio: 'Multi-channel content strategist specializing in high-impact copywriting, organic growth, and digital media for global brands, healthcare, and publishing.',
      location: 'Mexico City / Remote',
      emailBtn: 'anakarheme@gmail.com',
    },
    videoBlock: {
      title: 'Featured Presentation & Video',
      subtitle: 'Nissan Insiders & Viral Audiovisual Campaigns',
      watchNow: 'Play Video',
    },
    metricsBlock: {
      card1Title: '+7 YEARS OF EXPERIENCE',
      card1Subtitle: 'Leading multi-channel content strategies & creative teams',
      card2Title: '800K+ ORGANIC REACH ON TIKTOK',
      card2Subtitle: 'Peak views achieved in viral audiovisual campaigns',
    },
    summariesRow: {
      coaTitle: 'COA Dental Clinic & Lab',
      coaDesc: 'Comprehensive healthcare content strategy & CAD/CAM dental lab technology.',
      nissanTitle: 'Nissan Insiders & Social Media',
      nissanDesc: 'Corporate video series & electric mobility campaign strategy.',
      exploreBtn: 'View Summary',
    },
    separator: {
      title: 'Projects',
      subtitle: 'Explore our strategic projects and case studies.',
    },
    justForFun: {
      title: 'Just for Fun',
      subtitle: 'Interactive mobile carousel featuring vertical video content with engagement metrics.',
      placeholderText: 'Mobile Phone',
      slotText: 'Frame container ready to insert video or images',
      likes: 'Likes',
      comments: 'Comments',
      shares: 'Shares',
      saved: 'Saved',
      views: 'Views',
    },
    projectDetail: {
      backBtn: 'Back to Projects',
      titleSuffix: '— Detailed Page',
      subtitle: 'Standalone workspace ready for expanded strategy, deliverables, and media gallery.',
      overviewTitle: 'Project Overview',
      deliverablesTitle: 'Deliverables & Execution',
      kpisTitle: 'Key Metrics & Results',
      placeholderSectionTitle: 'Media & Asset Canvas',
      placeholderSectionDesc: 'This independent page is prepared to integrate high-res visual assets, video clips, and deep-dive documentation.',
    },
    contact: {
      title: 'Direct Contact',
      subtitle: 'Have a project or lead role in mind? Send me a message.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formSubject: 'Subject / Company',
      formMessage: 'Message',
      submitBtn: 'Send Message',
      successMsg: 'Message received! I will get back to you shortly.',
      emailDirect: 'anakarheme@gmail.com',
    },
    cvModal: {
      title: 'Curriculum Vitae — Ana Karen Hernández Méndez',
      subtitle: 'Content Manager & Social Media Strategist',
      summaryTitle: 'Professional Summary',
      skillsTitle: 'Core Skills & Tech Stack',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education & Certifications',
      printBtn: 'Print / PDF',
      closeBtn: 'Close',
    },
  },
};

export const clientBrandsData: Record<Language, ClientBrand[]> = {
  es: [
    {
      id: 'nissan',
      name: 'Nissan',
      category: 'Automotriz & Tecnología',
      logoText: 'NISSAN',
      shortDesc: 'Estrategia de contenido multicanal para Nissan Insiders, YouTube, Instagram, LinkedIn y X.',
      fullDesc: 'Lideré la conceptualización y guionismo de la serie audiovisual "Nissan Insiders", logrando conectar la tecnología de vehículos eléctricos con audiencias jóvenes.',
      deliverables: ['Guiones de YouTube Nissan Insiders', 'Calendario Instagram y X', 'Employer Branding en LinkedIn'],
      kpis: [{ label: 'Vistas Totales', value: '+850K' }, { label: 'Engagement', value: '+42%' }],
      platforms: ['YouTube', 'Instagram', 'LinkedIn', 'X'],
      sampleContent: [
        { title: 'Nissan Insiders Ep 4', type: 'YouTube Script', snippet: 'Acompaña a los ingenieros en esta prueba exclusiva...', views: '320K Vistas' }
      ]
    },
    {
      id: 'uber',
      name: 'Uber',
      category: 'Movilidad & Sustentabilidad',
      logoText: 'UBER',
      shortDesc: 'Gestión de contenidos para Help Center y estrategia editorial de Uber Planet.',
      fullDesc: 'Desarrollé arquitecturas de información claras para el Centro de Ayuda de Uber en LatAm e impulsé la campaña educacional Uber Planet.',
      deliverables: ['UX Copywriting Help Center', 'Campaña Uber Planet', 'Guías de Tono & Voz'],
      kpis: [{ label: 'Reducción Tickets', value: '-18%' }, { label: 'Alcance Users', value: '1.2M' }],
      platforms: ['Help Center UX', 'Blog Oficial', 'In-App'],
      sampleContent: [
        { title: 'Uber Planet Eco Guide', type: 'UX Content', snippet: 'Así neutralizamos tu huella de carbono en cada viaje...', views: '500K Reads' }
      ]
    },
    {
      id: 'thesoul',
      name: 'TheSoul Publishing',
      category: 'Entretenimiento & Contenido Viral',
      logoText: 'THESOUL',
      shortDesc: 'Guionismo viral y estrategia para la franquicia "Bella y Genial".',
      fullDesc: 'Creación de scripts de alto dinamismo para videos cortos y contenidos de estilo de vida en YouTube y Facebook.',
      deliverables: ['Guiones de Video Viral', 'Investigación de Hooks', 'Adaptación Cultural LatAm'],
      kpis: [{ label: 'Vistas Acumuladas', value: '+12M' }, { label: 'Retención 3s', value: '78%' }],
      platforms: ['YouTube Shorts', 'Facebook Watch', 'TikTok'],
      sampleContent: [
        { title: '10 Style Hacks', type: 'Viral Script', snippet: 'Hook: No compres ropa nueva hasta ver el truco #3...', views: '1.4M Views' }
      ]
    },
    {
      id: 'iuv',
      name: 'IUV Universidad',
      category: 'Educación Superior & SEO',
      logoText: 'IUV',
      shortDesc: 'Estrategia de blog institucional, artículos SEO e inbound marketing educativo.',
      fullDesc: 'Diseño e implementación de estrategia SEO para posicionar maestrías y licenciaturas ejecutivas.',
      deliverables: ['Artículos SEO Blog', 'Estrategia de Keywords', 'Copywriting Landing Pages'],
      kpis: [{ label: 'Tráfico Orgánico', value: '+160%' }, { label: 'Leads Mensuales', value: '+350' }],
      platforms: ['WordPress Blog', 'SEO Search', 'Landings'],
      sampleContent: [
        { title: 'Guía Elegir Maestría 2026', type: 'SEO Article', snippet: 'El mercado laboral exige líderes en transformación pública...', views: '#1 Google' }
      ]
    },
    {
      id: 'coa-dental',
      name: 'COA Dental',
      category: 'Salud & Odontología',
      logoText: 'COA DENTAL',
      shortDesc: 'Estrategia de redes sociales, atención al paciente y laboratorio CAD/CAM.',
      fullDesc: 'Diseño de narrativa digital enfocado en la confianza del paciente y tecnología cerámica de precisión.',
      deliverables: ['Estrategia 360° Redes', 'Contenido Laboratorio 3D', 'Mitos Odontológicos'],
      kpis: [{ label: 'Citas Reservadas', value: '+120%' }, { label: 'Engagement Rate', value: '8.4%' }],
      platforms: ['Instagram', 'TikTok', 'Facebook'],
      sampleContent: [
        { title: 'Prótesis 3D CAD/CAM', type: 'Lab Showcase', snippet: 'Así se fabrica una carilla de porcelana en nuestro lab...', views: '180K Reach' }
      ]
    },
    {
      id: 'niebla-magazine',
      name: 'NieblaMagazine',
      category: 'Editorial & Tendencias',
      logoText: 'NIEBLAMAGAZINE',
      shortDesc: 'Cine, música, tendencias virales y análisis de entretenimiento.',
      fullDesc: 'Espacio editorial independiente con carruseles educativos de Instagram y guiones dinámicos para TikTok.',
      deliverables: ['Carruseles Instagram', 'Guiones TikTok Trend', 'Análisis Cinematográfico'],
      kpis: [{ label: 'Guardados/Post', value: '+4.5K' }, { label: 'TikTok Impresiones', value: '650K' }],
      platforms: ['Instagram Carousel', 'TikTok Video', 'Editorial'],
      sampleContent: [
        { title: 'Análisis Cinematográfico', type: 'Reel Caption', snippet: 'El uso de lentes anamórficos provocó ansiedad...', views: '650K Imp' }
      ]
    },
  ],
  en: [
    {
      id: 'nissan',
      name: 'Nissan',
      category: 'Automotive & Tech',
      logoText: 'NISSAN',
      shortDesc: 'Multi-channel content strategy for Nissan Insiders, YouTube, Instagram, LinkedIn & X.',
      fullDesc: 'Led the conceptualization and scriptwriting for the "Nissan Insiders" video series.',
      deliverables: ['Nissan Insiders YouTube Scripts', 'Instagram & X Calendar', 'LinkedIn Employer Branding'],
      kpis: [{ label: 'Total Views', value: '+850K' }, { label: 'Engagement', value: '+42%' }],
      platforms: ['YouTube', 'Instagram', 'LinkedIn', 'X'],
      sampleContent: [
        { title: 'Nissan Insiders Ep 4', type: 'YouTube Script', snippet: 'Join engineers on an exclusive EV test drive...', views: '320K Views' }
      ]
    },
    {
      id: 'uber',
      name: 'Uber',
      category: 'Mobility & Sustainability',
      logoText: 'UBER',
      shortDesc: 'Content management for Help Center and editorial strategy for Uber Planet.',
      fullDesc: 'Developed clear information architecture for Uber Help Center across LatAm and promoted Uber Planet.',
      deliverables: ['UX Copywriting Help Center', 'Uber Planet Campaign', 'Tone & Voice Guide'],
      kpis: [{ label: 'Ticket Reduction', value: '-18%' }, { label: 'User Reach', value: '1.2M' }],
      platforms: ['Help Center UX', 'Official Blog', 'In-App'],
      sampleContent: [
        { title: 'Uber Planet Eco Guide', type: 'UX Content', snippet: 'Here is how we offset your ride footprint...', views: '500K Reads' }
      ]
    },
    {
      id: 'thesoul',
      name: 'TheSoul Publishing',
      category: 'Entertainment & Viral Media',
      logoText: 'THESOUL',
      shortDesc: 'Viral scriptwriting & strategy for "Bella y Genial".',
      fullDesc: 'Created high-pacing video scripts for short-form video and lifestyle channels on YouTube & Facebook.',
      deliverables: ['Viral Video Scripts', '3s Hook Research', 'LatAm Content Adaptation'],
      kpis: [{ label: 'Accumulated Views', value: '+12M' }, { label: '3s Retention', value: '78%' }],
      platforms: ['YouTube Shorts', 'Facebook Watch', 'TikTok'],
      sampleContent: [
        { title: '10 Style Hacks', type: 'Viral Script', snippet: 'Hook: Don\'t buy new clothes until you see hack #3...', views: '1.4M Views' }
      ]
    },
    {
      id: 'iuv',
      name: 'IUV Universidad',
      category: 'Higher Education & SEO',
      logoText: 'IUV',
      shortDesc: 'Institutional blog strategy, SEO articles, and educational inbound marketing.',
      fullDesc: 'Designed and implemented SEO strategy to position Master\'s and Bachelor programs.',
      deliverables: ['SEO Blog Articles', 'Keyword Strategy', 'Landing Page Copywriting'],
      kpis: [{ label: 'Organic Traffic', value: '+160%' }, { label: 'Monthly Leads', value: '+350' }],
      platforms: ['WordPress Blog', 'SEO Search', 'Landings'],
      sampleContent: [
        { title: 'Master\'s Degree Guide 2026', type: 'SEO Article', snippet: 'Today\'s job market demands digital public leaders...', views: '#1 Google' }
      ]
    },
    {
      id: 'coa-dental',
      name: 'COA Dental',
      category: 'Healthcare & Dentistry',
      logoText: 'COA DENTAL',
      shortDesc: 'Social media strategy, patient care, and CAD/CAM lab tech.',
      fullDesc: 'Digital narrative design focused on patient trust and high-tech lab craftsmanship.',
      deliverables: ['360° Social Strategy', '3D Lab Content', 'Dental Myth-Busting'],
      kpis: [{ label: 'Booked Consultations', value: '+120%' }, { label: 'Engagement Rate', value: '8.4%' }],
      platforms: ['Instagram', 'TikTok', 'Facebook'],
      sampleContent: [
        { title: 'CAD/CAM 3D Milling', type: 'Lab Showcase', snippet: 'How porcelain veneers are milled in our lab...', views: '180K Reach' }
      ]
    },
    {
      id: 'niebla-magazine',
      name: 'NieblaMagazine',
      category: 'Editorial & Trends',
      logoText: 'NIEBLAMAGAZINE',
      shortDesc: 'Cinema, music, viral trends, and entertainment analysis.',
      fullDesc: 'Independent editorial space with educational Instagram carousels and TikTok scripts.',
      deliverables: ['Instagram Carousels', 'TikTok Trend Scripts', 'Cinematic Analysis'],
      kpis: [{ label: 'Saves/Post', value: '+4.5K' }, { label: 'TikTok Impressions', value: '650K' }],
      platforms: ['Instagram Carousel', 'TikTok Video', 'Editorial'],
      sampleContent: [
        { title: 'Cinematic Breakdown', type: 'Reel Caption', snippet: 'Anamorphic lens choices induced scene anxiety...', views: '650K Imp' }
      ]
    },
  ],
};

export const projectCasesData: Record<Language, ProjectCase[]> = {
  es: [
    {
      id: 'coa-dental',
      title: 'COA Clínica & Laboratorio Dental',
      subtitle: 'Estrategia de Redes Sociales, Confianza del Paciente & Artesanía Dental',
      category: 'coa-dental',
      tag: 'Sector Salud & Odontología',
      image: '/assets/coa-dental.jpg',
      summary: 'Reinvención de la presencia digital para COA Dental, combinando calidez humana para pacientes con el prestigio tecnológico de su laboratorio dental propio.',
      fullStory: 'El desafío de COA Dental radicaba en comunicar dos pilares: la atención dental clínica empática sin dolor y la precisión técnica de su laboratorio de cerámica digital.',
      metrics: [
        { label: 'Consultas Reservadas', value: '+120%' },
        { label: 'Engagement Rate', value: '8.4%' },
      ],
      contentPillars: [
        'Transformaciones de Sonrisa (Antes/Después)',
        'Tecnología de Laboratorio Dental (CAD/CAM 3D)',
        'Educación Preventiva & Mitos Odontológicos',
      ],
      copies: [
        {
          platform: 'Instagram Carousel',
          hook: '¿Te dijeron que necesitas una corona dental y tienes miedo al dolor? 🦷✨',
          body: 'En COA Dental combinamos anestesia digital indolora con tecnología CAD/CAM.',
          callToAction: 'Agenda tu valoración diagnóstica sin costo.',
        },
      ],
    },
    {
      id: 'nissan',
      title: 'Nissan Insiders & Redes Sociales',
      subtitle: 'Serie Audiovisual Corporativa & Movilidad Eléctrica',
      category: 'nissan',
      tag: 'Automotriz & Tecnología',
      image: '/assets/nissan-insiders.jpg',
      summary: 'Liderazgo de la serie audiovisual Nissan Insiders (+850K vistas orgánicas) y estrategia multicanal en YouTube, Instagram, LinkedIn y X.',
      fullStory: 'Conceptualización y guionismo para conectar los avances en ingeniería automotriz de Nissan con la audiencia joven y ejecutiva.',
      metrics: [
        { label: 'Vistas Totales YouTube', value: '+850K' },
        { label: 'Crecimiento Engagement', value: '+42%' },
      ],
      contentPillars: [
        'Pruebas de Manejo Exclusivas Nissan Insiders',
        'Employer Branding en LinkedIn',
        'Campañas Educativas de Movilidad Eléctrica',
      ],
      copies: [
        {
          platform: 'YouTube Video Script',
          hook: '¿Cómo se siente manejar el futuro antes de que exista en las calles? 🏎️',
          body: 'Acompaña a los ingenieros de Nissan en esta prueba exclusiva de desempeño eléctrico...',
          callToAction: 'Suscríbete al canal oficial de Nissan para más episodios.',
        },
      ],
    },
  ],
  en: [
    {
      id: 'coa-dental',
      title: 'COA Dental Clinic & Laboratory',
      subtitle: 'Social Media Strategy, Patient Trust & Dental Craftsmanship',
      category: 'coa-dental',
      tag: 'Healthcare & Dentistry',
      image: '/assets/coa-dental.jpg',
      summary: 'Digital transformation for COA Dental, pairing warm empathetic patient care with high-tech lab craftsmanship.',
      fullStory: 'COA Dental faced a dual storytelling challenge: positioning their clinic as a pain-free dental office while highlighting their internal CAD/CAM lab.',
      metrics: [
        { label: 'Booked Consultations', value: '+120%' },
        { label: 'Engagement Rate', value: '8.4%' },
      ],
      contentPillars: [
        'Smile Makeovers (Before/After)',
        'Dental Lab Tech Showcase (CAD/CAM 3D)',
        'Preventive Education & Myth-Busting',
      ],
      copies: [
        {
          platform: 'Instagram Carousel',
          hook: 'Told you need a dental crown and terrified of pain? 🦷✨',
          body: 'At COA Dental we pair digital painless anesthesia with CAD/CAM tech.',
          callToAction: 'Book your free diagnosis.',
        },
      ],
    },
    {
      id: 'nissan',
      title: 'Nissan Insiders & Social Media',
      subtitle: 'Corporate Video Series & Electric Mobility',
      category: 'nissan',
      tag: 'Automotive & Tech',
      image: '/assets/nissan-insiders.jpg',
      summary: 'Leadership of the Nissan Insiders video series (+850K organic views) and multi-channel strategy.',
      fullStory: 'Conceptualization and scriptwriting to bridge automotive engineering with young tech-savvy audiences.',
      metrics: [
        { label: 'Total YouTube Views', value: '+850K' },
        { label: 'Engagement Boost', value: '+42%' },
      ],
      contentPillars: [
        'Exclusive Test Drive Nissan Insiders Episodes',
        'LinkedIn Employer Branding',
        'EV Mobility Educational Campaigns',
      ],
      copies: [
        {
          platform: 'YouTube Video Script',
          hook: 'What does it feel like to drive the future before it hits the streets? 🏎️',
          body: 'Join Nissan engineers in this exclusive electric performance test drive...',
          callToAction: 'Subscribe to Nissan official channel for more episodes.',
        },
      ],
    },
  ],
};
