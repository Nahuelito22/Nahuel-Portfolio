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
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
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
    'about.title2': 'resolución de problemas',
    'about.p1.1a': 'Tengo ',
    'about.p1.1b': ' años y soy de ',
    'about.p1.2': '. Mi base técnica viene de la ',
    'about.p1.3': ', lo que me enseñó a entender los sistemas desde sus componentes físicos.',
    'about.p2.1': 'Actualmente, combino esa lógica estructurada con mi pasión por el software. Estoy cursando la ',
    'about.p2.ds': 'Licenciatura en Ciencia de Datos',
    'about.p2.2': ' (Siglo 21) y la ',
    'about.p2.dev': 'Tecnicatura en Desarrollo de Software',
    'about.p2.3': ' (Cesit 9-023).',
    'about.p3.1': 'Me especializo en encontrar patrones donde otros ven ruido. Ya sea entrenando una ',
    'about.p3.lstm': 'red neuronal LSTM',
    'about.p3.2': ' para jugar ajedrez o analizando datos climáticos para prevenir granizo, mi objetivo es el mismo: usar la tecnología para tomar decisiones más inteligentes.',
    'about.stats.years': 'AÑOS DE ESTUDIO',
    'about.stats.projects': 'PROYECTOS COMPLETADOS',
    'about.cv': 'Descargar CV',
    'about.role': 'Data Scientist // Dev',

    // Certificates
    'cert.title1': 'Formación ',
    'cert.title2': '& Certificaciones',
    
    'cert.uni1.title': 'Tecnicatura en Desarrollo de Software',
    'cert.uni1.desc': 'Formación integral técnica enfocada en el diseño, desarrollo y despliegue de software.',
    'cert.uni1.1': 'Programación Estructurada y Orientada a Objetos',
    'cert.uni1.2': 'Bases de Datos y Arquitecturas Web',
    'cert.uni1.3': 'Desarrollo Full Stack',
    'cert.uni1.date': '2024 - Presente',

    'cert.uni2.title': 'Licenciatura en Ciencia de Datos',
    'cert.uni2.desc': 'Grado académico enfocado en ingeniería de datos, modelos estadísticos y matemáticas aplicadas.',
    'cert.uni2.1': 'Estadística y Probabilidad',
    'cert.uni2.2': 'Machine Learning y Toma de Decisiones',
    'cert.uni2.3': 'Big Data e Infraestructura Cloud',
    'cert.uni2.date': '2024 - Presente',

    'cert.ds.title': 'Carrera de Data Science',
    'cert.ds.desc': 'Formación integral cubriendo el ciclo completo de vida del dato.',
    'cert.ds.1': 'Data Science I: Fundamentos y Visualización',
    'cert.ds.2': 'Data Science II: Machine Learning Supervisado',
    'cert.ds.3': 'Data Science III: NLP & Deep Learning',
    'cert.ds.date': '2024',
    
    'cert.esp.title': 'Cursos de Especialización',
    'cert.esp.desc': 'Formación complementaria para ampliar el stack tecnológico.',
    'cert.esp.1': 'Power BI: Dashboarding y Business Intelligence',
    'cert.esp.2': 'IA Generativa: Prompt Engineering y LLMs',
    'cert.esp.3': 'Gestión Ágil de Proyectos',
    'cert.esp.date': '2024',

    // Production SaaS
    'saas.title1': 'Soluciones en ',
    'saas.title2': 'Producción',
    'saas.metrics.users': 'Usuarios Activos',
    'saas.metrics.clients': 'Clientes B2B',
    'saas.status.active': 'En Producción',
    'saas.status.dev': 'Desarrollo Activo',
    'saas.soon': 'Próximamente',
    'saas.visit': 'Visitar App',
    'saas.landing': 'Ver Landing',

    'saas.af.desc': 'Plataforma SaaS integral para la gestión de gimnasios y rutinas maestras. Arquitectura segura con validación global de estado en middleware y políticas RLS estrictas. Implementación de Service Workers para soporte PWA y optimización de peticiones. Sistema testeado al 100% mediante pruebas E2E.',
    'saas.tr.desc': 'Sistema integral de gestión para carreras de Trail Running. Control de inscripciones, pasarelas de pago, acreditación por QR y tracking de resultados en vivo. Orquestado para soportar picos de alta demanda de inscripciones simultáneas.',

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
    'nav.projects': 'Projects',
    'nav.about': 'About',
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
    'about.title1': 'More than code, ',
    'about.title2': 'problem-solving',
    'about.p1.1a': 'I am ',
    'about.p1.1b': ' years old from ',
    'about.p1.2': '. My technical background comes from ',
    'about.p1.3': ', which taught me to understand systems from their physical components.',
    'about.p2.1': 'Currently, I combine that structured logic with my passion for software. I am studying a bachelor in ',
    'about.p2.ds': 'Data Science',
    'about.p2.2': ' (Siglo 21) and a degree in ',
    'about.p2.dev': 'Software Development',
    'about.p2.3': ' (Cesit 9-023).',
    'about.p3.1': 'I specialize in finding patterns where others see noise. Whether training an ',
    'about.p3.lstm': 'LSTM neural network',
    'about.p3.2': ' to play chess or analyzing climate data to prevent hail, my goal is the same: using technology to make smarter decisions.',
    'about.stats.years': 'YEARS OF STUDY',
    'about.stats.projects': 'COMPLETED PROJECTS',
    'about.cv': 'Download CV',
    'about.role': 'Data Scientist // Dev',

    // Certificates
    'cert.title1': 'Education ',
    'cert.title2': '& Certifications',

    'cert.uni1.title': 'Software Development Degree',
    'cert.uni1.desc': 'Comprehensive technical training focused on software design, development, and deployment.',
    'cert.uni1.1': 'Structured and Object-Oriented Programming',
    'cert.uni1.2': 'Databases and Web Architectures',
    'cert.uni1.3': 'Full Stack Development',
    'cert.uni1.date': '2024 - Present',

    'cert.uni2.title': 'Bachelor in Data Science',
    'cert.uni2.desc': 'Academic degree focused on data engineering, statistical models, and applied mathematics.',
    'cert.uni2.1': 'Statistics and Probability',
    'cert.uni2.2': 'Machine Learning and Decision Making',
    'cert.uni2.3': 'Big Data and Cloud Infrastructure',
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
    'cert.esp.date': '2024',

    // Production SaaS
    'saas.title1': 'Production ',
    'saas.title2': 'Solutions',
    'saas.metrics.users': 'Active Users',
    'saas.metrics.clients': 'B2B Clients',
    'saas.status.active': 'In Production',
    'saas.status.dev': 'Active Development',
    'saas.soon': 'Coming Soon',
    'saas.visit': 'Visit App',
    'saas.landing': 'View Landing',

    'saas.af.desc': 'Comprehensive SaaS platform for gym management and master routines. Secure architecture with global state validation in middleware and strict RLS policies. Service Workers implementation for PWA support and request optimization. 100% End-to-End tested system.',
    'saas.tr.desc': 'Comprehensive management system for Trail Running races. Registration control, payment gateways, QR accreditation, and live results tracking. Orchestrated to handle high-demand concurrency during signups.',

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
