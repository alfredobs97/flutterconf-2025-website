import type { AgendaEvent } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Coffee, Mic, Code, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const day1Schedule: AgendaEvent[] = [
    { time: '08:30', title: 'Bienvenida y networking', type: 'break', duration: 30 },
    { time: '09:00', title: 'Opening', type: 'talk', duration: 15, speaker: 'Conoce FlutterConf y empieza con nosotros el evento' },
    { time: '09:15', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '09:45', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '10:15', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '10:45', title: 'Coffee Break', type: 'break', duration: 30 },
    { time: '11:15', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '11:45', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '12:15', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '12:45', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '13:15', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '13:45', title: 'Closing', type: 'talk', duration: 15, speaker: 'Publicaremos la informacion próximamente' },
    { time: '14:00', title: 'Networking', type: 'break', duration: 60 },
];

const day1AfternoonSchedule: AgendaEvent[] = [
    { time: '16:15', title: 'Bienvenida parte 2', type: 'break', duration: 15 },
    { time: '16:30', title: '¿Quieres ganarte 4.500 € el próximo verano? Programa de becas Oportunidades', speaker: 'Andreu', type: 'talk', duration: 60 },
    { time: '17:30', title: 'Mesa redonda / Dart Conversations', type: 'panel', duration: 60 },
    { time: '18:30', title: 'Q/A', type: 'talk', duration: 30 },
];

const day2Schedule: AgendaEvent[] = [
   { time: '10:30', title: 'Café-networking', type: 'break', duration: 60, speaker: 'en el coworking' },
   { time: '11:30', title: 'Presentación de comunidades', type: 'talk', duration: 45 },
   { time: '12:15', title: 'Lightning talks sobre temas Dart y Flutter', type: 'talk', duration: 45 },
   { time: '13:00', title: 'Cierre evento', type: 'talk', duration: 15 },
];

const EventIcon = ({type}: {type: AgendaEvent['type']}) => {
    switch(type) {
        case 'talk': return <Mic className="h-5 w-5 text-accent" />;
        case 'workshop': return <Code className="h-5 w-5 text-accent" />;
        case 'panel': return <User className="h-5 w-5 text-accent" />;
        case 'break': return <Coffee className="h-5 w-5 text-accent" />;
        default: return null;
    }
}

const calculateEndTime = (startTime: string, duration: number): string => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const startDate = new Date();
    startDate.setHours(hours, minutes, 0, 0);
    const endDate = new Date(startDate.getTime() + duration * 60000);
    const endHours = endDate.getHours().toString().padStart(2, '0');
    const endMinutes = endDate.getMinutes().toString().padStart(2, '0');
    return `${endHours}:${endMinutes}`;
};

const AgendaView = ({ schedule }: { schedule: AgendaEvent[] }) => (
    <div className="divide-y divide-border rounded-lg border bg-card">
        {schedule.length > 0 ? (
            schedule.map((event, index) => {
                const endTime = calculateEndTime(event.time, event.duration);
                return (
                    <div key={index} className={cn(
                        "p-4 flex flex-col sm:flex-row gap-4 justify-between items-start",
                        event.type === 'break' && 'bg-secondary/30'
                    )}>
                        <div className="flex gap-4 items-center">
                            <div className="text-center flex-shrink-0 w-20">
                                <p className="text-sm font-bold text-primary whitespace-nowrap">
                                    {event.time}
                                </p>
                                <p className="text-xs text-muted-foreground">{endTime}</p>
                            </div>
                            <div className="pl-4 border-l-2 border-accent">
                                <h3 className="font-bold text-lg font-headline">{event.title}</h3>
                                {event.speaker && <p className="text-muted-foreground text-sm">{event.speaker}</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto sm:ml-0 pl-1 sm:pl-0">
                           <span className="w-16 text-right">{event.duration} min</span>
                           <EventIcon type={event.type} />
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="p-12 text-center text-muted-foreground">
                <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-4" />
                <h3 className="text-xl font-headline font-bold text-foreground">Estamos preparando la agenda</h3>
                <p>¡Pronto compartiremos todos los detalles de las charlas y ponentes!</p>
            </div>
        )}
    </div>
);

export default function Agenda() {
    return (
        <section id="agenda" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Agenda del Evento</h2>
                    <p className="max-w-2xl text-muted-foreground text-lg">
                        Dos días repletos de contenido inspirador, talleres prácticos y networking.
                    </p>
                </div>
                <Tabs defaultValue="day1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="day1">Día 1 (Octubre 17)</TabsTrigger>
                        <TabsTrigger value="day2">Día 2 (Octubre 18)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="day1">
                        <AgendaView schedule={day1Schedule} />
                        <div className="mt-12">
                            <h3 className="text-2xl font-headline font-bold text-center mb-4">Tarde de Comunidad (Opcional)</h3>
                            <p className="text-center text-muted-foreground mb-8">
                                Después del programa principal, únete a nosotros para unas sesiones extra organizadas por la comunidad.
                            </p>
                            <AgendaView schedule={day1AfternoonSchedule} />
                        </div>
                    </TabsContent>
                    <TabsContent value="day2">
                        <AgendaView schedule={day2Schedule} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
