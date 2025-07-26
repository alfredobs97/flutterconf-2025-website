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
import { Twitter, Linkedin } from 'lucide-react';

const speakers: Speaker[] = [
    {
        name: 'Jane Doe',
        title: 'Lead Flutter Engineer',
        company: 'Google',
        avatarUrl: 'https://placehold.co/400x400.png',
        bio: 'Jane is a passionate Flutter developer with over 10 years of experience in mobile development. She is a GDE for Flutter and Dart and loves sharing her knowledge with the community.',
        talkTitle: 'The Future of Declarative UIs with Flutter',
        talkAbstract: 'In this talk, we will explore the latest advancements in Flutter\'s declarative UI framework and how it compares to other modern UI toolkits. We will look at performance improvements, new widgets, and best practices for building beautiful and performant apps.',
        socials: { twitter: '#', linkedin: '#' }
    },
    {
        name: 'John Smith',
        title: 'Senior Software Architect',
        company: 'Microsoft',
        avatarUrl: 'https://placehold.co/400x400.png',
        bio: 'John is an expert in cross-platform development and has been working with Flutter since its early days. He has a passion for clean architecture and state management.',
        talkTitle: 'Scaling Flutter Apps for the Enterprise',
        talkAbstract: 'This session will cover strategies and patterns for building large-scale Flutter applications that are maintainable, scalable, and ready for enterprise environments. We will discuss modularization, state management solutions, and CI/CD pipelines.',
        socials: { twitter: '#', linkedin: '#' }
    },
    {
        name: 'Maria Garcia',
        title: 'Mobile Tech Lead',
        company: 'BBVA',
        avatarUrl: 'https://placehold.co/400x400.png',
        bio: 'Maria leads the mobile development team at a major bank, where they have successfully migrated their native apps to Flutter. She is an advocate for testing and code quality.',
        talkTitle: 'From Native to Flutter: A Migration Story',
        talkAbstract: 'Join us to learn about the journey of migrating a large-scale banking application from native iOS and Android to a single Flutter codebase. We will share challenges, learnings, and the business impact of this transition.',
        socials: { twitter: '#', linkedin: '#' }
    },
    {
        name: 'David Martinez',
        title: 'Flutter Consultant',
        company: 'IndieDev',
        avatarUrl: 'https://placehold.co/400x400.png',
        bio: 'David is an independent consultant helping companies adopt Flutter. He is the author of several popular Flutter packages and a frequent speaker at tech conferences.',
        talkTitle: 'Mastering Flutter Animations',
        talkAbstract: 'A deep dive into Flutter\'s animation system. From implicit and explicit animations to custom painters and Rive integrations, this talk will equip you with the skills to create stunning animations in your apps.',
        socials: { twitter: '#', linkedin: '#' }
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
