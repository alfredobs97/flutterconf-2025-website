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
        talkAbstract: 'Ve más allá de los chatbots básicos y descubre el futuro de las aplicaciones inteligentes. Esta sesión se sumerge en el mundo de la IA agéntica, donde las aplicaciones no solo responden, sino que razonan, planifican y actúan. Aprenderás a usar los modelos Gemini de Google con el SDK de Firebase AI Logic para crear experiencias verdaderamente autónomas. Vete con el conocimiento para crear la próxima generación de aplicaciones inteligentes y agénticas que pueden realizar tareas complejas para tus usuarios.',
        socials: { twitter: 'https://x.com/alfredobs97', linkedin: 'https://www.linkedin.com/in/alfredo-bautista-santos-179b2b105/' }
    },
    {
        name: 'Hossein Yousefi',
        title: 'Software Engineer',
        company: 'Google',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1756305352/photo_mbavpz.jpg',
        bio: 'Making interop fluid between Dart and Java/Kotlin.',
        talkTitle: 'Who is a Native Bindings Author and why you should be one',
        talkAbstract: 'The traditional Flutter plugin model, with its unified APIs, is powerful for creating consistent cross-platform experiences. However, this approach can present challenges. The process often involves manually implementing method channels, which can be time-consuming and prone to runtime errors. Furthermore, keeping unified abstractions in sync across multiple platforms is complex work, and sometimes we need access to a new feature faster than a manual process allows.\n\nThis talk introduces a complementary paradigm: the Native Bindings Author. We\'ll explore a world where focused, single-platform packages (built with powerful and type-safe code generation tools like FFIgen and JNIgen) can accelerate development and unlock new possibilities.',
        socials: { twitter: 'https://x.com/YousefiDash', linkedin: 'https://www.linkedin.com/in/hosseinyousefi' }
    },
    {
        name: 'Enzo Conty',
        title: 'CTO at Ezymob / GDE Flutter & Dart',
        company: 'Ezymob',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1757780420/Screenshot_2025-09-13_at_6.19.32_PM-min_c8fev6.png',
        bio: 'Enzo Conty currently serves as the CTO of Ezymob, applying his extensive skills as a Sr. Mobile SWE honed over seven years of freelancing. Renowned for his expertise in Flutter, he has developed numerous innovative applications exploring new platforms such as Steam Deck, embeddable systems, drink distributors and even Steam games. Enzo also enriches the tech community by organizing the GDG Bordeaux and Flutter Meetup Group Bordeaux.',
        talkTitle: 'Accessibility First: Building an App with Support for Various Disabilities',
        talkAbstract: 'In this session, I will share my experience creating an app that prioritizes accessibility and supports different disabilities. We will discuss the development of user interfaces that cater to a wide range of users, including those with visual impairments such as color blindness, cognitive disabilities, and mobility impairments.\n\nIn detail: we will explore the techniques for designing inclusive UIs, such as high-contrast visuals, adaptable font sizes, and appropriate color schemes for color-blind users. Additionally, we will address the significance of semantic widgets to enhance accessibility.\n\nUsing practical examples, development insights, and fail attempts this talk aims to raise awareness about the importance of accessibility in apps.',
        socials: { twitter: 'https://x.com/EnzoConty', linkedin: 'https://www.linkedin.com/in/enzoconty/' }
    },
    {
        name: 'Gema Socorro Rodríguez',
        title: 'Senior Android Engineer',
        company: 'Medtronic',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1757780166/Gemaprofile-min_swm8s8.png',
        bio: 'Llevo +15 años programando en Android nativo (sí, de esas que aman Kotlin y XML). Vengo como "espía" a territorio Flutter porque cuando descubrí los hechizos mágicos de Gemini en Android Studio, no pude resistirme a compartirlos con toda la comunidad móvil. Mi superpoder: encuentro el gif perfecto para cada situación y ahora, gracias a la IA, también genero código que funciona a la primera... casi siempre. 😉',
        talkTitle: 'Recetas Mágicas para Android Studio con Gemini',
        talkAbstract: '¿Y si te dijera que Android Studio ahora tiene su propia varita mágica? En esta charla descubrirás cómo Gemini 2.5 Pro está transformando el desarrollo Android con capacidades que parecen sacadas de Hogwarts.\nAprenderás 6 "hechizos" prácticos que revolucionarán tu flujo de trabajo: desde Journeys que genera tests con lenguaje natural, hasta Agent Mode que refactoriza arquitecturas completas. Veremos ejemplos de cómo Gemini puede arreglar crashes automáticamente, transformar interfaces con simples instrucciones, y mantener tus dependencias siempre actualizadas.\nEsta sesión está diseñada para desarrolladoras y desarrolladores de todos los niveles que quieran multiplicar su productividad. Saldrás con conocimientos prácticos listos para aplicar desde el primer día. No se requiere experiencia previa con IA, solo ganas de aprender magia moderna del desarrollo.\n¿Lista/o para convertirte en maga o mago del código?',
        socials: { twitter: 'https://x.com/gemamsr', linkedin: 'https://www.linkedin.com/in/gemasr/' }
    }
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
                <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col">
                  <CardContent className="p-0">
                    <Image
                      src={speaker.avatarUrl}
                      alt={speaker.name}
                      data-ai-hint="person portrait"
                      width={400}
                      height={400}
                      className="w-full h-auto aspect-square object-cover object-center transition-transform group-hover:scale-105"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-4 bg-secondary/30 flex-grow">
                    <h3 className="font-bold font-headline text-lg">{speaker.name}</h3>
                    <p className="text-sm text-primary">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.company}</p>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader className="flex flex-col sm:flex-row gap-6">
                    <Image src={speaker.avatarUrl} alt={speaker.name} data-ai-hint="person portrait" width={150} height={150} className="rounded-lg aspect-square object-cover object-center" />
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
      </div>
    </section>
  );
}
