import type { AgendaEvent, Speaker } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Coffee, Mic, Code, Loader2, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { day1Schedule, day1AfternoonSchedule, day2Schedule, speakers } from '@/lib/data';
import { Button } from '../ui/button';
import Link from 'next/link';

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
    <div className="divide-y divide-border rounded-lg border bg-card text-left">
        {schedule.length > 0 ? (
            schedule.map((event, index) => {
                const endTime = calculateEndTime(event.time, event.duration);
                const speaker = speakers.find(s => s.name === event.speaker);

                const eventContent = (
                    <div className={cn(
                        "p-4 flex flex-col sm:flex-row gap-4 justify-between items-start",
                        event.type === 'break' && 'bg-secondary/30',
                        speaker ? 'cursor-pointer hover:bg-secondary/20' : ''
                    )}>
                        <div className="flex gap-4 items-start sm:items-center w-full">
                            <div className="text-center flex-shrink-0 w-20">
                                <p className="text-sm font-bold text-primary whitespace-nowrap">
                                    {event.time}
                                </p>
                                <p className="text-xs text-muted-foreground">{endTime}</p>
                            </div>
                            <div className="pl-4 border-l-2 border-accent flex-grow">
                                <h3 className="font-bold text-lg font-headline">{event.title}</h3>
                                {event.speaker && <p className="text-muted-foreground text-sm">{event.speaker}</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto pl-1 sm:pl-0">
                           <span className="w-16 text-right">{event.duration} min</span>
                           <EventIcon type={event.type} />
                        </div>
                    </div>
                );

                if (speaker) {
                    return (
                        <Dialog key={index}>
                            <DialogTrigger asChild>{eventContent}</DialogTrigger>
                            <DialogContent className="sm:max-w-[625px]">
                                <DialogHeader className="flex flex-col sm:flex-row gap-6">
                                    <Image src={speaker.avatarUrl} alt={speaker.name} data-ai-hint="person portrait" width={150} height={150} className="rounded-lg aspect-square object-cover object-center" />
                                    <div className="space-y-2 text-left">
                                        <DialogTitle className="text-2xl font-headline">{speaker.name}</DialogTitle>
                                        <DialogDescription>
                                            {speaker.title} at {speaker.company}
                                        </DialogDescription>
                                        <div className="flex gap-2">
                                            {speaker.socials.twitter && <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                                            {speaker.socials.linkedin && <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                                        </div>
                                    </div>
                                </DialogHeader>
                                <div className="py-4 space-y-4">
                                    <p className="text-sm text-foreground">{speaker.bio}</p>
                                    <div className="p-4 bg-secondary/50 rounded-lg">
                                        <h4 className="font-bold font-headline mb-2">Talk: {speaker.talkTitle}</h4>
                                        <p className="text-sm text-muted-foreground">{speaker.talkAbstract}</p>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    );
                }

                return <div key={index}>{eventContent}</div>;
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
                        <div className="mt-12 text-center">
                            <h3 className="text-2xl font-headline font-bold text-center mb-4">Tarde de Comunidad (Opcional)</h3>
                            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Después del programa principal, únete a nosotros para unas sesiones extra organizadas por y para la comunidad Flutter.
                            </p>
                             <Button asChild variant="outline" className="mb-8">
                                <Link href="/community">
                                    Conoce a la comunidad <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <AgendaView schedule={day1AfternoonSchedule} />
                        </div>
                    </TabsContent>
                    <TabsContent value="day2">
                        <div className="text-center mb-8 p-6 bg-card rounded-lg border">
                            <h3 className="text-2xl font-headline font-bold text-center mb-2">Día de Comunidad</h3>
                            <p className="text-muted-foreground mb-4">El segundo día es una jornada abierta a la comunidad, con lightning talks. ¡Las plazas son limitadas!</p>
                            <Button asChild>
                                <a href="https://gdg.community.dev/e/mjc8ks/" target="_blank" rel="noopener noreferrer">
                                    Apúntate al Día 2
                                </a>
                            </Button>
                        </div>
                        <AgendaView schedule={day2Schedule} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
