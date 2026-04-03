'use client';

import type { Sponsor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const sponsors2025: Sponsor[] = [
    { name: 'Flutter', logoUrl: 'https://storage.googleapis.com/cms-storage-bucket/lockup_flutter_horizontal.847ae81f5430402216fd.svg', website: 'https://flutter.dev' },
];

const collaborators2025: Sponsor[] = [
    { name: 'Netscrapers', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470884/logo_netscrapers_ekzcmj.svg', website: 'https://netscrapers.com/' },
    { name: 'Xtorm', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470968/4-XTORM-logoFC-free-standing-grey_upqyow.png', website: 'https://www.xtorm.eu/' },
    { name: 'Shorebird', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758471011/logo_wordmark_c89fo5.png', website: 'https://shorebird.dev/' },
    { name: 'Labhouse', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758880674/Copia_de_LABHOUSE_Logo_01-removebg-preview_v2en1s.png', website: 'https://labhouse.io/' },
    { name: 'Serverpod', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759394985/logo-horizontal_gtbby0.png', website: 'https://serverpod.dev' },
];

const communities2025: Sponsor[] = [
    { name: 'GDG Marbella', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759570285/z_ztQtzy_400x400-removebg-preview_lqhtqz.png', website: 'https://gdg.community.dev/gdg-marbella/' },
    { name: 'GDG Spain', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759769544/spain-vertical-transp_1_1_nyqdpy.png', website: 'https://gdg.community.dev/gdg-spain/' },
    { name: 'Flutter Lleida', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759567771/logoflutterlleida_1_ht3nuf.png', website: 'https://www.meetup.com/flutter-lleida/' },
    { name: 'Flutter Málaga', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759572425/d8011cdc-ecb6-4861-aefa-3cb71bc53e1f_Tn4VHgw-removebg-preview_qwprzr.png', website: 'https://www.meetup.com/flutter-malaga/' },
    { name: 'Flutter Vienna', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759570279/photo_5981224993633192602_y-removebg-preview_1_zu9b84.png', website: 'https://www.meetup.com/flutter-vienna/' },
    { name: 'Flutter Valencia', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759769030/Screenshot_2025-10-06_at_6.43.11_PM-removebg-preview_u1btnb.png', website: 'https://www.meetup.com/flutter-valencia/' },
    { name: 'Flutter & Friends', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759769383/Untitled_design-removebg-preview_ll1djf.png', website: 'https://www.flutterfriends.dev/' },
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
                                {t('sponsors.title')}
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground whitespace-pre-line max-w-3xl mx-auto">
                                {t('sponsors.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-16 py-8">
                            <div>
                                <h3 className="text-2xl font-headline text-center mb-10 text-primary font-bold">{t('sponsors.sponsors2025')}</h3>
                                <div className="flex justify-center items-center gap-14 flex-wrap">
                                    {sponsors2025.map(sponsor => (
                                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                            <Image 
                                                src={sponsor.logoUrl} 
                                                alt={sponsor.name} 
                                                width={220} 
                                                height={75} 
                                                className="max-h-[75px] max-w-[220px] w-auto object-contain" 
                                                style={{ height: '75px', width: 'auto', maxWidth: '220px' }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-headline text-center mb-10 text-primary font-bold">{t('sponsors.collaborators2025')}</h3>
                                <div className="flex justify-center items-center gap-10 flex-wrap">
                                    {collaborators2025.map(sponsor => (
                                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                            <Image 
                                                src={sponsor.logoUrl} 
                                                alt={sponsor.name} 
                                                width={180} 
                                                height={90} 
                                                className="max-h-[60px] max-w-[180px] w-auto object-contain" 
                                                style={{ height: '60px', width: 'auto', maxWidth: '180px' }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-xl font-headline text-center mb-8 text-primary/70 font-semibold italic">Comunidades 2025</h3>
                                <div className="flex justify-center items-center gap-8 flex-wrap">
                                    {communities2025.map(sponsor => (
                                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-70 hover:grayscale-0 hover:opacity-90 transition-all duration-300">
                                            <Image 
                                                src={sponsor.logoUrl} 
                                                alt={sponsor.name} 
                                                width={120} 
                                                height={60} 
                                                className="max-h-[50px] max-w-[120px] w-auto object-contain" 
                                                style={{ height: '50px', width: 'auto', maxWidth: '120px' }}
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
