import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter, Linkedin, MessageSquare, Beer, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { communitySpeakers } from '@/lib/data';

export default function CommunityPage() {
    return (
        <div className="bg-background py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <section className="text-center mb-6">
                        <h1 className="text-4xl font-headline font-black tracking-tighter sm:text-5xl md:text-6xl">
                            FlutterConf: Desde la comunidad, para la comunidad
                        </h1>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl my-8">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1759565379/48945818273_ec88bbb5a0_c_odrdti.jpg"
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

                    <section className="mb-12">
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-8">Representantes de la comunidad</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-8">Agenda de la Tarde</h2>
                         <div className="grid md:grid-cols-1 gap-6">
                            <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <Users className="h-12 w-12 text-primary shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">Mesa de Comunidades</h3>
                                    <p className="text-muted-foreground">Un panel de debate donde representantes de diferentes grupos de Flutter y GDGs de toda España compartirán sus experiencias, retos y planes de futuro. Una oportunidad única para conocer a los líderes que dinamizan el ecosistema local y descubrir cómo puedes involucrarte.</p>
                                </div>
                            </Card>
                             <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <MessageSquare className="h-12 w-12 text-primary shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">Dart Conversations (Podcast en vivo)</h3>
                                    <p className="text-muted-foreground">Asiste a la grabación en directo de nuestro podcast "Dart Conversations". Comentaremos los momentos más destacados de la FlutterConf, analizaremos las charlas y contaremos con invitados especiales. ¡Tu oportunidad de ver cómo se hace un podcast desde dentro!</p>
                                </div>
                            </Card>
                             <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <Beer className="h-12 w-12 text-primary shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">Networking con Cervezas Victoria</h3>
                                    <p className="text-muted-foreground">El broche de oro del día. Relájate y comparte una Cerveza Victoria mientras charlas de manera informal con los ponentes, organizadores y otros asistentes. Este es el momento perfecto para hacer contactos valiosos, resolver dudas y simplemente, disfrutar de la comunidad.</p>
                                </div>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
