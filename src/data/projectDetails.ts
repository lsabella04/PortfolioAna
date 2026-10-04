import type { Language, DetailedProjectInfo } from '../types';

export const projectDetailsData: Record<Language, Record<string, DetailedProjectInfo>> = {
  es: {
    nissan: {
      id: 'nissan',
      brandName: 'Nissan México / Nissan Insiders / Teran TBWA',
      logoText: 'NISSAN',
      category: 'Automotriz & Estrategia Multicanal',
      mainTitle: 'Nissan & Nissan Insiders: Estrategia Multicanal de Contenido Automotriz',
      introduction:
        'Coordinación de comunicación digital, portavoces y lanzamientos para una de las marcas automotrices más importantes, humanizando la marca a través de historias reales y tecnología.',
      subsections: [
        {
          letter: 'A',
          title: 'PLANEACIÓN ESTRATÉGICA',
          description: 'Estructuración de campañas multicanal, definición de pilares de contenido y guías de voz para lanzamientos y comunicación institucional.',
          formatBadge: 'Estrategia 360° / Roadmap de Contenido',
          mediaType: 'article',
        },
        {
          letter: 'B',
          title: 'REELS',
          description: 'Coordiné la creación de contenido para Instagram de las cuentas personales de los embajadores de Nissan en México y Latinoamérica, participando en diversas etapas como la generación de ideas, edición, redacción de guiones, creación de textos y ajustes finales. Además, brindé asesoría a los embajadores de marca para ayudarlos a crear su propio contenido en redes sociales.',
          formatBadge: 'Reels Verticales / Instagram & TikTok / Embajadores',
          mediaType: 'reels',
        },
        {
          letter: 'C',
          title: 'VÍDEO LARGO',
          description: 'En conjunto con el equipo de Social Media de Nissan México, creamos algunos contenidos para el canal de YouTube donde se incluía la participación de “Nissan Insiders”; con el objetivo de humanizar la marca y compartir historias que van más allá de los autos.\n\nParticipé en etapas clave como la creación de conceptos, redacción de guiones y dirección creativa, asegurando la coherencia con los objetivos y el tono de la marca.',
          formatBadge: 'Video 16:9 / Episodios YouTube 1920x1080',
          mediaType: 'youtube',
        },
        {
          letter: 'D',
          title: 'CARRUSELES/IMÁGENES',
          description: 'Secuencias gráficas explicativas sobre tecnología automotriz, asistencias de manejo y cultura organizacional.',
          formatBadge: 'Carruseles Gráficos / Posts Visuales',
          mediaType: 'infographics',
        },
        {
          letter: 'E',
          title: 'INFOGRAFÍAS',
          description: 'Infografías mensuales de alto impacto visual (Storytelling, guías de prevención de crisis y efemérides).',
          formatBadge: 'Infografías Mensuales / Guía de Crisis',
          mediaType: 'infographics',
        },
        {
          letter: 'F',
          title: 'COPIES',
          description: 'Redacción de textos persuasivos y de inmediatez para lanzamientos de producto y cobertura en tiempo real (X/Twitter y LinkedIn).',
          formatBadge: 'Copywriting / Cobertura en Vivo',
          mediaType: 'twitter',
        },
      ],
    },
    uber: {
      id: 'uber',
      brandName: 'Uber LatAm (Help Center)',
      logoText: 'UBER',
      category: 'Redacción Editorial & UX Writing',
      mainTitle: 'Uber LatAm: Redacción Editorial & Help Center (UX Writing)',
      introduction:
        'Redacción y reestructuración de artículos clave para el centro de ayuda de Uber LatAm, optimizando la claridad operativa y reduciendo las dudas de socios conductores y usuarios.',
      subsections: [
        {
          letter: 'A',
          title: 'ARTÍCULOS DE AYUDA',
          description: 'Redacción de guías operativas, políticas de movilidad sustentable (Uber Planet), protocolos de seguridad y resolución de dudas in-app para usuarios y socios conductores.',
          formatBadge: 'Artículos UX / Help Center / Guías de Usuario',
          mediaType: 'article',
        },
      ],
    },
    thesoul: {
      id: 'thesoul',
      brandName: 'TheSoul Publishing (Revista Bella y Genial)',
      logoText: 'THESOUL',
      category: 'Contenido Editorial & Cultura Pop',
      mainTitle: 'TheSoul Publishing: Contenido Editorial & Cultura Pop',
      introduction:
        'Creación, redacción y edición de artículos de entretenimiento, estilo de vida y cultura pop orientados a conectar masivamente con audiencias digitales móviles.',
      subsections: [
        {
          letter: 'A',
          title: 'CONTENIDO EDITORIAL',
          description: 'Redacción de artículos virales sobre cultura pop, relaciones públicas de famosos, análisis de cine y notas con enfoque de empatía y estilo de vida.',
          formatBadge: 'Artículos Editoriales / Cultura Pop & Estilo de Vida',
          mediaType: 'article',
        },
      ],
    },
    iuv: {
      id: 'iuv',
      brandName: 'IUV Universidad',
      logoText: 'IUV',
      category: 'Blog Institucional & Marketing Educativo',
      mainTitle: 'IUV Universidad: Blog Institucional & Leads Educativos',
      introduction:
        'Reapertura y gestión estratégica del blog institucional mediante artículos originales en colaboración con académicos para incrementar el tráfico orgánico y la atracción de aspirantes.',
      subsections: [
        {
          letter: 'A',
          title: 'NOTAS DE BLOG',
          description: 'Redacción de notas sobre orientación vocacional, vida universitaria, ceremonias académicas y alianzas estratégicas para posicionamiento SEO y atracción de aspirantes.',
          formatBadge: 'Notas de Blog SEO / Contenido Académico',
          mediaType: 'article',
        },
      ],
    },
    'coa-dental': {
      id: 'coa-dental',
      brandName: 'COA Clínica & Laboratorio Dental',
      logoText: 'COA DENTAL',
      category: 'Sector Salud & Artesanía Digital 3D',
      mainTitle: 'COA: Estrategia de Redes Sociales para Clínica y Laboratorio Dental',
      introduction:
        'Diseño y ejecución de la estrategia integral de comunicación digital para ambas entidades, uniendo la sensibilidad en el trato al paciente de la clínica con la precisión técnica y el flujo digital del laboratorio.',
      subsections: [
        {
          letter: 'A',
          title: 'PLANEACIÓN ESTRATÉGICA',
          description: 'Estrategia 360° para la humanización del servicio médico y la proyección técnica del laboratorio dental CAD/CAM.',
          formatBadge: 'Estrategia de Comunicación 360°',
          mediaType: 'article',
        },
        {
          letter: 'B',
          title: 'REELS',
          description: 'Videos dinámicos de detrás de cámaras en laboratorio 3D, testimonios de pacientes y procesos clínicos.',
          formatBadge: 'Reels / TikTok / Detrás de Cámaras',
          mediaType: 'reels',
        },
        {
          letter: 'C',
          title: 'CARRUSELES/IMÁGENES',
          description: 'Publicaciones visuales educativas sobre prevención odontológica, higiene bucal y mitos frecuentes.',
          formatBadge: 'Carruseles Educativos / Posts Gráficos',
          mediaType: 'infographics',
        },
        {
          letter: 'D',
          title: 'INFOGRAFÍAS',
          description: 'Infografías paso a paso explicativas sobre tratamientos dentales y tecnologías cerámicas.',
          formatBadge: 'Infografías Médicas / Guías de Salud',
          mediaType: 'infographics',
        },
        {
          letter: 'E',
          title: 'NOTAS DE BLOG',
          description: 'Artículos de salud bucal y novedades científicas enfocados en SEO y confianza del paciente.',
          formatBadge: 'Notas de Blog / Artículos Odontológicos',
          mediaType: 'article',
        },
        {
          letter: 'F',
          title: 'COPIES',
          description: 'Redacción de textos empáticos para pacientes y copies técnicos B2B para dentistas y odontólogos.',
          formatBadge: 'Copywriting Clínico & B2B',
          mediaType: 'twitter',
        },
        {
          letter: 'G',
          title: 'VÍDEO LARGO',
          description: 'Recorridos guiados por el laboratorio CAD/CAM, entrevistas con especialistas y presentaciones del flujo digital.',
          formatBadge: 'Video 16:9 / Showcase de Laboratorio',
          mediaType: 'youtube',
        },
      ],
    },
    'niebla-magazine': {
      id: 'niebla-magazine',
      brandName: 'NieblaMagazine (Revista Digital de Cultura Pop)',
      logoText: 'NIEBLAMAGAZINE',
      category: 'Editorial Independiente & Tendencias Virales',
      mainTitle: 'Revista Digital de Cultura Pop (TikTok & Instagram)',
      introduction:
        'Proyecto personal enfocado en la experimentación con tendencias, entretenimiento, cine, música y cobertura de eventos virales en redes sociales.',
      subsections: [
        {
          letter: 'A',
          title: 'CARRUSELES',
          description: 'Carruseles de imágenes sobre cultura pop, reseñas de cine, música y galerías temáticas de tendencias.',
          formatBadge: 'Carruseles Gráficos / Galerías Pop',
          mediaType: 'infographics',
        },
        {
          letter: 'B',
          title: 'REELS',
          description: 'Videos verticales virales sobre trends de redes sociales, eventos en vivo y cultura pop.',
          formatBadge: 'Reels Verticales / TikTok Trends',
          mediaType: 'reels',
        },
      ],
    },
  },
  en: {
    nissan: {
      id: 'nissan',
      brandName: 'Nissan Mexico / Nissan Insiders / Teran TBWA',
      logoText: 'NISSAN',
      category: 'Automotive & Multi-Channel Strategy',
      mainTitle: 'Nissan & Nissan Insiders: Multi-Channel Automotive Content Strategy',
      introduction:
        'Digital communication, spokesperson, and campaign launch coordination for one of the leading global automotive brands, humanizing the brand through real storytelling and technology.',
      subsections: [
        {
          letter: 'A',
          title: 'STRATEGIC PLANNING',
          description: 'Multi-channel campaign structuring, content pillar definitions, and brand voice guidelines for product launches and corporate communications.',
          formatBadge: '360° Strategy / Content Roadmap',
          mediaType: 'article',
        },
        {
          letter: 'B',
          title: 'REELS',
          description: 'I coordinated content creation for Instagram across the personal accounts of Nissan brand ambassadors in Mexico and Latin America, participating in various stages such as idea generation, editing, scriptwriting, copy creation, and final adjustments. Additionally, I provided consulting to brand ambassadors to help them create their own social media content.',
          formatBadge: 'Vertical Reels / Shorts / Scripts',
          mediaType: 'reels',
        },
        {
          letter: 'C',
          title: 'LONG VIDEO',
          description: 'Together with the Nissan Mexico Social Media team, we created content for the official YouTube channel featuring "Nissan Insiders", aimed at humanizing the brand and sharing stories beyond cars.\n\nI participated in key stages including concept creation, scriptwriting, and creative direction, ensuring alignment with brand goals and tone.',
          formatBadge: '16:9 Video / YouTube Episodes 1920x1080',
          mediaType: 'youtube',
        },
        {
          letter: 'D',
          title: 'CAROUSELS/IMAGES',
          description: 'Explanatory graphic sequences detailing automotive technology, driving assistance, and company culture.',
          formatBadge: 'Graphic Carousels / Visual Posts',
          mediaType: 'infographics',
        },
        {
          letter: 'E',
          title: 'INFOGRAPHICS',
          description: 'Monthly high-impact visual infographics (Storytelling, crisis management guidelines, and commemorative events).',
          formatBadge: 'Monthly Infographics / Crisis Guide',
          mediaType: 'infographics',
        },
        {
          letter: 'F',
          title: 'COPYWRITING',
          description: 'Persuasive, real-time copywriting for product launches and live event coverage (X/Twitter and LinkedIn).',
          formatBadge: 'Copywriting / Live Coverage',
          mediaType: 'twitter',
        },
      ],
    },
    uber: {
      id: 'uber',
      brandName: 'Uber LatAm (Help Center)',
      logoText: 'UBER',
      category: 'Editorial Writing & UX Writing',
      mainTitle: 'Uber LatAm: Editorial Writing & Help Center (UX Writing)',
      introduction:
        'Drafting and restructuring key Help Center articles across Uber LatAm, improving operational clarity and decreasing user & driver-partner support tickets.',
      subsections: [
        {
          letter: 'A',
          title: 'HELP ARTICLES',
          description: 'Authoring operational guides, sustainable mobility initiatives (Uber Planet), safety protocols, and in-app user troubleshooting guides.',
          formatBadge: 'UX Articles / Help Center / User Guides',
          mediaType: 'article',
        },
      ],
    },
    thesoul: {
      id: 'thesoul',
      brandName: 'TheSoul Publishing (Bella y Genial Magazine)',
      logoText: 'THESOUL',
      category: 'Editorial Content & Pop Culture',
      mainTitle: 'TheSoul Publishing: Editorial Content & Pop Culture',
      introduction:
        'Creation, writing, and editing of viral entertainment, lifestyle, and pop culture articles designed to engage digital mobile audiences at scale.',
      subsections: [
        {
          letter: 'A',
          title: 'EDITORIAL CONTENT',
          description: 'Viral pop culture articles, celebrity public relations analysis, movie reviews, and empathetic lifestyle features.',
          formatBadge: 'Editorial Articles / Pop Culture & Lifestyle',
          mediaType: 'article',
        },
      ],
    },
    iuv: {
      id: 'iuv',
      brandName: 'IUV Universidad',
      logoText: 'IUV',
      category: 'Institutional Blog & Educational Marketing',
      mainTitle: 'IUV Universidad: Institutional Blog & Educational Leads',
      introduction:
        'Strategic relaunch and management of the university blog featuring original academic collaborations to boost organic traffic and student recruitment.',
      subsections: [
        {
          letter: 'A',
          title: 'BLOG POSTS',
          description: 'Blog post drafting covering career guidance, university life, academic ceremonies, and strategic alliances to enhance SEO rankings and student lead generation.',
          formatBadge: 'SEO Blog Posts / Academic Content',
          mediaType: 'article',
        },
      ],
    },
    'coa-dental': {
      id: 'coa-dental',
      brandName: 'COA Dental Clinic & Laboratory',
      logoText: 'COA DENTAL',
      category: 'Healthcare & 3D Digital Craftsmanship',
      mainTitle: 'COA: Social Media Strategy for Dental Clinic & Laboratory',
      introduction:
        'Comprehensive digital communication strategy for both entities, bridging empathetic patient care with the technical precision of CAD/CAM 3D lab milling.',
      subsections: [
        {
          letter: 'A',
          title: 'STRATEGIC PLANNING',
          description: '360° strategy humanizing clinical dental services while spotlighting CAD/CAM 3D lab technology.',
          formatBadge: '360° Communication Strategy',
          mediaType: 'article',
        },
        {
          letter: 'B',
          title: 'REELS',
          description: 'Dynamic behind-the-scenes videos showcasing 3D lab craftsmanship, patient testimonials, and clinical workflows.',
          formatBadge: 'Reels / TikTok / Behind the Scenes',
          mediaType: 'reels',
        },
        {
          letter: 'C',
          title: 'CAROUSELS/IMAGES',
          description: 'Educational visual posts explaining preventive oral care, hygiene, and common dental myths.',
          formatBadge: 'Educational Carousels / Graphic Posts',
          mediaType: 'infographics',
        },
        {
          letter: 'D',
          title: 'INFOGRAPHICS',
          description: 'Step-by-step explanatory dental treatment infographics and ceramic materials showcases.',
          formatBadge: 'Medical Infographics / Health Guides',
          mediaType: 'infographics',
        },
        {
          letter: 'E',
          title: 'BLOG POSTS',
          description: 'Oral health articles and scientific updates focused on SEO positioning and patient trust.',
          formatBadge: 'Blog Posts / Dental Articles',
          mediaType: 'article',
        },
        {
          letter: 'F',
          title: 'COPYWRITING',
          description: 'Empathetic patient-facing copy and technical B2B copy tailored for dentists and dental surgeons.',
          formatBadge: 'Clinical & B2B Copywriting',
          mediaType: 'twitter',
        },
        {
          letter: 'G',
          title: 'LONG VIDEO',
          description: 'Guided CAD/CAM lab tours, specialist interviews, and digital dentistry workflow presentations.',
          formatBadge: '16:9 Video / Laboratory Showcase',
          mediaType: 'youtube',
        },
      ],
    },
    'niebla-magazine': {
      id: 'niebla-magazine',
      brandName: 'NieblaMagazine (Digital Pop Culture Magazine)',
      logoText: 'NIEBLAMAGAZINE',
      category: 'Independent Editorial & Viral Trends',
      mainTitle: 'Digital Pop Culture Magazine (TikTok & Instagram)',
      introduction:
        'Personal editorial project focused on trend experimentation, entertainment news, cinema, music, and viral social media event coverage.',
      subsections: [
        {
          letter: 'A',
          title: 'CAROUSELS',
          description: 'Graphic image carousels covering pop culture, film reviews, music, and viral trend galleries.',
          formatBadge: 'Graphic Carousels / Pop Galleries',
          mediaType: 'infographics',
        },
        {
          letter: 'B',
          title: 'REELS',
          description: 'Vertical viral videos covering social media trends, live music shows, and pop culture events.',
          formatBadge: 'Vertical Reels / TikTok Trends',
          mediaType: 'reels',
        },
      ],
    },
  },
};
