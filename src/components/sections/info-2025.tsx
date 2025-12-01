'use client';

import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Info() {
    const { t } = useTranslation();

    const faqData = t('info2025.faq', { returnObjects: true });
    const faqItems = Array.isArray(faqData) ? faqData : [];
    return (
        <section id="info" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">{t('info2025.title')}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <MapPin className="h-8 w-8 text-primary" />
                            <CardTitle>{t('info2025.venueTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-left">
                            <p className="font-semibold text-foreground">{t('info2025.venueName')}</p>
                            <a href="https://www.google.com/maps/place/E.T.S.+Ingenier%C3%ADa+de+Telecomunicaci%C3%B3n/@36.7154231,-4.4807153,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f792a7e1178f:0x539e8d2be2651535!8m2!3d36.7154231!4d-4.4781404!16s%2Fg%2F1s05p4vkg?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                {t('info2025.venueAddress')}
                            </a>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                            <CardTitle>{t('info2025.codeOfConductTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{t('info2025.codeOfConductText')} <Link href="/code-of-conduct" className="text-primary underline hover:no-underline">{t('info2025.codeOfConductLink')}</Link>.</p>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <h3 className="text-2xl font-headline font-bold text-center mb-8">{t('info2025.faqTitle')}</h3>
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
