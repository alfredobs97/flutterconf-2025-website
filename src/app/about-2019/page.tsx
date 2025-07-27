import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Users, Award, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function About2019Page() {
    return (
        <div className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl">FlutterConf 2019: El Comienzo de Todo</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-muted-foreground">
                        <section className="py-2">
                             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                                <Image
                                    src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753554068/48952580842_785e732a06_c_mcnurg.jpg"
                                    alt="Foto del evento de 2019"
                                    layout="fill"
                                    objectFit="cover"
                                    data-ai-hint="conference event"
                                />
                            </div>
                            <h2 className="text-2xl font-headline font-bold text-foreground">Nota de Prensa: Primera Conferencia Europea en Marbella</h2>
                            <p>
                                FlutterConf fue la primera conferencia europea sobre Flutter y Dart, la nueva tecnología de Google que está revolucionando el mundo de la programación de aplicaciones móviles.
                            </p>
                            <p>
                                Google Developer Group Marbella reunió durante los días 18 y 19 de octubre a expertos de toda Europa que se formaron y expusieron los avances de esta nueva tecnología. Con la participación de Google Developers Experts y responsables técnicos de empresas como InfoJobs, Philips o BBVA, cuya app móvil ha sido nombrada mejor aplicación de finanzas del mundo.
                            </p>
                             <p>
                                El evento se celebró los próximos 18 y 19 de octubre en el Centro Cultural El Trapiche de San Pedro de Alcántara congregando a más de 120 personas que recibieron talleres formativos y charlas durante dos días. Para incentivar a que talento local se inicie en esta tecnología, se realizaron también talleres de nivel principiante para estudiantes o profesionales en el desarrollo de tecnología que quieran dar sus primeros pasos con Flutter y Dart.
                            </p>
                             <p>
                                FlutterConf abordó los últimos avances de esta tecnología de Google y gracias a Google Developers Experts y ponentes de empresas internacionales expusieron cómo han usado estas tecnologías en proyectos de gran impacto para empresas como BBVA o Philips.
                            </p>
                        </section>

                        <section className="py-6 grid md:grid-cols-2 gap-8">
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2"><Users />Una Iniciativa Comunitaria</h3>
                                <p>FlutterConf surge como iniciativa de GDG Marbella (Google Developers Group Marbella) con la colaboración de la asociación Marbella Digital. Una iniciativa que nació desde la comunidad para la comunidad, con amplia experiencia organizando eventos sin ánimo de lucro.</p>
                            </div>
                             <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2"><Award />Soporte y Reconocimiento</h3>
                                <p>El evento estuvo patrocinado por Google, Hidralia y contó con la colaboración de la Delegación de Fomento Económico y Pymes del Ayuntamiento de Marbella junto a empresas y medios locales.</p>
                            </div>
                        </section>

                        <section className="py-2">
                             <h2 className="text-2xl font-headline font-bold text-foreground">Nuestra Trayectoria</h2>
                            <p>
                                El evento de 2019 fue solo el comienzo. Desde entonces, hemos sido el epicentro de Flutter y Dart en Europa, organizando múltiples hackathons, conferencias online y talleres que han mantenido a la comunidad conectada y en constante crecimiento.
                            </p>
                            <p>
                                Nuestro último gran evento presencial, la <strong>Edición 2023</strong> en Marbella, congregó a más de 200 personas en Andalucía Lab, con la participación de colegios de la zona y ponentes de talla internacional como Nilay Yener, Developer Relations de Flutter en Google (EE. UU.).
                            </p>
                        </section>
                        
                        <section className="py-6 text-center">
                            <Button size="lg" asChild>
                                <a href="https://www.flickr.com/photos/145521657@N07/albums/72157711462488992" target="_blank" rel="noopener noreferrer">
                                    <Camera className="mr-2 h-5 w-5" />
                                    Ver álbum de fotos oficial
                                </a>
                            </Button>
                        </section>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}