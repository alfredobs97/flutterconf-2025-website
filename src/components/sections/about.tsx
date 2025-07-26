import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">¿Qué es FlutterConf España?</h2>
                        <p className="text-muted-foreground text-lg">
                            FlutterConf España es la conferencia anual clave en España para profesionales y empresas que lideran el camino con Flutter. Nuestra misión es ser un punto de encuentro para compartir conocimientos, hacer networking y expandir los límites de lo que es posible con esta tecnología.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Esta conferencia está organizada por y para la comunidad, con el apoyo de GDG Marbella. Siguiendo el éxito de la primera FlutterConf en Europa, celebrada en Marbella en 2019 que reunió a expertos de empresas como InfoJobs, Philips y BBVA, seguimos construyendo una base sólida para la comunidad.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20"></div>
                        <Image 
                            src="https://storage.googleapis.com/altara-api-prod.appspot.com/google_cloud_sa_3c2a2145719342798e29e1d13a6929a0/user_3a1529a343464301a88efe0a61575778/request_991800f4f72847c2957b445899478440/image_79af81ca973e46c986c4f0f295b28d6c.png" 
                            alt="FlutterConf Logo" 
                            width={128} 
                            height={128} 
                            className="h-32 w-32 opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
