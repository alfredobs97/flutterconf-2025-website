export type Speaker = {
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  bio: string;
  talkTitle: string;
  talkAbstract: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
};

export type AgendaEvent = {
  time: string;
  title: string;
  speaker?: string;
  type: 'talk' | 'workshop' | 'panel' | 'break';
  duration: number; // in minutes
};

export type Sponsor = {
  name: string;
  logoUrl: string;
  website: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
