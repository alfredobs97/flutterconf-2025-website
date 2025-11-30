'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Beer, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { communitySpeakers } from '@/lib/data';
import { useTranslation } from '@/hooks/useTranslation';

export default function CommunityPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <section className="text-center ">
                        <h1 className="text-4xl font-headline font-black tracking-tighter sm:text-5xl md:text-6xl mb-8">
                            {t('community.title')}
                        </h1>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1759565379/48945818273_ec88bbb5a0_c_odrdti.jpg"
                                alt="Comunidad FlutterConf"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="community event"
                            />
                        </div>
                        <Card className="text-left bg-card">
                            <CardContent className="p-6">
                                <p className="text-lg text-muted-foreground">
                                    {t('community.description1')}
                                </p>
                                <p className="text-lg text-muted-foreground mt-4">
                                    {t('community.description2')}
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-2 pt-1">
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-8">{t('community.representativesTitle')}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {communitySpeakers.map((speaker) => (
                                <div key={speaker.name} className="overflow-hidden group flex flex-col bg-card rounded-lg border">
                                    <div className="p-0">
                                        <Image
                                            src={speaker.avatarUrl}
                                            alt={speaker.name}
                                            data-ai-hint="person portrait"
                                            width={400}
                                            height={400}
                                            className="w-full h-auto aspect-square object-cover object-center transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start p-4 bg-secondary/30 flex-grow">
                                        <h3 className="font-bold font-headline text-lg">{speaker.name}</h3>
                                        <p className="text-sm text-primary flex-grow">{speaker.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-2 pt-1">
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-8">{t('community.agendaTitle')}</h2>
                        <div className="grid md:grid-cols-1 gap-6">
                            <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <Users className="h-12 w-12 text-primary shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">{t('community.roundtableTitle')}</h3>
                                    <p className="text-muted-foreground">{t('community.roundtableDesc')}</p>
                                </div>
                            </Card>
                            <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <MessageSquare className="h-12 w-12 text-primary shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">{t('community.podcastTitle')}</h3>
                                    <p className="text-muted-foreground">{t('community.podcastDesc')}</p>
                                </div>
                            </Card>
                            <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <Beer className="h-12 w-12 text-primary shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">{t('community.networkingTitle')}</h3>
                                    <p className="text-muted-foreground">{t('community.networkingDesc')}</p>
                                </div>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
