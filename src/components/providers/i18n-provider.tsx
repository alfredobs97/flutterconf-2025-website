'use client';

import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect, useState } from 'react';

// Import translation files
import commonES from '../../../public/locales/es/common.json';
import commonEN from '../../../public/locales/en/common.json';

const resources = {
    es: {
        common: commonES,
    },
    en: {
        common: commonEN,
    },
};


// Initialize i18next
if (!i18n.isInitialized) {
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'en',
            defaultNS: 'common',
            lng: undefined, // Let detector handle it
            supportedLngs: ['es', 'en'],
            nonExplicitSupportedLngs: true,
            detection: {
                order: ['cookie', 'querystring', 'navigator'],
                caches: [],
                lookupQuerystring: 'lang',
                lookupCookie: 'user_lang',
            },
            interpolation: {
                escapeValue: false,
            },
            react: {
                useSuspense: false,
            },
        });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    if (!isReady) {
        return null; // Or a loading spinner
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
