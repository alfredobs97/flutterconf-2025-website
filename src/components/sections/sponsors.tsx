import type { Sponsor } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const platinumSponsors: Sponsor[] = [
    { name: 'Google', logoUrl: 'https://placehold.co/300x150.png', website: '#' },
];
const goldSponsors: Sponsor[] = [
    { name: 'Microsoft', logoUrl: 'https://placehold.co/250x125.png', website: '#' },
    { name: 'BBVA', logoUrl: 'https://placehold.co/250x125.png', website: '#' },
];
const silverSponsors: Sponsor[] = [
    { name: 'InfoJobs', logoUrl: 'https://placehold.co/200x100.png', website: '#' },
    { name: 'Philips', logoUrl: 'https://placehold.co/200x100.png', website: '#' },
    { name: 'Codemagic', logoUrl: 'https://placehold.co/200x100.png', website: '#' },
];

export default function Sponsors() {
  return (
    <section id="sponsors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Nuestros Sponsors</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Agradecemos a nuestros sponsors por hacer posible este evento.
          </p>
        </div>
        
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-headline text-center mb-6 text-yellow-500">Platinum</h3>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    {platinumSponsors.map(sponsor => (
                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
                           <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={300} height={150} className="object-contain" />
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-headline text-center mb-6 text-gray-400">Gold</h3>
                 <div className="flex justify-center items-center gap-8 flex-wrap">
                    {goldSponsors.map(sponsor => (
                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
                           <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={250} height={125} className="object-contain" />
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-headline text-center mb-6 text-gray-500">Silver</h3>
                 <div className="flex justify-center items-center gap-8 flex-wrap">
                    {silverSponsors.map(sponsor => (
                        <Link key={sponsor.name} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all duration-300">
                           <Image src={sponsor.logoUrl} alt={sponsor.name} data-ai-hint="company logo" width={200} height={100} className="object-contain" />
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
