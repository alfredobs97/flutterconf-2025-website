'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[800px] flex items-start justify-center text-center text-white pt-24">
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <Image
        src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1764417304/54874170126_2d285a3d8a_b_1_eini1h.jpg"
        alt="Speakers on stage at FlutterConf"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              {t('hero.title')}
            </h1>
            <p className="max-w-[800px] mx-auto text-xl md:text-2xl text-gray-200 font-light">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium bg-white/10 backdrop-blur-md py-4 px-8 rounded-full border border-white/20">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span>{t('hero.date')}</span>
              </div>
              <div className="hidden sm:block text-white/30">|</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{t('hero.location')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-medium">
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center gap-1 hover:bg-black/50 transition-colors">
                <span className="text-accent font-bold uppercase tracking-wider text-sm">{t('hero.morningSession')}</span>
                <span>{t('hero.students')}</span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex flex-col items-center gap-1 hover:bg-black/50 transition-colors">
                <span className="text-accent font-bold uppercase tracking-wider text-sm">{t('hero.afternoonSession')}</span>
                <span>{t('hero.professionals')}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 mt-4">
            <Button size="lg" disabled className="bg-white text-black hover:bg-white/90 font-bold text-lg py-8 px-12 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] opacity-50 cursor-not-allowed">
              {t('hero.comingSoon')}
            </Button>

            <div className="flex items-center gap-6">
              <a href="https://x.com/flutterconfes" target="_blank" rel="noopener noreferrer" aria-label="Twitter de FlutterConf ES" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/flutterconf-es" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de FlutterConf ES" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/flutterconfdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de FlutterConf ES" className="text-white/70 hover:text-white hover:scale-110 transition-all">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
