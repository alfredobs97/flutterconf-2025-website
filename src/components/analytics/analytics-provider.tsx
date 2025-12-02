'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { logEvent } from 'firebase/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const trackPageView = async () => {
            const { analytics } = await import('@/lib/firebase').then(mod => mod.initFirebase());
            if (analytics) {
                logEvent(analytics, 'page_view', {
                    page_path: pathname,
                    page_search: searchParams?.toString(),
                });
            }
        };
        trackPageView();
    }, [pathname, searchParams]);

    return <>{children}</>;
}
