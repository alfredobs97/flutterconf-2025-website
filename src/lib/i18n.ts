import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonES from '../../public/locales/es/common.json';
import commonEN from '../../public/locales/en/common.json';

export const defaultNS = 'common';
export const resources = {
    es: {
        common: commonES,
    },
    en: {
        common: commonEN,
    },
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        defaultNS,
        lng: 'es',
        supportedLngs: ['es', 'en'],
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupQuerystring: 'lang',
            lookupLocalStorage: 'i18nextLng',
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
