"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { classifySupportRequest, ClassifySupportRequestOutput } from '@/ai/flows/classify-support-request';

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
  const [result, setResult] = useState<ClassifySupportRequestOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const aiResult = await classifySupportRequest({ query: values.message });
      setResult(aiResult);
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
            ¿Tienes alguna pregunta? Rellena el formulario y nuestro asistente con IA te dará una respuesta inicial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-2">
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
            <div className="flex items-center justify-center">
                {loading && <Loader2 className="h-16 w-16 animate-spin text-primary"/>}
                {error && <Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
                {result && (
                    <Alert>
                        <CheckCircle className="h-5 w-5"/>
                        <AlertTitle>¡Gracias por tu mensaje!</AlertTitle>
                        <AlertDescription className="space-y-4 mt-2">
                            <p>Hemos recibido tu consulta y nuestro sistema la ha clasificado como: <strong className="text-primary">{result.category}</strong>.</p>
                            <div className="p-4 bg-secondary/50 rounded-lg">
                                <p className="font-semibold mb-2 flex items-center gap-2"><Info className="h-4 w-4"/> Respuesta inicial sugerida:</p>
                                <p className="text-muted-foreground text-sm">{result.initialResponse}</p>
                            </div>
                            <p className="text-xs">Un miembro de nuestro equipo revisará tu consulta y se pondrá en contacto si es necesario.</p>
                        </AlertDescription>
                    </Alert>
                )}
                 {!loading && !result && !error && (
                    <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                       <p>El resultado de tu consulta aparecerá aquí.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
