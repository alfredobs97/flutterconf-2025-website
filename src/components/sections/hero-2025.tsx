'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <Image
        src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753553216/48946377431_c3d0469ef1_b_1_pnqi7u.jpg"
        alt="Speakers on stage at FlutterConf"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-headline font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {t('hero2025.title')}
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-primary-foreground/90">
            {t('hero2025.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-lg font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{t('hero2025.date')}</span>
            </div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{t('hero2025.location')}</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-10 shadow-lg transition-transform transform hover:scale-105">
              <a href="https://youtube.com/playlist?list=PL9STRpNoMOOucYE4Ry96ydpJ8BplQxRX8&si=zTWPB9c-80iFKBgv" target="_blank" rel="noopener noreferrer">{t('hero2025.reliveButton')}</a>
            </Button>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-primary-foreground">{t('hero2025.findUs')}</p>
              <div className="flex items-center gap-4">
                <a href="https://x.com/flutterconfes" target="_blank" rel="noopener noreferrer" aria-label="Twitter de FlutterConf ES" className="hover:text-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/flutterconf-es" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de FlutterConf ES" className="hover:text-accent transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/flutterconfdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de FlutterConf ES" className="hover:text-accent transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
