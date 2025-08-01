import type { AgendaEvent } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Coffee, Mic, Code, Loader2 } from 'lucide-react';

const day1Schedule: AgendaEvent[] = [
    { time: '08:30', title: 'Bienvenida y networking', type: 'break', duration: 30 },
    { time: '09:00', title: 'Opening', type: 'talk', duration: 15, speaker: 'Publicaremos la informacion próximamente' },
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

const day2Schedule: AgendaEvent[] = [
   /*  { time: '09:30', title: 'Morning Coffee', type: 'break', duration: 30, speaker: '' },
    { time: '10:00', title: 'Advanced Theming in Flutter', type: 'talk', duration: 45, speaker: 'Jane Doe' },
    { time: '10:45', title: 'Testing Strategies for Flutter Apps', type: 'talk', duration: 45, speaker: 'Maria Garcia' },
    { time: '11:30', title: 'Coffee Break', type: 'break', duration: 30, speaker: '' },
    { time: '12:00', title: 'CI/CD for Flutter with Codemagic', type: 'workshop', duration: 90, speaker: 'Guest Speaker' },
    { time: '13:30', title: 'Lunch', type: 'break', duration: 90, speaker: '' },
    { time: '15:00', title: 'Flutter on the Web and Desktop', type: 'talk', duration: 45, speaker: 'John Smith' },
    { time: '15:45', title: 'Community Lightning Talks', type: 'talk', duration: 60, speaker: 'Community' },
    { time: '16:45', title: 'Closing Keynote &amp; Awards', type: 'talk', duration: 45, speaker: 'David Martinez' }, */
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

const AgendaView = ({ schedule }: { schedule: AgendaEvent[] }) => (
    <div className="space-y-6">
        {schedule.length > 0 ? (
            schedule.map((event, index) => (
                <Card key={index} className="w-full">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-4 justify-between items-start">
                        <div className="flex gap-4 items-center">
                            <p className="text-sm font-bold text-primary whitespace-nowrap"><Clock className="inline h-4 w-4 mr-1"/>{event.time}</p>
                            <div className="pl-4 border-l-2 border-accent">
                                <h3 className="font-bold text-lg font-headline">{event.title}</h3>
                                {event.speaker && <p className="text-muted-foreground text-sm">{event.speaker}</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground md:text-right shrink-0">
                           <span>{event.duration} min</span>
                           <EventIcon type={event.type} />
                        </div>
                    </CardContent>
                </Card>
            ))
        ) : (
            <Card className="w-full">
                <CardContent className="p-12 text-center text-muted-foreground">
                    <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-4" />
                    <h3 className="text-xl font-headline font-bold text-foreground">Estamos preparando la agenda</h3>
                    <p>¡Pronto compartiremos todos los detalles de las charlas y ponentes!</p>
                </CardContent>
            </Card>
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
                    </TabsContent>
                    <TabsContent value="day2">
                        <AgendaView schedule={day2Schedule} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
