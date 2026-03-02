// src/i18n/ui.ts
export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre Mí",
    "nav.contact": "Contacto",
    "nav.menu": "Menu",

    // Hero
    "hero.hello": "Hola, soy ",
    "hero.role": "Desarrollador Full Stack & Data Scientist.",
    "hero.subtitle": "Combinando lógica de ajedrez con potencia de IA.",
    "hero.projectsBtn": "Ver Proyectos",
    "hero.contactBtn": "Contactarme",

    // Projects
    "projects.title1": "Proyectos",
    "projects.title2": "Destacados",
    "projects.filter.all": "[ All_Systems ]",
    "projects.filter.ds": "/ Data_Science",
    "projects.filter.ai": "/ AI_Models",
    "projects.filter.fs": "/ Full_Stack",
    "projects.filter.gd": "/ Game_Dev",
    "projects.modal.category": "Categoría",
    "projects.modal.tech": "Tecnologías",
    "projects.modal.code": "Ver Código",
    "projects.modal.visit": "Visitar Proyecto",

    // Skills
    "skills.title1": "Tech",
    "skills.title2": "Stack",

    // Agrega más textos para About, Certificates, Contact, Footer aquí
    // 'about.title': 'Sobre Mí',
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    // Hero
    "hero.hello": "Hi, I am ",
    "hero.role": "Full Stack Developer & Data Scientist.",
    "hero.subtitle": "Combining chess logic with AI power.",
    "hero.projectsBtn": "View Projects",
    "hero.contactBtn": "Contact Me",

    // Projects
    "projects.title1": "Featured",
    "projects.title2": "Projects",
    "projects.filter.all": "[ All_Systems ]",
    "projects.filter.ds": "/ Data_Science",
    "projects.filter.ai": "/ AI_Models",
    "projects.filter.fs": "/ Full_Stack",
    "projects.filter.gd": "/ Game_Dev",
    "projects.modal.category": "Category",
    "projects.modal.tech": "Technologies",
    "projects.modal.code": "View Code",
    "projects.modal.visit": "Visit Project",

    // Skills
    "skills.title1": "Tech",
    "skills.title2": "Stack",

    // Add more texts for About, Certificates, Contact, Footer here
    // 'about.title': 'About Me',
  },
} as const;
