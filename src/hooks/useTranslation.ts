'use client';

import { useTranslation as useTranslationBase } from 'react-i18next';
import { useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function useTranslation() {
    const { t, i18n } = useTranslationBase();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    // Sync language with URL and localStorage
    useEffect(() => {
        const urlLang = searchParams.get('lang');
        const storedLang = localStorage.getItem('i18nextLng');

        if (urlLang && ['es', 'en'].includes(urlLang)) {
            if (i18n.language !== urlLang) {
                i18n.changeLanguage(urlLang);
            }
        } else if (storedLang && ['es', 'en'].includes(storedLang)) {
            if (i18n.language !== storedLang) {
                i18n.changeLanguage(storedLang);
            }
        }
    }, [searchParams, i18n]);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);

        // Update URL with language parameter
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', lang);
        const newUrl = `${pathname}?${params.toString()}`;
        router.push(newUrl, { scroll: false });
    };

    return {
        t,
        language: i18n.language,
        changeLanguage,
    };
}
