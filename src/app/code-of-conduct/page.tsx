import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CodeOfConductPage() {
    return (
        <div className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl">Código de Conducta de FlutterConf España 2025</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-muted-foreground">
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">Nuestra Misión</h2>
                            <p>
                                En FlutterConf España, nuestro objetivo es crear un espacio de encuentro inclusivo, profesional y seguro para toda la comunidad tecnológica. Queremos que cada asistente, ponente, patrocinador y voluntario disfrute del evento en un entorno libre de acoso, donde prime el respeto, la colaboración y el aprendizaje mutuo. Este código de conducta refleja nuestro compromiso con esa misión y se aplica a todos los espacios del evento, tanto físicos como digitales (charlas, talleres, zonas de descanso, redes sociales y canales de comunicación oficiales).
                            </p>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">Comportamiento Esperado</h2>
                            <p>Para garantizar un ambiente positivo para todos, esperamos que los miembros de nuestra comunidad se comporten de la siguiente manera:</p>
                            <ul>
                                <li><strong>Sé respetuoso y considerado:</strong> Trata a todos los participantes con respeto. Valora la diversidad de opiniones, experiencias y orígenes. Las críticas constructivas son bienvenidas, pero siempre desde la educación y el respeto.</li>
                                <li><strong>Sé inclusivo y acogedor:</strong> Haz un esfuerzo por incluir a todos los participantes en las conversaciones y actividades. Evita el uso de lenguaje o humor que pueda ser excluyente, ofensivo o que perpetúe estereotipos.</li>
                                <li><strong>Sé profesional:</strong> Compórtate de manera profesional. Esto incluye ser consciente del impacto de tus palabras y acciones en los demás. Recuerda que las bromas que a ti te parecen inofensivas pueden ofender a otros.</li>
                                <li><strong>Colabora y participa de buena fe:</strong> El objetivo de este evento es compartir conocimiento. Participa activamente, haz preguntas y ayuda a otros cuando puedas.</li>
                            </ul>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">Comportamiento Inaceptable</h2>
                            <p>No se tolerará ningún tipo de acoso o comportamiento inaceptable. Esto incluye, entre otros:</p>
                            <ul>
                                <li>Comentarios ofensivos o despectivos relacionados con la identidad de género, orientación sexual, discapacidad, apariencia física, raza, etnia, religión o edad.</li>
                                <li>Intimidación deliberada, acoso, acecho o seguimiento.</li>
                                <li>Publicación de imágenes o uso de lenguaje de naturaleza sexual en espacios públicos o charlas.</li>
                                <li>Interrupción continuada de charlas, talleres u otros eventos.</li>
                                <li>Contacto físico inapropiado y atención sexual no deseada.</li>
                                <li>Incitar a cualquiera de los comportamientos anteriores.</li>
                            </ul>
                            <p>Este tipo de conductas no tienen cabida en FlutterConf España.</p>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">¿Cómo Reportar una Incidencia?</h2>
                            <p>
                                Si te sientes inseguro/a, eres testigo de una violación de este código de conducta, o tienes cualquier otra preocupación, por favor, contacta inmediatamente con un miembro de la organización del evento. Los organizadores serán fácilmente identificables por su camiseta o credencial.
                            </p>
                            <p>Tu reporte será tratado con la máxima confidencialidad y seriedad. Puedes hacerlo de las siguientes maneras:</p>
                            <ul>
                                <li><strong>En persona:</strong> Acércate a cualquier miembro del equipo de organización.</li>
                                <li><strong>Por correo electrónico:</strong> Escribe a gdgmarbella@gmail.com. Este correo será monitorizado constantemente durante el evento.</li>
                            </ul>
                            <p>Al reportar, por favor, intenta incluir tantos detalles como sea posible (qué pasó, quién estuvo involucrado, cuándo y dónde ocurrió) para que podamos actuar de manera efectiva. La seguridad y el bienestar de nuestros asistentes es nuestra máxima prioridad.</p>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">Consecuencias de un Comportamiento Inaceptable</h2>
                            <p>Cualquier participante a quien se le pida que cese un comportamiento inaceptable deberá cumplir la petición de inmediato.</p>
                            <p>
                                El equipo de organización se reserva el derecho de tomar las medidas que considere apropiadas, incluyendo la advertencia verbal, la expulsión del evento sin reembolso, o la prohibición de asistir a futuros eventos. En casos graves, nos pondremos en contacto con las autoridades locales.
                            </p>
                            <p>
                                Este Código de Conducta se basa en las directrices de la comunidad GDG y otros eventos tecnológicos de referencia. Nuestro objetivo es que todos los que participen en FlutterConf España se sientan bienvenidos y seguros.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
