'use client';

import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Info() {
    const { t } = useTranslation();

    const faqData = t('info.faq', { returnObjects: true });
    const faqItems = Array.isArray(faqData) ? faqData : [];

    const principlesData = t('info.codeOfConductPrinciples', { returnObjects: true });
    const principles = Array.isArray(principlesData) ? principlesData : [];

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
                        <CardContent className="text-left space-y-6">
                            <div className="space-y-3">
                                <p className="font-bold text-primary">{t('info.conferenceDay')}</p>
                                <div className="flex flex-col space-y-2">
                                    <div className="h-20 flex items-center">
                                        <img
                                            src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1769420206/gsec_ig6vkp.png"
                                            alt="Google Safety Engineering Center Málaga Logo"
                                            className="w-64 h-auto object-contain"
                                        />
                                    </div>
                                    <div>
                                        <a href="https://maps.app.goo.gl/M97HgC2hcrkPEymn6" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">{t('info.venueName')}</a>
                                        <p className="text-muted-foreground text-sm">{t('info.venueLocation')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border space-y-3">
                                <p className="font-bold text-primary">{t('info.communityDay')}</p>
                                <div className="flex flex-col space-y-2">
                                    <div className="h-20 flex items-center">
                                        <img
                                            src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1775554252/Firma_Digital_qrjlox.png"
                                            alt="Innovation Campus Málaga Logo"
                                            className="w-64 h-auto object-contain"
                                        />
                                    </div>
                                    <div>
                                        <a href="https://maps.app.goo.gl/oJVUEJ2yWi2JoxqAA" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">{t('info.communityVenueName')}</a>
                                        <p className="text-muted-foreground text-sm">{t('info.communityVenueLocation')}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                            <CardTitle>{t('info.codeOfConductTitle')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-muted-foreground">
                                {t('info.codeOfConductText')}{' '}
                                <Link href="/code-of-conduct" className="text-primary font-semibold underline hover:no-underline">
                                    {t('info.codeOfConductLink')}
                                </Link>.
                            </p>

                            <div className="pt-4 border-t border-border space-y-4">
                                <p className="text-sm font-semibold text-foreground/90">
                                    {t('info.codeOfConductExpectation')}
                                </p>
                                {principles.length > 0 && (
                                    <ul className="space-y-3">
                                        {principles.map((principle, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm font-medium text-foreground/80">{principle}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
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
