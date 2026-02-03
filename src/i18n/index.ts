type Translations = Record<string, Record<string, string>>;
const modules = import.meta.glob('./*.json', { eager: true }) as Record<
    string,
    { default: Record<string, string> }
>;
const translations = Object.entries(modules).reduce<Translations>((obj, [path, module]) => {
    const code = path.replace('./', '').replace('.json', '');
    obj[code] = module.default;

    return obj;
}, {});

const LOCALES: Record<string, { language: string; icon: string }> = {
  es: { language: 'Español', icon: 'twemoji:flag-argentina' },
  en: { language: 'English', icon: 'twemoji:flag-united-states' },
}

export const locales = Object.keys(translations).map((code) => ({
  code,
    language: LOCALES[code]?.language ?? code,
    icon: LOCALES[code]?.icon ?? 'twemoji:flag-white'
}));



const replaceVars = (string: string, variables?: Record<string, string>) => {
    if (!variables) return string;
    return string.replace(/\{\{\s*(\w+)\s*\}\}/g, (pattern, key) => {
        return variables[key] ?? pattern;
    });
}

export const useTranslations = (language?: string) => {
    if (!language) return (id: string) => id;
    const json = translations[language as keyof typeof translations];
    return (id: string, variables?: Record<string, string>) => replaceVars(json?.[id] ?? id, variables);
}
