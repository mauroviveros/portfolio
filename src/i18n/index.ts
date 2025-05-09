import es from './es.json';
import en from './en.json';

const translations = { es, en };
export const locales = [
    { _id: 'es', name: 'Español', icon: "twemoji:flag-argentina" },
    { _id: 'en', name: 'English', icon: "twemoji:flag-united-states" },
]

const replaceVars = (string: string, variables?: Record<string, string>) => {
    if(!variables) return string;
    return string.replace(/\{\{(\w+)\}\}/g, (pattern, key) => {
        return variables[key] ?? pattern;
    });
}

export const useTranslations = (language?: string) => {
    if(!language) return (id: string) => id;
    const json = translations[language as  keyof typeof translations] as Record<string, string>;
    return (id: string, variables?: Record<string, string>) => replaceVars(json[id] ?? id, variables);
}