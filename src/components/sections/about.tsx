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
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FlutterLogo className="h-32 w-32 text-primary opacity-80" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FlutterLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 14.5l5-5 5 5-5 5z" />
            <path d="M7 9.5l5-5 5 5" />
        </svg>
    )
}
