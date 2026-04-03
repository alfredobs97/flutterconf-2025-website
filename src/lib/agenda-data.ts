export interface Session {
  time: string;
  title: string;
  speaker?: string;
  role?: string;
  imageUrl?: string;
  descriptionKey?: string;
  type: 'session' | 'break' | 'event';
  track: 'morning' | 'afternoon';
  language?: 'es' | 'en';
}

export const agendaData: Session[] = [
  {
    time: "09:00 - 09:30",
    title: "Bienvenida y networking",
    type: "break",
    track: "morning"
  },
  {
    time: "09:30 - 09:45",
    title: "Opening",
    type: "event",
    track: "morning"
  },
  {
    time: "09:45 - 10:15",
    title: "From Uncertainty to Opportunity - Building Your Future with Flutter",
    speaker: "Ivanna Kaceviča",
    role: "GDE in Flutter and Dart, Lead Software Engineer at LMT IoT",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203590/Ivanna_aiwigb.png",
    descriptionKey: "agenda2026.sessions.ivannaDesc",
    type: "session",
    track: "morning",
    language: "en"
  },
  {
    time: "10:15 - 10:45",
    title: "De Flutter a Dart Frog: Introducción al backend con Dart",
    speaker: "Marcos Sevilla",
    role: "Senior Engineer at Very Good Ventures",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203602/IMG_3910_pqzvma.jpg",
    descriptionKey: "agenda2026.sessions.marcosDesc",
    type: "session",
    track: "morning",
    language: "es"
  },
  {
    time: "10:45 - 11:15",
    title: "GenUI, dejando la experiencia de usuario en manos de una LLM",
    speaker: "Juan Delgado",
    role: "Technical Delivery Lead at Very Good Ventures",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203582/juan_delgado_wp0ivj.jpg",
    descriptionKey: "agenda2026.sessions.juanDesc",
    type: "session",
    track: "morning",
    language: "es"
  },
  {
    time: "11:15 - 11:45",
    title: "Coffee break",
    type: "break",
    track: "morning"
  },
  {
    time: "11:45 - 12:45",
    title: "Taller - Live Coding Apps agénticas",
    speaker: "Alfredo Bautista",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203898/gde-badge-2-jpeg_jaubcs.jpg",
    descriptionKey: "agenda2026.sessions.alfredoDesc",
    type: "session",
    track: "morning",
    language: "es"
  },
  {
    time: "12:50 - 13:30",
    title: "Networking Estudiantes",
    type: "break",
    track: "morning"
  },
  {
    time: "15:00 - 15:30",
    title: "Doors open and registration",
    type: "break",
    track: "afternoon"
  },
  {
    time: "15:30 - 15:45",
    title: "Welcome introduction",
    type: "event",
    track: "afternoon"
  },
  {
    time: "15:45 - 16:15",
    title: "Tree shake everything!",
    speaker: "Daco Harkes",
    role: "Senior Software Engineer at Google",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203598/fotoshoot_square_zaiay6.jpg",
    descriptionKey: "agenda2026.sessions.dacoDesc",
    type: "session",
    track: "afternoon",
    language: "en"
  },
  {
    time: "16:15 - 16:45",
    title: "A Tale of Two Tests: Flutter A/B Experiments at Different Scales",
    speaker: "Wiktoria Grochowalska",
    role: "Flutter Developer at Grupa Pracuj",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203576/Wiktoria_30_mfmpaq.jpg",
    descriptionKey: "agenda2026.sessions.wiktoriaDesc",
    type: "session",
    track: "afternoon",
    language: "en"
  },
  {
    time: "16:45 - 17:15",
    title: "Generative SDUI: Orchestrating Dynamic Interfaces with Flutter, Serverpod, and Gemini",
    speaker: "Victor Carreras",
    role: "Mobile CTO DCX at Capgemini",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203602/codemotion_nppj49.jpg",
    descriptionKey: "agenda2026.sessions.victorDesc",
    type: "session",
    track: "afternoon",
    language: "en"
  },
  {
    time: "17:15 - 18:00",
    title: "Break & networking",
    type: "break",
    track: "afternoon"
  },
  {
    time: "18:00 - 18:30",
    title: "Teaching coding agents to judge UI",
    speaker: "Lukas Josefiak",
    role: "CEO & Co-Founder at Widgetbook",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203581/010-46216da324-LTE-a14f2_ocuo86.jpg",
    descriptionKey: "agenda2026.sessions.lukasDesc",
    type: "session",
    track: "afternoon",
    language: "en"
  },
  {
    time: "18:30 - 19:00",
    title: "Multi-Radio Flutter: Architecting Apps with UWB, BLE, and Beyond",
    speaker: "Ahmed Hamdan",
    role: "Flutter Unit Head at MaibornWolff GmbH",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203554/Untitled_design_4_eudmtm.png",
    descriptionKey: "agenda2026.sessions.ahmedDesc",
    type: "session",
    track: "afternoon",
    language: "en"
  },
  {
    time: "19:00 - 19:30",
    title: "Evolution of flutter_gemma: From a Simple Wrapper to a Cross-Platform AI Engine",
    speaker: "Sasha Denisov",
    role: "CTO at Brainform.ai & GDE",
    imageUrl: "https://res.cloudinary.com/dxifmrvbs/image/upload/v1775203556/SASHA1_sdybzn.jpg",
    descriptionKey: "agenda2026.sessions.sashaDesc",
    type: "session",
    track: "afternoon",
    language: "en"
  },
  {
    time: "19:30 - 20:30",
    title: "Closing, Networking and Drinks",
    type: "event",
    track: "afternoon"
  }
];
