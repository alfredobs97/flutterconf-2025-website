import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
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
            FlutterConf España 2025
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-primary-foreground/90">
            La cita anual para la comunidad de Flutter en España, desarrollada conjuntamente con Google Developers Spain. Únete a los líderes que están revolucionando el desarrollo mobile.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-lg font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Octubre 17-18, 2025</span>
            </div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Málaga, Spain</span>
            </div>
          </div>
          <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-10 shadow-lg transition-transform transform hover:scale-105">
            <a href="https://gdg.community.dev/events/details/google-gdg-marbella-presents-flutterconf-espana-2025/cohost-gdg-marbella" target="_blank" rel="noopener noreferrer">Apúntate</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
