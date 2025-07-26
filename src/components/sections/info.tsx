import type { FaqItem } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Building, ShieldCheck } from 'lucide-react';

const faqItems: FaqItem[] = [
    {
        question: '¿Qué está incluido en la entrada?',
        answer: 'Tu entrada incluye acceso a todas las charlas y talleres de ambos días, coffee breaks, almuerzo, y la fiesta de networking. También recibirás una camiseta del evento y swag de nuestros sponsors.'
    },
    {
        question: '¿En qué idioma serán las charlas?',
        answer: 'La mayoría de las charlas serán en español. Algunas charlas de ponentes internacionales podrían ser en inglés, pero estará indicado en la agenda.'
    },
    {
        question: '¿Hay descuento para estudiantes?',
        answer: 'Sí, ofrecemos un número limitado de entradas con descuento para estudiantes. Por favor, contacta con nosotros desde tu email académico para solicitar el código de descuento.'
    },
    {
        question: '¿Se grabarán las charlas?',
        answer: 'Sí, todas las charlas de los tracks principales serán grabadas y subidas a nuestro canal de YouTube después del evento.'
    },
    {
        question: '¿Quién organiza el evento?',
        answer: 'FlutterConf España está organizado por GDG Marbella, un grupo independiente y sin ánimo de lucro dedicado a hacer crecer la comunidad tecnológica. Contamos con el apoyo de voluntarios de la comunidad Flutter de toda España.'
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
                        <CardContent className="space-y-2">
                            <p className="font-bold">Palacio de Congresos de Valencia</p>
                            <p className="text-muted-foreground">Av. de les Corts Valencianes, 60, 46015 València, Valencia</p>
                            <p className="text-sm text-muted-foreground">Fácilmente accesible en metro, autobús y coche, con amplio aparcamiento.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Building className="h-8 w-8 text-primary"/>
                            <CardTitle>Hoteles</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             <p className="font-bold">Hoteles recomendados</p>
                            <p className="text-muted-foreground">Hemos negociado tarifas especiales en hoteles cercanos como el Hotel Meliá Valencia y el Sercotel Sorolla Palace. Pronto publicaremos los enlaces de reserva.</p>
                        </CardContent>
                    </Card>
                     <Card className="md:col-span-2">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <ShieldCheck className="h-8 w-8 text-primary"/>
                            <CardTitle>Código de Conducta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Nos comprometemos a proporcionar una experiencia segura, inclusiva y acogedora para todos. Se espera que todos los asistentes, ponentes, sponsors y voluntarios cumplan con nuestro <a href="#" className="text-primary underline hover:no-underline">Código de Conducta</a>.</p>
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
