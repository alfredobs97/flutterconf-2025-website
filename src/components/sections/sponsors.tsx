import type { Sponsor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const sponsors: Sponsor[] = [
    { name: 'Google', logoUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', website: 'https://google.com' },
    { name: 'Flutter', logoUrl: 'https://storage.googleapis.com/flutter-infra-release/flutter-lockup.png', website: 'https://flutter.dev' },
];

const collaborators: Sponsor[] = [
    { name: 'InfoJobs', logoUrl: 'https://placehold.co/200x100.png', website: '#' },
    { name: 'Philips', logoUrl: 'https://placehold.co/200x100.png', website: '#' },
    { name: 'Codemagic', logoUrl: 'https://placehold.co/200x100.png', website: '#' },
    { name: 'BBVA', logoUrl: 'https://placehold.co/250x125.png', website: '#' },
    { name: 'Microsoft', logoUrl: 'https://placehold.co/250x125.png', website: '#' },
];

export default function Sponsors() {
  return (
    <section id="sponsors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Nuestros Sponsors</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Agradecemos a nuestros sponsors y colaboradores por hacer posible este evento.
          </p>
        </div>
        
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-headline text-center mb-8 text-primary font-bold">Sponsors</h3>
                <div className="flex justify-center items-center gap-12 flex-wrap">
                    {sponsors.map(sponsor => (
                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                           <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={220} height={75} className="object-contain" />
                        </Link>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-headline text-center mb-8 text-primary font-bold">Colaboradores</h3>
                 <div className="flex justify-center items-center gap-8 flex-wrap">
                    {collaborators.map(sponsor => (
                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                           <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={180} height={90} className="object-contain" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        <div className="text-center mt-16 p-8 bg-secondary/30 rounded-lg">
            <h3 className="text-2xl font-headline font-bold mb-4">¿Quieres ser Sponsor?</h3>
            <p className="text-muted-foreground mb-6">Apoya a la comunidad Flutter y gana visibilidad para tu marca.</p>
            <Button size="lg" asChild>
                <Link href="/sponsor-dossier.pdf" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    ¡Descarga nuestro dossier!
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
