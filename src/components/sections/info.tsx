import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ShieldCheck, Loader2 } from 'lucide-react';
import Link from 'next/link';

const faqItems: FaqItem[] = [
    {
        question: '¿Qué está incluido en la entrada?',
        answer: 'Tu entrada incluye acceso a todas las charlas del evento, coffee breaks, y el networking. También participarás en el sorte de swag de nuestros sponsors.'
    },
    {
        question: '¿En qué idioma serán las charlas?',
        answer: 'La mayoría de las charlas serán en español. Algunas charlas de ponentes internacionales podrían ser en inglés, pero estará indicado en la agenda.'
    },
    {
        question: '¿Se grabarán las charlas?',
        answer: 'Sí, todas las charlas de los tracks principales serán grabadas y subidas a nuestro canal de YouTube después del evento.'
    },
    {
        question: '¿Quién organiza el evento?',
        answer: 'FlutterConf España está organizado por GDG Marbella, GDG Spain, Flutter Lleida y Flutter Málaga, somos una agrupación de comunidades sin ánimo de lucro dedicado a hacer crecer la comunidad tecnológica. Contamos con el apoyo de voluntarios de la comunidad Flutter de toda España.'
    },
];

export default function Info() {
    return (
        <section id="info" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Información y Preguntas Frecuentes</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <MapPin className="h-8 w-8 text-primary"/>
                            <CardTitle>Sede del Evento</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-center text-muted-foreground h-full flex flex-col justify-center items-center">
                            <Loader2 className="h-8 w-8 text-primary animate-spin mb-2"/>
                            <p className="font-semibold text-foreground">¡Muy pronto desvelaremos la ubicación!</p>
                            <p>Estamos trabajando para encontrar el lugar perfecto.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <ShieldCheck className="h-8 w-8 text-primary"/>
                            <CardTitle>Código de Conducta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Nos comprometemos a proporcionar una experiencia segura, inclusiva y acogedora para todos. Se espera que todos los asistentes, ponentes, sponsors y voluntarios cumplan con nuestro <Link href="/code-of-conduct" className="text-primary underline hover:no-underline">Código de Conducta</Link>.</p>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <h3 className="text-2xl font-headline font-bold text-center mb-8">Preguntas Frecuentes</h3>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
