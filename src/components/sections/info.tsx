'use client';

import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Info() {
    const { t } = useTranslation();

    const faqData = t('info.faq', { returnObjects: true });
    const faqItems = Array.isArray(faqData) ? faqData : [];

    return (
        <section id="info" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                        <Link href="#info" className="hover:text-primary transition-colors">{t('info.title')}</Link>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <MapPin className="h-8 w-8 text-primary" />
                            <CardTitle>{t('info.venueTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-left">
                            <a href="https://maps.app.goo.gl/M97HgC2hcrkPEymn6" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">{t('info.venueName')}</a>
                            <p className="text-muted-foreground">{t('info.venueLocation')}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                            <CardTitle>{t('info.codeOfConductTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{t('info.codeOfConductText')} <Link href="/code-of-conduct" className="text-primary underline hover:no-underline">{t('info.codeOfConductLink')}</Link>.</p>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <h3 className="text-2xl font-headline font-bold text-center mb-8">{t('info.faqTitle')}</h3>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
