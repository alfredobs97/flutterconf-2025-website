"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Copy, Check, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

export default function Contact() {
  const { toast } = useToast();
  const email = "flutterconf@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast({
        title: "¡Copiado!",
        description: "El correo electrónico ha sido copiado al portapapeles.",
      });
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }, (err) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo copiar el correo electrónico.",
      });
    });
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            <Link href="#contact" className="hover:text-primary transition-colors">Contacta con Nosotros</Link>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            ¿Tienes alguna pregunta sobre el evento, patrocinios o quieres colaborar? ¡Nos encantaría saber de ti!
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="p-2 w-full max-w-md">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">Para cualquier consulta, puedes escribirnos a:</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-primary break-all">
                  {email}
                </span>
                <Button variant="ghost" size="icon" onClick={copyToClipboard} className="shrink-0">
                  {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                  <span className="sr-only">Copiar correo</span>
                </Button>
              </div>
              <Button asChild className="mt-6 w-full max-w-xs mx-auto">
                <a href={`mailto:${email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar un Email
                </a>
              </Button>
              <div className="mt-6 border-t pt-6">
                <p className="text-muted-foreground mb-4">Síguenos en nuestras redes:</p>
                <div className="flex justify-center items-center gap-4">
                  <a href="https://x.com/flutterconfes" target="_blank" rel="noopener noreferrer" aria-label="Twitter de FlutterConf ES" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/flutterconf-es" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de FlutterConf ES" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/flutterconfdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de FlutterConf ES" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
