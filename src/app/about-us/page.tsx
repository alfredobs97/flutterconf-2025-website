import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Users, Award, Star, Video, Handshake, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
    return (
        <div className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl">Nuestra Historia</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-muted-foreground">
                        <section className="py-2">
                             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                                <Image
                                    src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753698587/48952397566_63ebd371e5_c_fz4j04.jpg"
                                    alt="Foto del evento de 2019"
                                    layout="fill"
                                    objectFit="cover"
                                    data-ai-hint="conference event"
                                />
                            </div>
                            <h2 className="text-2xl font-headline font-bold text-foreground">2019: La Primera Conferencia Europea en Marbella</h2>
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
                             <div className="text-center mt-6">
                                <Button size="lg" asChild>
                                    <a href="https://www.flickr.com/photos/145521657@N07/albums/72157711462488992" target="_blank" rel="noopener noreferrer">
                                        <Camera className="mr-2 h-5 w-5" />
                                        Álbum de fotos 2019
                                    </a>
                                </Button>
                            </div>
                        </section>

                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">2020-2023: Crecimiento Online</h2>
                            <p>
                                A pesar de los desafíos globales, la comunidad de Flutter en España no dejó de crecer. Durante estos años, nos adaptamos y organizamos múltiples eventos online para mantener a la comunidad conectada, incluyendo hackathons y conferencias virtuales que llegaron a miles de desarrolladores:
                            </p>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                <a href="https://www.youtube.com/watch?v=cXhTGQppycU" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Flutter in the Dark I</span>
                                </a>
                                 <a href="https://www.youtube.com/watch?v=o5hxLf_jHZI" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Lightning Flutter</span>
                                </a>
                                 <a href="https://www.youtube.com/watch?v=Ify7Ex3C9Oo" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Flutter Fighters</span>
                                </a>
                                 <a href="https://www.youtube.com/watch?v=X_42SUN0Lnw" target="_blank" rel="noopener noreferrer" className="bg-secondary/30 p-4 rounded-lg flex items-center gap-3 hover:bg-secondary transition-colors">
                                    <Video className="h-6 w-6 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground">Flutter in the Dark II</span>
                                </a>
                            </div>
                        </section>

                        <section className="py-2">
                             <h2 className="text-2xl font-headline font-bold text-foreground">2023: Nueva edición en Marbella</h2>
                            <p>
                                Nuestro último gran evento presencial fue un éxito rotundo. La <strong>Edición 2023</strong> en Marbella congregó a más de 200 personas en Andalucía Lab, con la participación de colegios de la zona y ponentes de talla internacional como Nilay Yener, Developer Relations de Flutter en Google (EE. UU.).
                            </p>
                             <div className="text-center mt-6">
                                <Button size="lg" asChild>
                                    <a href="https://photos.app.goo.gl/8wvF3Rp1rumynV956" target="_blank" rel="noopener noreferrer">
                                        <Camera className="mr-2 h-5 w-5" />
                                        Álbum de fotos 2023
                                    </a>
                                </Button>
                            </div>
                        </section>

                        <section className="py-6 grid md:grid-cols-2 gap-8">
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2"><Users />Una Iniciativa Comunitaria</h3>
                                <p>FlutterConf surge como iniciativa de GDG Marbella (Google Developers Group Marbella) con la colaboración de la asociación Marbella Digital. Una iniciativa que nació desde la comunidad para la comunidad, con amplia experiencia organizando eventos sin ánimo de lucro.</p>
                            </div>
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2"><Globe />Reconocimiento Global</h3>
                                <p>El evento cuenta con un alcance global y una reputación validada por el equipo de Flutter en Estados Unidos, atrayendo a ponentes y asistentes de todo el mundo.</p>
                            </div>
                        </section>

                        <section className="py-6">
                             <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="text-xl font-headline font-bold text-foreground flex items-center gap-2"><Handshake />Soporte de la Industria</h3>
                                <p className="mb-4">A lo largo de nuestra historia, hemos contado con el apoyo de empresas líderes que creen en el poder de la comunidad y la tecnología. Algunos de nuestros colaboradores han sido:</p>
                                <p className="font-semibold text-muted-foreground">Google, Flutter, Hidralia, Andalucía Lab, HandCash, Malt, OpenWebinars, y muchos más.</p>
                            </div>
                        </section>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
