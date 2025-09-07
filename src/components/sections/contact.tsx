"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Contacta con Nosotros</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            ¿Tienes alguna pregunta sobre el evento, patrocinios o quieres colaborar? ¡Nos encantaría saber de ti!
          </p>
        </div>
        
        <div className="flex justify-center">
            <Card className="p-2 w-full max-w-md">
                <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground mb-4">Para cualquier consulta, puedes escribirnos a:</p>
                    <a href="mailto:flutterconf@gmail.com" className="text-xl font-bold text-primary hover:underline break-all">
                        flutterconf@gmail.com
                    </a>
                    <Button asChild className="mt-6 w-full max-w-xs mx-auto">
                        <a href="mailto:flutterconf@gmail.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar un Email
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
