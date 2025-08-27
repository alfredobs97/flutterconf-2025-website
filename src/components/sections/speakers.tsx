"use client";

import type { Speaker } from '@/types';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Twitter, Linkedin, UserPlus } from 'lucide-react';

const speakers: Speaker[] = [
    {
        name: 'Alfredo Bautista',
        title: 'Flutter developer',
        company: 'Greenflux',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1753630178/gde-badge-2-jpeg_jnsede.jpg',
        bio: 'Google Developer Expert en Flutter y Dart desde 2022 y desarrollador en Greenflux. Soy de Málaga y le pongo esa energía a mejorar la experiencia de los conductores de vehículos eléctricos. ¡Me encanta el café y la pizza! Sígueme en @alfredobs97.',
        talkTitle: 'Aplicaciones agénticas con Gemini y Firebase',
        talkAbstract: 'Ve más allá de los chatbots básicos y descubre el futuro de las aplicaciones inteligentes. Esta sesión se sumerge en el mundo de la IA agéntica, donde las aplicaciones no solo responden, sino que razonan, planifican y actúan. Aprenderás a usar los modelos Gemini de Google con el SDK de Firebase AI Logic para crear experiencias verdaderamente autónomas. Vete con el conocimiento para crear la próxima generación de aplicaciones inteligentes y agénticas que puedan realizar tareas complejas para tus usuarios.',
        socials: { twitter: 'https://x.com/alfredobs97', linkedin: 'https://www.linkedin.com/in/alfredo-bautista-santos-179b2b105/' }
    },
];

export default function Speakers() {
  return (
    <section id="speakers">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ponentes Confirmados</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Expertos y líderes de la industria que compartirán sus conocimientos y experiencias con Flutter.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Dialog key={speaker.name}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-0">
                    <Image
                      src={speaker.avatarUrl}
                      alt={speaker.name}
                      data-ai-hint="person portrait"
                      width={400}
                      height={400}
                      className="w-full h-auto aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-4 bg-background">
                    <h3 className="font-bold font-headline text-lg">{speaker.name}</h3>
                    <p className="text-sm text-primary">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.company}</p>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader className="flex flex-col sm:flex-row gap-6">
                    <Image src={speaker.avatarUrl} alt={speaker.name} data-ai-hint="person portrait" width={150} height={150} className="rounded-lg aspect-square object-cover" />
                    <div className="space-y-2 text-left">
                        <DialogTitle className="text-2xl font-headline">{speaker.name}</DialogTitle>
                        <DialogDescription>
                            {speaker.title} at {speaker.company}
                        </DialogDescription>
                        <div className="flex gap-2">
                            {speaker.socials.twitter && <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                            {speaker.socials.linkedin && <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                        </div>
                    </div>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <p className="text-sm text-foreground">{speaker.bio}</p>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-bold font-headline mb-2">Talk: {speaker.talkTitle}</h4>
                        <p className="text-sm text-muted-foreground">{speaker.talkAbstract}</p>
                    </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
           {speakers.length <= 1 && (
            <Card className="flex items-center justify-center border-2 border-dashed bg-secondary/50">
                <CardContent className="text-center text-muted-foreground p-6">
                    <UserPlus className="h-12 w-12 mx-auto mb-4 text-primary"/>
                    <h3 className="font-bold font-headline text-lg text-foreground">¡Más ponentes por confirmar!</h3>
                    <p>Estamos trabajando para traerte a los mejores.</p>
                </CardContent>
            </Card>
           )}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfI6g-gNwXg5iVIIsia7UhUKnKP9uK2v9dsPFyhCw2yY5pgQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    Become a Speaker
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
