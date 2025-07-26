'use server';

/**
 * @fileOverview This file defines a Genkit flow for classifying support requests and generating automated initial responses.
 *
 * - classifySupportRequest - A function that classifies support requests and provides an initial response.
 * - ClassifySupportRequestInput - The input type for the classifySupportRequest function.
 * - ClassifySupportRequestOutput - The return type for the classifySupportRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassifySupportRequestInputSchema = z.object({
  query: z
    .string()
    .describe('The support request query submitted by the user.'),
});
export type ClassifySupportRequestInput = z.infer<
  typeof ClassifySupportRequestInputSchema
>;

const ClassifySupportRequestOutputSchema = z.object({
  category: z
    .string()
    .describe(
      'The classified category of the support request (e.g., sponsorship, ticket issue, speaker inquiry).'
    ),
  initialResponse: z
    .string()
    .describe(
      'An automated initial response to the support request, providing immediate assistance or guidance.'
    ),
});
export type ClassifySupportRequestOutput = z.infer<
  typeof ClassifySupportRequestOutputSchema
>;

export async function classifySupportRequest(
  input: ClassifySupportRequestInput
): Promise<ClassifySupportRequestOutput> {
  return classifySupportRequestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'classifySupportRequestPrompt',
  input: {schema: ClassifySupportRequestInputSchema},
  output: {schema: ClassifySupportRequestOutputSchema},
  prompt: `You are an AI assistant tasked with classifying support requests and generating automated initial responses.

  Analyze the user's query and determine the most appropriate category for the request (e.g., sponsorship, ticket issue, speaker inquiry).
  Then, generate a helpful and informative initial response that addresses the user's query and provides guidance on how to resolve their issue or whom to contact for further assistance.

  Query: {{{query}}}

  Category: {{category}}
  Initial Response: {{initialResponse}}`,
});

const classifySupportRequestFlow = ai.defineFlow(
  {
    name: 'classifySupportRequestFlow',
    inputSchema: ClassifySupportRequestInputSchema,
    outputSchema: ClassifySupportRequestOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
