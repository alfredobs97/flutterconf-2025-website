'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Users, Award, Star, Video, Handshake, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from '@/hooks/useTranslation';


export default function AboutUsPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl">{t('aboutUs.pageTitle')}</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-muted-foreground">
                        <section className="py-8">
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                                <Image
                                    src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753698587/48952397566_63ebd371e5_c_fz4j04.jpg"
                                    alt="Foto del evento de 2019"
                                    layout="fill"
                                    objectFit="cover"
                                    data-ai-hint="conference event"
                                />
                            </div>
                            <h2 className="text-2xl font-headline font-bold text-foreground mb-6">{t('aboutUs.section2019Title')}</h2>
                            <p className="mb-4">
                                {t('aboutUs.section2019Para1')}
                            </p>
                            <p className="mb-4">
                                {t('aboutUs.section2019Para2')}
                            </p>
                            <p className="mb-4">
                                {t('aboutUs.section2019Para3')}
                            </p>
                            <p className="mb-4">
                                {t('aboutUs.section2019Para4')}
                            </p>
                            <div className="text-center mt-6">
                                <Button size="lg" asChild>
                                    <a href="https://www.flickr.com/photos/145521657@N07/albums/72157711462488992" target="_blank" rel="noopener noreferrer">
                                        <Camera className="mr-2 h-5 w-5" />
                                        {t('aboutUs.photoAlbum2019')}
                                    </a>
                                </Button>
                            </div>
                        </section>

                        <section className="py-8">
                            <h2 className="text-2xl font-headline font-bold text-foreground mb-6">{t('aboutUs.section2020Title')}</h2>
                            <p className="mb-4">
                                {t('aboutUs.section2020Para')}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                <a href="https://www.youtube.com/watch?v=cXhTGQppycU" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Flutter in the Dark I</span>
                                </a>
                                <a href="https://www.youtube.com/watch?v=o5hxLf_jHZI" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Lightning Flutter</span>
                                </a>
                                <a href="https://www.youtube.com/watch?v=Ify7Ex3C9Oo" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Flutter Fighters</span>
                                </a>
                                <a href="https://www.youtube.com/watch?v=X_42SUN0Lnw" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Flutter in the Dark II</span>
                                </a>
                            </div>
                        </section>

                        <section className="py-8">
                            <h2 className="text-2xl font-headline font-bold text-foreground mb-6">{t('aboutUs.section2023Title')}</h2>
                            <p className="mb-4">
                                {t('aboutUs.section2023Para')}
                            </p>
                            <div className="text-center mt-6">
                                <Button size="lg" asChild>
                                    <a href="https://photos.app.goo.gl/8wvF3Rp1rumynV956" target="_blank" rel="noopener noreferrer">
                                        <Camera className="mr-2 h-5 w-5" />
                                        {t('aboutUs.photoAlbum2023')}
                                    </a>
                                </Button>
                            </div>
                        </section>

                        <section className="py-8">
                            <h2 className="text-2xl font-headline font-bold text-foreground mb-6">{t('aboutUs.section2025Title')}</h2>
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                                <Image
                                    src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1764427830/54874840808_afebda20fe_b_dfvwho.jpg"
                                    alt="Foto del evento de 2025"
                                    layout="fill"
                                    objectFit="cover"
                                    data-ai-hint="conference event 2025"
                                />
                            </div>
                            <p className="mb-4">
                                {t('aboutUs.section2025Para1')}
                            </p>
                            <p className="mb-4"></p>

                            <p className="mb-4">
                                {t('aboutUs.section2025Para2')}
                            </p>
                            <p className="mb-4"></p>
                            <p className="mb-4">
                                {t('aboutUs.section2025Para3')}
                            </p>
                            <div className="text-center mt-6 flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" asChild>
                                    <a href="https://photos.app.goo.gl/ALBUM_DE_FOTOS_2025" target="_blank" rel="noopener noreferrer">
                                        <Camera className="mr-2 h-5 w-5" />
                                        {t('aboutUs.photoAlbum2025')}
                                    </a>
                                </Button>
                                <Button size="lg" asChild>
                                    <a href="https://www.youtube.com/playlist?list=LISTA_DE_REPRODUCCION_2025" target="_blank" rel="noopener noreferrer">
                                        <Video className="mr-2 h-5 w-5" />
                                        {t('aboutUs.talks2025')}
                                    </a>
                                </Button>
                            </div>
                        </section>

                        <section className="py-6 grid md:grid-cols-2 gap-8">
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2 mb-4"><Users />{t('aboutUs.communityTitle')}</h3>
                                <p className="mb-4">{t('aboutUs.communityText')}</p>
                            </div>
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2 mb-4"><Globe />{t('aboutUs.recognitionTitle')}</h3>
                                <p className="mb-4">{t('aboutUs.recognitionText')}</p>
                            </div>
                        </section>

                        <section className="py-6">
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2 mb-4"><Handshake />{t('aboutUs.supportTitle')}</h3>
                                <p className="mb-4">{t('aboutUs.supportText')}</p>
                                <p className="font-semibold text-muted-foreground">{t('aboutUs.supportCompanies')}</p>
                            </div>
                        </section>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
