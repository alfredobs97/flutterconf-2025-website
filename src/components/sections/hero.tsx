import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <Image 
        src="https://firebasestorage.googleapis.com/v0/b/gemini-studio-dev.appspot.com/o/projects%2Fstudio-2a6af%2Finstances%2F339f4019-913b-4899-8588-e93237e10887%2Ffiles%2Ff9e0ac1a-9fc9-44d7-867c-9b7e750059e7?alt=media" 
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
            La cita anual para la comunidad de Flutter en España. Únete a los líderes que están revolucionando el desarrollo mobile.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-lg font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Octubre 18-19, 2025</span>
            </div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Málaga, Spain</span>
            </div>
          </div>
          <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-10 shadow-lg transition-transform transform hover:scale-105">
            <a href="https://gdg.community.dev/events/details/google-gdg-marbella-presents-flutterconf-es-2025/" target="_blank" rel="noopener noreferrer">Apúntate</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
