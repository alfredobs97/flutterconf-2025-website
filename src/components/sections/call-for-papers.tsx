'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function CallForPapers() {
    const { t } = useTranslation();
    return (
        <section id="call-for-papers" className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <Mic className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl sm:text-4xl font-headline font-bold">
                            <Link href="#call-for-papers" className="hover:text-primary transition-colors">{t('callForPapers.title')}</Link>
                        </CardTitle>
                        <CardDescription className="text-lg mt-4">
                            {t('callForPapers.subtitle')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <p className="text-muted-foreground text-center max-w-2xl">
                            {t('callForPapers.description')}
                        </p>
                        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 font-semibold text-lg mt-4">
                            <a href="https://forms.gle/mMT5JK7FuiHnLVoF9" target="_blank" rel="noopener noreferrer">
                                {t('callForPapers.submitButton')} <ExternalLink className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
