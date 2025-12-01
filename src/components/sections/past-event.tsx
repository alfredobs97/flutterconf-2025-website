'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function PastEvent() {
    const { t } = useTranslation();
    return (
        <section id="past-event" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* 2025 Edition - Featured */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl mb-4">
                            <Link href="#past-event" className="hover:text-primary transition-colors">{t('pastEvent.title2025')}</Link>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t('pastEvent.subtitle2025')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">{t('pastEvent.reliveTitle')}</h3>
                                <p className="text-muted-foreground text-lg">
                                    {t('pastEvent.reliveDescription')}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                                    <a href="https://youtube.com/playlist?list=PL9STRpNoMOOucYE4Ry96ydpJ8BplQxRX8" target="_blank" rel="noopener noreferrer">
                                        {t('pastEvent.watchTalks')} <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="font-semibold">
                                    <a href="https://www.flickr.com/photos/145521657@N07/albums/72177720329848772/with/54874401078/" target="_blank" rel="noopener noreferrer">
                                        {t('pastEvent.viewAlbum')}
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1764417475/54874401078_cc28e85840_b_bila6r.jpg"
                                alt="FlutterConf España 2025"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="conference event 2025"
                            />
                        </div>
                    </div>
                </div>

                {/* 2019 Edition - Origin Story */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753554068/48952580842_785e732a06_c_mcnurg.jpg"
                            alt="FlutterConf España 2019"
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint="conference event 2019"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">{t('pastEvent.title2019')}</h2>
                        <p className="text-muted-foreground text-lg">
                            {t('pastEvent.description2019Part1')}
                        </p>
                        <p className="text-muted-foreground text-lg">
                            {t('pastEvent.description2019Part2')}
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/about-us">
                                {t('pastEvent.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
