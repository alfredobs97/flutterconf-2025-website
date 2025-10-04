import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Beer, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { communitySpeakers } from '@/lib/data';

export default function CommunityPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <section className="text-center ">
                        <h1 className="text-4xl font-headline font-black tracking-tighter sm:text-5xl md:text-6xl mb-8">
                            FlutterConf: Desde la comunidad, para la comunidad
                        </h1>
                         <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1759565379/48945818273_ec88bbb5a0_c_odrdti.jpg"
                                alt="Comunidad FlutterConf"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="community event"
                            />
                        </div>
                        <Card className="text-left bg-card">
                            <CardContent className="p-6">
                                <p className="text-lg text-muted-foreground">
                                    FlutterConf España nace del esfuerzo y la pasión de la propia comunidad. Organizada por GDG Marbella con la inestimable colaboración de grupos de Flutter y GDGs de toda España, queremos que ese espíritu colaborativo no solo sea la base, sino el corazón de la conferencia. Por ello, la tarde del primer día la dedicamos a lo que más nos importa: conectar, compartir ideas, estrechar lazos y, en definitiva, fortalecernos mutuamente.
                                </p>
                                <p className="text-lg text-muted-foreground mt-4">
                                    ¿Quieres conocer mejor a las comunidades que mueven el ecosistema? ¿Te preguntas cómo otras pueden ayudar a tu grupo local a crecer o cómo puedes empezar el tuyo propio? Esta segunda parte de la conferencia es el lugar ideal para forjar esas conexiones, aprender de la experiencia de otros líderes y descubrir nuevas oportunidades de colaboración.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-2 pt-1">
                        <h2 className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl mb-8">Representantes de la comunidad</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {communitySpeakers.map((speaker) => (
                                <div key={speaker.name} className="overflow-hidden group flex flex-col bg-card rounded-lg border">
                                    <div className="p-0">
                                        <Image
                                            src={speaker.avatarUrl}
                                            alt={speaker.name}
                                            data-ai-hint="person portrait"
                                            width={400}
                                            height={400}
                                            className="w-full h-auto aspect-square object-cover object-center transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start p-4 bg-secondary/30 flex-grow">
                                        <h3 className="font-bold font-headline text-lg">{speaker.name}</h3>
                                        <p className="text-sm text-primary flex-grow">{speaker.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-2 pt-1">
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
