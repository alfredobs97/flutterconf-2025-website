"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Send, CheckCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      form.reset();
    } catch (e) {
      setError("An unexpected error occurred. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Contacta con Nosotros</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            ¿Tienes alguna pregunta? Rellena el formulario para contactarnos.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-12">
            <Card className="p-2 w-full max-w-2xl">
                <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl><Input placeholder="Tu nombre" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl><Input type="email" placeholder="tu@email.com" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl><Textarea placeholder="¿En qué podemos ayudarte?" {...field} rows={6}/></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                            Enviar Mensaje
                        </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
            <div className="flex items-center justify-center w-full max-w-2xl min-h-[120px]">
                {loading && <Loader2 className="h-16 w-16 animate-spin text-primary"/>}
                {error && <Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
                {submitted && (
                    <Alert>
                        <CheckCircle className="h-5 w-5"/>
                        <AlertTitle>¡Gracias por tu mensaje!</AlertTitle>
                        <AlertDescription className="space-y-4 mt-2">
                            <p>Hemos recibido tu consulta y te responderemos pronto.</p>
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
