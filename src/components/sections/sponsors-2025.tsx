'use client';

import type { Sponsor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sponsors: Sponsor[] = [
    { name: 'Flutter', logoUrl: 'https://storage.googleapis.com/cms-storage-bucket/lockup_flutter_horizontal.847ae81f5430402216fd.svg', website: 'https://flutter.dev' },
];

const collaborators: Sponsor[] = [
    { name: 'Netscrapers', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470884/logo_netscrapers_ekzcmj.svg', website: 'https://netscrapers.com/' },
    { name: 'Xtorm', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470968/4-XTORM-logoFC-free-standing-grey_upqyow.png', website: 'https://www.xtorm.eu/' },
    { name: 'Shorebird', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758471011/logo_wordmark_c89fo5.png', website: 'https://shorebird.dev/' },
    { name: 'Labhouse', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758880674/Copia_de_LABHOUSE_Logo_01-removebg-preview_v2en1s.png', website: 'https://labhouse.io/' },
    { name: 'Serverpod', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759394985/logo-horizontal_gtbby0.png', website: 'https://serverpod.dev' },
];

const communities: Sponsor[] = [
    { name: 'GDG Marbella', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759570285/z_ztQtzy_400x400-removebg-preview_lqhtqz.png', website: 'https://gdg.community.dev/gdg-marbella/' },
    { name: 'GDG Spain', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759769544/spain-vertical-transp_1_1_nyqdpy.png', website: 'https://gdg.community.dev/gdg-spain/' },
    { name: 'Flutter Lleida', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759567771/logoflutterlleida_1_ht3nuf.png', website: 'https://www.meetup.com/flutter-lleida/' },
    { name: 'Flutter Málaga', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759572425/d8011cdc-ecb6-4861-aefa-3cb71bc53e1f_Tn4VHgw-removebg-preview_qwprzr.png', website: 'https://www.meetup.com/flutter-malaga/' },
    { name: 'Flutter Vienna', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759570279/photo_5981224993633192602_y-removebg-preview_1_zu9b84.png', website: 'https://www.meetup.com/flutter-vienna/' },
    { name: 'Flutter Valencia', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759769030/Screenshot_2025-10-06_at_6.43.11_PM-removebg-preview_u1btnb.png', website: 'https://www.meetup.com/flutter-valencia/' },
    { name: 'Flutter & Friends', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759769383/Untitled_design-removebg-preview_ll1djf.png', website: 'https://www.flutterfriends.dev/' },
];

import { useTranslation } from '@/hooks/useTranslation';

export default function Sponsors() {
    const { t } = useTranslation();
    return (
        <section id="sponsors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">{t('sponsors2025.title')}</h2>
                    <p className="max-w-2xl text-muted-foreground text-lg">
                        {t('sponsors2025.subtitle')}
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-headline text-center mb-8 text-primary font-bold">{t('sponsors2025.sponsorsTitle')}</h3>
                        <div className="flex justify-center items-center gap-12 flex-wrap">
                            {sponsors.map(sponsor => (
                                <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={220} height={75} className="object-contain" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-headline text-center mb-8 text-primary font-bold">{t('sponsors2025.collaboratorsTitle')}</h3>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            {collaborators.length > 0 ? collaborators.map(sponsor => (
                                <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={180} height={90} className="object-contain" />
                                </Link>
                            )) : (
                                <Card className="w-full max-w-2xl">
                                    <CardContent className="p-6 text-center">
                                        <p className="text-muted-foreground">{t('sponsors2025.becomeCollaborator')}</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-headline text-center mb-8 text-primary font-bold">{t('sponsors2025.communitiesTitle')}</h3>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            {communities.map(sponsor => (
                                <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="community logo" width={120} height={60} className="object-contain" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 p-8 bg-secondary/30 rounded-lg">
                    <h3 className="text-2xl font-headline font-bold mb-4">{t('sponsors2025.wantToBeSponsor')}</h3>
                    <p className="text-muted-foreground mb-6">{t('sponsors2025.sponsorDescription')}</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="https://docs.google.com/presentation/d/1XoK8k4s3hYl4wzJ3e2b5c1a9g7f_8dD/edit?usp=sharing" target="_blank">
                                <Download className="mr-2 h-5 w-5" />
                                {t('sponsors2025.downloadDossier')}
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="https://docs.google.com/presentation/d/1Xx0kZ97Ac1TRkYVmipykPuDokatvH5z6E8jsU2o/edit?usp=sharing" target="_blank">
                                <Download className="mr-2 h-5 w-5" />
                                {t('sponsors2025.downloadDeck')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
