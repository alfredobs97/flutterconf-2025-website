import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { communitySpeakers, day1AfternoonSchedule } from '@/lib/data';
import type { AgendaEvent } from '@/types';
import { Mic, Coffee, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const EventIcon = ({type}: {type: AgendaEvent['type']}) => {
    switch(type) {
        case 'talk': return <Mic className="h-5 w-5 text-accent" />;
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
        {schedule.map((event, index) => {
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
        })}
    </div>
);


export default function CommunityPage() {
    return (
        <div className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <section className="text-center mb-16">
                        <h1 className="text-4xl font-headline font-black tracking-tighter sm:text-5xl md:text-6xl">
                            FlutterConf: Desde la comunidad, para la comunidad
                        </h1>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl my-8">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753553865/48952394171_3a1cd7872d_b_qsqqs2.jpg"
                                alt="Comunidad FlutterConf"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="community event"
                            />
                        </div>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            FlutterConf España nace del esfuerzo y la pasión de la propia comunidad. Organizada por GDG Marbella con la colaboración de grupos de Flutter de toda España, queremos que ese espíritu colaborativo se refleje en la conferencia. Por eso, dedicamos la tarde del primer día a lo que más nos importa: compartir ideas, estrechar lazos y conocernos mejor entre todas las comunidades que participan.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-12">Ponentes de la Comunidad</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {communitySpeakers.map((speaker) => (
                                <Card key={speaker.name} className="overflow-hidden group flex flex-col">
                                    <CardContent className="p-0">
                                        <Image
                                            src={speaker.avatarUrl}
                                            alt={speaker.name}
                                            data-ai-hint="person portrait"
                                            width={400}
                                            height={400}
                                            className="w-full h-auto aspect-square object-cover object-center transition-transform group-hover:scale-105"
                                        />
                                    </CardContent>
                                    <div className="flex flex-col items-start p-4 bg-secondary/30 flex-grow">
                                        <h3 className="font-bold font-headline text-lg">{speaker.name}</h3>
                                        <p className="text-sm text-primary flex-grow">{speaker.title}</p>
                                        <div className="flex gap-2 mt-2">
                                            {speaker.socials.twitter && <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                                            {speaker.socials.linkedin && <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-12">Agenda de la Tarde</h2>
                        <AgendaView schedule={day1AfternoonSchedule} />
                    </section>
                </div>
            </div>
        </div>
    );
}
