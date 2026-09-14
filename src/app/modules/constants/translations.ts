import { Locales } from "../models/locale.type";

export const SECTION_TRANSLATIONS: Record<Locales, {
    aboutMe: string;
    languages: string;
    databases: string;
    technologies: string;
    projects: string;
    contactMe: string;
}> = {
    'pt-BR': {
        aboutMe: 'Sobre mim',
        languages: 'Linguagens',
        databases: 'Banco de Dados',
        technologies: 'Tecnologias',
        projects: 'Projetos',
        contactMe: 'Entre em contato'
    },
    'en-US': {
        aboutMe: 'About me',
        languages: 'Languages',
        databases: 'Databases',
        technologies: 'Technologies',
        projects: 'Projects',
        contactMe: 'Contact me'
    },
    'es-ES': {
        aboutMe: 'Sobre mí',
        languages: 'Lenguajes',
        databases: 'Bases de datos',
        technologies: 'Tecnologías',
        projects: 'Proyectos',
        contactMe: 'Ponte en contacto'
    },
    'fr-FR': {
        aboutMe: 'À propos de moi',
        languages: 'Langages',
        databases: 'Bases de données',
        technologies: 'Technologies',
        projects: 'Projets',
        contactMe: 'Contactez-moi'
    }
};