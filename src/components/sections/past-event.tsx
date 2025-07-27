import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PastEvent() {
    return (
        <section id="past-event" className="">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753554068/48952580842_785e732a06_c_mcnurg.jpg"
                                alt="Foto del evento de 2019"
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="conference event"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-4">
                        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">El Origen: FlutterConf 2019</h2>
                        <p className="text-muted-foreground text-lg">
                            En 2019, sentamos un precedente organizando la primera FlutterConf en Europa en la soleada Marbella. El evento fue un rotundo éxito, reuniendo a pioneros y expertos de la comunidad Flutter.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Contamos con la participación de ponentes de empresas líderes como <strong>InfoJobs, Philips y BBVA</strong>, que compartieron sus experiencias y conocimientos, sentando las bases de una comunidad fuerte y colaborativa en España que no ha dejado de crecer desde entonces.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/about-2019">
                                ¿Quieres saber más? <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}