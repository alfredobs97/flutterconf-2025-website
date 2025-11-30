import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PastEvent() {
    return (
        <section id="past-event" className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* 2025 Edition - Featured */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl mb-4">
                            <Link href="#past-event" className="hover:text-primary transition-colors">FlutterConf España 2025</Link>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            El evento más reciente reunió a la comunidad Flutter en un día inolvidable de conocimiento y networking.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Revive las charlas de 2025</h3>
                                <p className="text-muted-foreground text-lg">
                                    Ponentes internacionales, casos de éxito en producción, y las últimas novedades del ecosistema Flutter. Toda la conferencia está disponible en nuestro canal de YouTube.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                                    <a href="https://youtube.com/playlist?list=PL9STRpNoMOOucYE4Ry96ydpJ8BplQxRX8" target="_blank" rel="noopener noreferrer">
                                        Ver charlas de 2025 <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="font-semibold">
                                    <a href="https://www.flickr.com/photos/145521657@N07/albums/72177720329848772/with/54874401078/" target="_blank" rel="noopener noreferrer">
                                        Ver álbum oficial
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1764417475/54874401078_cc28e85840_b_bila6r.jpg"
                                alt="FlutterConf España 2025"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="conference event 2025"
                            />
                        </div>
                    </div>
                </div>

                {/* 2019 Edition - Origin Story */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753554068/48952580842_785e732a06_c_mcnurg.jpg"
                            alt="FlutterConf España 2019"
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint="conference event 2019"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">El Origen: FlutterConf 2019</h2>
                        <p className="text-muted-foreground text-lg">
                            En 2019, sentamos un precedente organizando la primera FlutterConf en Europa en la soleada Marbella. El evento fue un rotundo éxito, reuniendo a pioneros y expertos de la comunidad Flutter.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Contamos con la participación de ponentes de empresas líderes como <strong>InfoJobs, Philips y BBVA</strong>, que compartieron sus experiencias y conocimientos, sentando las bases de una comunidad fuerte y colaborativa en España que no ha dejado de crecer desde entonces.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/about-us">
                                ¿Quieres saber más? <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
