import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Speakers from '@/components/sections/speakers';
import Agenda from '@/components/sections/agenda';
import Sponsors from '@/components/sections/sponsors';
import Info from '@/components/sections/info';
import Contact from '@/components/sections/contact';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Agenda />
      <section id="tickets" className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Consigue tu Entrada</h2>
            <p className="max-w-2xl text-primary-foreground/80 text-lg">
              No te pierdas la oportunidad de formar parte del evento de Flutter más importante de España.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-background/10 border-accent">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Ticket className="text-accent"/> Early Bird</CardTitle>
                    <p className="text-4xl font-bold font-headline">€199 <span className="text-lg font-normal text-primary-foreground/70">+ IVA</span></p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">Disponibles hasta el 31 de Julio. ¡Unidades limitadas!</p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Comprar Ahora</Button>
                </CardContent>
            </Card>
            <Card className="bg-background/10 border-2 border-accent shadow-2xl scale-105">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Ticket className="text-accent"/> General</CardTitle>
                    <p className="text-4xl font-bold font-headline">€249 <span className="text-lg font-normal text-primary-foreground/70">+ IVA</span></p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">La entrada estándar para acceder a todo el evento.</p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Comprar Ahora</Button>
                </CardContent>
            </Card>
             <Card className="bg-background/10">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Ticket /> Late Bird</CardTitle>
                    <p className="text-4xl font-bold font-headline">€299 <span className="text-lg font-normal text-primary-foreground/70">+ IVA</span></p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm">Disponibles desde el 1 de Octubre hasta el día del evento.</p>
                    <Button className="w-full" variant="secondary" disabled>Próximamente</Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Sponsors />
      <Info />
      <Contact />
    </>
  );
}
