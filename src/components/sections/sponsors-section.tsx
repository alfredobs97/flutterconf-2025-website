'use client';

import type { Sponsor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const sponsors2025: Sponsor[] = [
    { name: 'Netscrapers', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470884/logo_netscrapers_ekzcmj.svg', website: 'https://netscrapers.com/' },
    { name: 'Xtorm', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758470968/4-XTORM-logoFC-free-standing-grey_upqyow.png', website: 'https://www.xtorm.eu/' },
    { name: 'Shorebird', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758471011/logo_wordmark_c89fo5.png', website: 'https://shorebird.dev/' },
    { name: 'Labhouse', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758880674/Copia_de_LABHOUSE_Logo_01-removebg-preview_v2en1s.png', website: 'https://labhouse.io/' },
    { name: 'Serverpod', logoUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1759394985/logo-horizontal_gtbby0.png', website: 'https://serverpod.dev' },
];

export default function SponsorsSection() {
    const { t } = useTranslation();
    return (
        <section id="sponsors" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-primary/20">
                        <CardContent className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-accent/10 rounded-full">
                                        <HeartHandshake className="h-12 w-12 text-accent" />
                                    </div>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
                                    <Link href="#sponsors" className="hover:text-primary transition-colors">{t('sponsors.title')}</Link>
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    {t('sponsors.subtitle')}
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-xl font-semibold text-center mb-6">{t('sponsors.sponsors2025')}</h3>
                                <div className="flex justify-center items-center mb-8">
                                    <Link
                                        href="https://flutter.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                    >
                                        <Image
                                            src="https://storage.googleapis.com/cms-storage-bucket/lockup_flutter_horizontal.847ae81f5430402216fd.svg"
                                            alt="Flutter"
                                            data-ai-hint="company logo"
                                            width={200}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </Link>
                                </div>

                                <h3 className="text-xl font-semibold text-center mb-6">{t('sponsors.collaborators2025')}</h3>
                                <div className="flex justify-center items-center gap-8 flex-wrap">
                                    {sponsors2025.map(sponsor => (
                                        <Link
                                            key={sponsor.name}
                                            href={sponsor.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        >
                                            <Image
                                                src={sponsor.logoUrl}
                                                alt={sponsor.name}
                                                data-ai-hint="company logo"
                                                width={140}
                                                height={70}
                                                className="object-contain"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 font-semibold text-lg">
                                    <a href="https://docs.google.com/presentation/d/1CU-YNX9JdQ82mDxo6BqJF72wa90G6HZio2_QfEuHtt4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Download className="mr-2 h-5 w-5" />
                                        {t('sponsors.viewDossier')}
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
