// src/i18n/ui.ts
export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.saas': 'Soluciones B2B',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
    'nav.cert': 'Educación',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menu',
    
    // Hero
    'hero.hello': 'Hola, soy ',
    'hero.role': 'Desarrollador Full Stack & Data Scientist.',
    'hero.subtitle': 'Combinando lógica de ajedrez con potencia de IA.',
    'hero.projectsBtn': 'Ver Proyectos',
    'hero.contactBtn': 'Contactarme',

    // Projects
    'projects.title1': 'Proyectos',
    'projects.title2': 'Destacados',
    'projects.filter.all': '[ All_Systems ]',
    'projects.filter.ds': '/ Data_Science',
    'projects.filter.ai': '/ AI_Models',
    'projects.filter.fs': '/ Full_Stack',
    'projects.filter.gd': '/ Game_Dev',
    'projects.modal.category': 'Categoría',
    'projects.modal.tech': 'Tecnologías',
    'projects.modal.code': 'Ver Código',
    'projects.modal.visit': 'Visitar Proyecto',

    // Skills
    'skills.title1': 'Tech',
    'skills.title2': 'Stack',
    
    // About
    'about.label': 'System.UserInfo.Load()',
    'about.title1': 'Más que código, ',
    'about.title2': 'arquitecturas que resuelven problemas reales',
    'about.p1.1a': 'Tengo ',
    'about.p1.1b': ' años y soy de ',
    'about.p1.2': '. Mi base técnica viene de la ',
    'about.p1.career': 'Electromecánica',
    'about.p1.3': ', lo que me enseñó a entender y desarmar sistemas complejos desde sus componentes físicos hasta su lógica interna.',
    'about.p2.1': 'Hoy aplico esa misma mentalidad analítica al ecosistema digital. Mientras consolido mi perfil académico en ',
    'about.p2.ds': 'Ciencia de Datos (Siglo 21)',
    'about.p2.2': ' y ',
    'about.p2.dev': 'Desarrollo de Software (CESIT 9-023)',
    'about.p2.3': ', me dedico a construir plataformas que generan impacto directo en los usuarios y negocios.',
    'about.p3.1': 'Me especializo en encontrar patrones donde otros ven ruido. Ya sea desarrollando un SaaS B2B para gestión empresarial, diseñando sistemas de alerta temprana para el sector salud con ',
    'about.p3.lstm': 'Machine Learning',
    'about.p3.2': ', o analizando datos climáticos, mi objetivo es el mismo: transformar la tecnología en herramientas inteligentes para la toma de decisiones.',
    'about.stats.years': 'AÑOS DE ESTUDIO',
    'about.stats.projects': 'PROYECTOS COMPLETADOS',
    'about.cv': 'Descargar CV',
    'about.role': 'Data Scientist // Dev',

    // Certificates
    'cert.title1': 'Formación ',
    'cert.title2': '& Certificaciones',
    
    'cert.uni1.title': 'Tecnicatura en Desarrollo de Software',
    'cert.uni1.gpa': 'Promedio Actual: 9.53 / 10',
    'cert.uni1.1': 'Programación II (Nota: 10)',
    'cert.uni1.2': 'Bases de Datos I (Nota: 10)',
    'cert.uni1.3': 'Lógica Computacional (Nota: 10)',
    'cert.uni1.date': '2024 - Presente',

    'cert.uni2.title': 'Licenciatura en Ciencia de Datos',
    'cert.uni2.gpa': 'Promedio General: 8.55 / 10',
    'cert.uni2.1': 'Análisis Matemático',
    'cert.uni2.2': 'Computación en la Nube',
    'cert.uni2.3': 'Análisis de Datos',
    'cert.uni2.date': '2025 - Presente',

    'cert.ds.title': 'Carrera de Data Science',
    'cert.ds.desc': 'Formación integral cubriendo el ciclo completo de vida del dato.',
    'cert.ds.1': 'Data Science I: Fundamentos y Visualización',
    'cert.ds.2': 'Data Science II: Machine Learning Supervisado',
    'cert.ds.3': 'Data Science III: NLP & Deep Learning',
    'cert.ds.date': '2023 - 2025',
    
    'cert.esp.title': 'Cursos de Especialización',
    'cert.esp.desc': 'Formación complementaria para ampliar el stack tecnológico.',
    'cert.esp.1': 'Power BI: Dashboarding y Business Intelligence',
    'cert.esp.2': 'IA Generativa: Prompt Engineering y LLMs',
    'cert.esp.3': 'Gestión Ágil de Proyectos',
    'cert.esp.4': 'Data Science Ethics - University of Michigan',
    'cert.esp.date': 'Abril 2026',

    // Production SaaS
    'saas.title1': 'Soluciones en ',
    'saas.title2': 'Producción',
    'saas.metrics.users': 'Usuarios Activos',
    'saas.metrics.clients': 'Clientes B2B',
    'saas.status.active': 'En Producción',
    'saas.status.dev': 'Desarrollo Activo',
    'saas.status.paused': 'Pausado',
    'saas.soon': 'Próximamente',
    'saas.visit': 'Visitar App',
    'saas.visitSite': 'Visitar Sitio',
    'saas.landing': 'Ver Landing',

    'saas.af.desc': 'Plataforma SaaS integral para la gestión de gimnasios y rutinas maestras. Arquitectura segura con validación global de estado en middleware y políticas RLS estrictas. Implementación de Service Workers para soporte PWA y optimización de peticiones. Sistema testeado al 100% mediante pruebas E2E.',
    'saas.tr.desc': 'Plataforma B2B2C que gamifica el running y potencia la economía local. El sistema conecta a deportistas con comercios mediante recompensas: los usuarios acumulan kilómetros (sincronizados vía API de Strava) y los canjean por descuentos exclusivos usando códigos QR dinámicos.',
    'saas.tr.status_detailed': '⏸️ Status: Desarrollo pausado temporalmente.',
    'saas.he.desc': 'Sitio oficial y plataforma de gestión con roles diferenciados para participantes, jueces y mentores del evento.',

    // Services
    'services.title1': 'Mis ',
    'services.title2': 'Servicios',
    'services.subtitle': 'Soluciones a medida para cada necesidad digital.',
    'services.cta': 'Contactar',

    'services.t1.title': 'Desarrollo Web & Landing Pages',
    'services.t1.desc': 'Sitios web modernos, responsivos y optimizados para SEO y conversión.',
    'services.t1.price': 'Desde $150 USD',
    'services.t1.f1': 'Diseño 100% responsivo y moderno',
    'services.t1.f2': 'Optimización SEO y rendimiento',
    'services.t1.f3': 'Despliegue y configuración de dominio',
    'services.t1.f4': 'Soporte y mantenimiento inicial',

    'services.t2.title': 'Sistemas a Medida / SaaS',
    'services.t2.desc': 'Aplicaciones robustas a gran escala con arquitecturas seguras y modulares.',
    'services.t2.badge': 'Popular',
    'services.t2.price': 'Desde $500 USD',
    'services.t2.f1': 'Arquitectura escalable Full Stack',
    'services.t2.f2': 'Autenticación avanzada y roles (RBAC)',
    'services.t2.f3': 'Base de datos y API REST/GraphQL',
    'services.t2.f4': 'Pruebas automatizadas y E2E',

    'services.t3.title': 'Consultoría en Datos & IA',
    'services.t3.desc': 'Análisis estadístico, predicciones e integraciones de modelos inteligentes.',
    'services.t3.price': 'Consultar',
    'services.t3.f1': 'Análisis exploratorio de datos (EDA)',
    'services.t3.f2': 'Modelos predictivos de Machine Learning',
    'services.t3.f3': 'Dashboards interactivos en tiempo real',
    'services.t3.f4': 'Consultoría en automatización e IA',

    // Contact
    'contact.title1': 'Hablemos',
    'contact.title2': '.',
    'contact.subtitle1': '¿Tienes una pregunta, una propuesta o simplemente quieres saludar?',
    'contact.subtitle2': 'Mi bandeja de entrada está siempre abierta.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',

    // Footer
    'footer.rights': 'Matias Nahuel Ghilardi. Casi todos los derechos reservados.',
    'footer.powered': 'Powered by ',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.saas': 'B2B Solutions',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.cert': 'Education',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    
    // Hero
    'hero.hello': 'Hi, I am ',
    'hero.role': 'Full Stack Developer & Data Scientist.',
    'hero.subtitle': 'Combining chess logic with AI power.',
    'hero.projectsBtn': 'View Projects',
    'hero.contactBtn': 'Contact Me',

    // Projects
    'projects.title1': 'Featured',
    'projects.title2': 'Projects',
    'projects.filter.all': '[ All_Systems ]',
    'projects.filter.ds': '/ Data_Science',
    'projects.filter.ai': '/ AI_Models',
    'projects.filter.fs': '/ Full_Stack',
    'projects.filter.gd': '/ Game_Dev',
    'projects.modal.category': 'Category',
    'projects.modal.tech': 'Technologies',
    'projects.modal.code': 'View Code',
    'projects.modal.visit': 'Visit Project',

    // Skills
    'skills.title1': 'Tech',
    'skills.title2': 'Stack',
    
    // About
    'about.label': 'System.UserInfo.Load()',
    'about.title1': 'Beyond code: ',
    'about.title2': 'building architectures that solve real-world problems',
    'about.p1.1a': 'I am ',
    'about.p1.1b': ' years old and from ',
    'about.p1.2': '. My technical background comes from ',
    'about.p1.career': 'Electromechanics',
    'about.p1.3': ', which taught me to understand and dismantle complex systems from their physical components to their internal logic.',
    'about.p2.1': 'Today, I apply that same analytical mindset to the digital ecosystem. While consolidating my academic profile in ',
    'about.p2.ds': 'Data Science (Siglo 21)',
    'about.p2.2': ' and ',
    'about.p2.dev': 'Software Development (CESIT 9-023)',
    'about.p2.3': ', I am dedicated to building platforms that generate a direct impact on users and businesses.',
    'about.p3.1': 'I specialize in finding patterns where others see noise. Whether developing a B2B SaaS for business management, designing early warning systems for the healthcare sector using ',
    'about.p3.lstm': 'Machine Learning',
    'about.p3.2': ', or analyzing climate data, my goal remains the same: to transform technology into smart tools for decision-making.',
    'about.stats.years': 'YEARS OF STUDY',
    'about.stats.projects': 'COMPLETED PROJECTS',
    'about.cv': 'Download CV',
    'about.role': 'Data Scientist // Dev',

    // Certificates
    'cert.title1': 'Education ',
    'cert.title2': '& Certifications',

    'cert.uni1.title': 'Software Development Degree',
    'cert.uni1.gpa': 'Current GPA: 9.53 / 10',
    'cert.uni1.1': 'Programming II (Grade: 10)',
    'cert.uni1.2': 'Databases I (Grade: 10)',
    'cert.uni1.3': 'Computational Logic (Grade: 10)',
    'cert.uni1.date': '2024 - Present',

    'cert.uni2.title': 'Bachelor in Data Science',
    'cert.uni2.gpa': 'Overall GPA: 8.55 / 10',
    'cert.uni2.1': 'Mathematical Analysis',
    'cert.uni2.2': 'Cloud Computing',
    'cert.uni2.3': 'Data Analysis',
    'cert.uni2.date': '2024 - Present',

    'cert.ds.title': 'Data Science Career',
    'cert.ds.desc': 'Comprehensive training covering the full data lifecycle.',
    'cert.ds.1': 'Data Science I: Fundamentals & Visualization',
    'cert.ds.2': 'Data Science II: Supervised Machine Learning',
    'cert.ds.3': 'Data Science III: NLP & Deep Learning',
    'cert.ds.date': '2024',

    'cert.esp.title': 'Specialization Courses',
    'cert.esp.desc': 'Complementary training to expand the tech stack.',
    'cert.esp.1': 'Power BI: Dashboarding & Business Intelligence',
    'cert.esp.2': 'Generative AI: Prompt Engineering & LLMs',
    'cert.esp.3': 'Agile Project Management',
    'cert.esp.4': 'Data Science Ethics - University of Michigan',
    'cert.esp.date': 'April 2026',

    // Production SaaS
    'saas.title1': 'Production ',
    'saas.title2': 'Solutions',
    'saas.metrics.users': 'Active Users',
    'saas.metrics.clients': 'B2B Clients',
    'saas.status.active': 'In Production',
    'saas.status.dev': 'Active Development',
    'saas.status.paused': 'On Hold',
    'saas.soon': 'Coming Soon',
    'saas.visit': 'Visit App',
    'saas.visitSite': 'Visit Site',
    'saas.landing': 'View Landing',

    'saas.af.desc': 'Comprehensive SaaS platform for gym management and master routines. Secure architecture with global state validation in middleware and strict RLS policies. Service Workers implementation for PWA support and request optimization. 100% End-to-End tested system.',
    'saas.tr.desc': 'B2B2C platform that gamifies running and boosts the local economy. The system connects athletes with businesses through rewards: users accumulate kilometers (synced via Strava API) and redeem them for exclusive discounts using dynamic QR codes.',
    'saas.tr.status_detailed': '⏸️ Status: Development temporarily paused.',
    'saas.he.desc': 'Official website and management platform with differentiated roles for participants, judges and event mentors.',

    // Services
    'services.title1': 'My ',
    'services.title2': 'Services',
    'services.subtitle': 'Tailored solutions for every digital need.',
    'services.cta': 'Contact',

    'services.t1.title': 'Web Development & Landing Pages',
    'services.t1.desc': 'Modern, responsive websites optimized for SEO and conversion.',
    'services.t1.price': 'From $150 USD',
    'services.t1.f1': '100% responsive and modern design',
    'services.t1.f2': 'SEO optimization and performance',
    'services.t1.f3': 'Deployment & domain configuration',
    'services.t1.f4': 'Initial support and maintenance',

    'services.t2.title': 'Custom Systems / SaaS',
    'services.t2.desc': 'Robust large-scale applications with secure and modular architectures.',
    'services.t2.badge': 'Popular',
    'services.t2.price': 'From $500 USD',
    'services.t2.f1': 'Scalable Full Stack architecture',
    'services.t2.f2': 'Advanced authentication & roles (RBAC)',
    'services.t2.f3': 'Database and REST/GraphQL API',
    'services.t2.f4': 'Automated and E2E testing',

    'services.t3.title': 'Data & AI Consulting',
    'services.t3.desc': 'Statistical analysis, predictions, and integration of intelligent models.',
    'services.t3.price': 'Inquire',
    'services.t3.f1': 'Exploratory data analysis (EDA)',
    'services.t3.f2': 'Predictive Machine Learning models',
    'services.t3.f3': 'Real-time interactive dashboards',
    'services.t3.f4': 'Consulting on automation and AI',

    // Contact
    'contact.title1': 'Let\'s talk',
    'contact.title2': '.',
    'contact.subtitle1': 'Do you have a question, a proposal, or just want to say hi?',
    'contact.subtitle2': 'My inbox is always open.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Footer
    'footer.rights': 'Matias Nahuel Ghilardi. Almost all rights reserved.',
    'footer.powered': 'Powered by ',
  },
} as const;
