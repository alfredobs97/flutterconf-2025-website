'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Volunteers() {
    const { t } = useTranslation();

    const handleTrackClick = () => {
        import('@/lib/firebase').then(({ initFirebase }) => {
            initFirebase().then(({ analytics }) => {
                if (analytics) {
                    import('firebase/analytics').then(({ logEvent }) => {
                        logEvent(analytics, 'select_content', {
                            content_type: 'volunteers',
                            content_id: 'volunteers_signup'
                        });
                    });
                }
            });
        });
    };

    return (
        <section id="volunteers" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <Users className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl sm:text-4xl font-headline font-bold">
                            <Link href="#volunteers" className="hover:text-primary transition-colors">{t('volunteers.title')}</Link>
                        </CardTitle>
                        <CardDescription className="text-lg mt-4">
                            {t('volunteers.subtitle')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <p className="text-muted-foreground text-center max-w-2xl">
                            {t('volunteers.description')}
                        </p>
                        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 font-semibold text-lg mt-4">
                            <a
                                href="https://forms.gle/jHrYPEyrCL4JPiPLA"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleTrackClick}
                            >
                                {t('volunteers.submitButton')} <ExternalLink className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
