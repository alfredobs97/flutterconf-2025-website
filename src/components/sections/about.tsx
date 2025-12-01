'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                        <Link href="#about" className="hover:text-primary transition-colors">{t('about.title')}</Link>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <p className="text-muted-foreground text-lg">
                            {t('about.paragraph1')}
                        </p>
                        <p className="text-muted-foreground text-lg">
                            {t('about.paragraph2')}
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20"></div>
                        <Image
                            src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753553865/48952394171_3a1cd7872d_b_qsqqs2.jpg"
                            alt="FlutterConf Logo"
                            layout="fill"
                            objectFit="cover"
                            className="h-32 w-32 opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
