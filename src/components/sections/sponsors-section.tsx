'use client';

import type { Sponsor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const platinumSponsors2026: Sponsor[] = [
    { name: 'Flutter', logoUrl: 'https://storage.googleapis.com/cms-storage-bucket/lockup_flutter_horizontal.847ae81f5430402216fd.svg', website: 'https://flutter.dev' },
];

const goldSponsors2026: Sponsor[] = [
    { name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png', website: 'https://google.com' },
    { name: 'Widgetbook', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1775806768/Logo_with_text_for_bright_background_ymudi3.png', website: 'https://widgetbook.io' },
    { name: 'Shorebird', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758471011/logo_wordmark_c89fo5.png', website: 'https://shorebird.dev' },
];

const collaborators2026: Sponsor[] = [
    { name: 'Netscrapers', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470884/logo_netscrapers_ekzcmj.svg', website: 'https://netscrapers.com/' },
    { name: 'Serverpod', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759394985/logo-horizontal_gtbby0.png', website: 'https://serverpod.dev' },
];

export default function SponsorsSection() {
    const { t } = useTranslation();

    const handleTrackClick = (eventName: string) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', eventName);
        }
    };

    return (
        <section id="sponsors" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <Card className="max-w-5xl mx-auto border-none shadow-2xl overflow-hidden bg-gradient-to-br from-card to-background">
                    <CardContent className="p-8 md:p-16 space-y-12">
                        <div className="text-center space-y-6">
                            <div className="flex justify-center mb-6">
                                <div className="p-5 bg-primary/10 rounded-full">
                                    <HeartHandshake className="h-16 w-16 text-primary" />
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                                {t('sponsors2026.title')}
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground whitespace-pre-line max-w-3xl mx-auto">
                                {t('sponsors2026.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-16 py-8">
                            <div>
                                <h3 className="text-2xl font-headline text-center mb-10 text-primary font-bold uppercase tracking-wider">{t('sponsors2026.platinumSponsors')}</h3>
                                <div className="flex justify-center items-center gap-14 flex-wrap">
                                    {platinumSponsors2026.map(sponsor => (
                                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                            <Image
                                                src={sponsor.logoUrl}
                                                alt={sponsor.name}
                                                width={280}
                                                height={95}
                                                className="max-h-[95px] max-w-[280px] w-auto object-contain"
                                                style={{ height: '95px', width: 'auto', maxWidth: '280px' }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-headline text-center mb-10 text-primary/80 font-bold uppercase tracking-wider">{t('sponsors2026.goldSponsors')}</h3>
                                <div className="flex justify-center items-center gap-12 flex-wrap">
                                    {goldSponsors2026.map(sponsor => (
                                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                            <Image
                                                src={sponsor.logoUrl}
                                                alt={sponsor.name}
                                                width={200}
                                                height={80}
                                                className="max-h-[70px] max-w-[200px] w-auto object-contain"
                                                style={{ height: '70px', width: 'auto', maxWidth: '200px' }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-headline text-center mb-10 text-primary/80 font-bold uppercase tracking-wider">{t('sponsors2026.collaboratorsTitle')}</h3>
                                <div className="flex justify-center items-center gap-12 flex-wrap">
                                    {collaborators2026.map(sponsor => (
                                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                            <Image
                                                src={sponsor.logoUrl}
                                                alt={sponsor.name}
                                                width={180}
                                                height={70}
                                                className="max-h-[60px] max-w-[180px] w-auto object-contain"
                                                style={{ height: '60px', width: 'auto', maxWidth: '180px' }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
                            <Button size="lg" asChild className="font-semibold text-lg w-full sm:w-auto h-14 px-8 shadow-lg hover:shadow-primary/20">
                                <a
                                    href="https://drive.google.com/file/d/1XToDq8s3hYl4wzJ3e2b5c1a9g7f_8dD/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => handleTrackClick('c4_sponsors_dossier_es')}
                                >
                                    <Download className="mr-2 h-6 w-6" />
                                    {t('sponsors.viewDossier')}
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="font-semibold text-lg w-full sm:w-auto h-14 px-8 border-primary text-primary hover:bg-primary/5">
                                <a
                                    href="https://drive.google.com/file/d/177UYS80iwz1US4nRCBe51uGmE_hN4fbs/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => handleTrackClick('c4_sponsors_dossier_en')}
                                >
                                    <Download className="mr-2 h-6 w-6" />
                                    {t('sponsors.viewDossierEn')}
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
