import es from './es.json';

const translations = { es, en: {} };
export const locales = Object.keys(translations);

export const useTranslations = (language?: string) => {
    if(!language) return (id: string) => id;
    const json = translations[language as  keyof typeof translations] as Record<string, string>;
    return (id: string) => json[id] ?? id;
}