import type { Speaker, AgendaEvent } from '@/types';

export const speakers: Speaker[] = [
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
    },
    {
        name: 'Daria Orlova',
        title: 'Co-founder @ BBapps',
        company: 'BBapps',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758041507/Screenshot_2025-09-16_at_6.51.42_PM_qqj8cy.png',
        bio: 'Daria is a Flutter GDE & Flutterista 💜, co-founder of BBapps – apps that care for you and the planet 🌍🫶🏽. She’s the co-author of Flutter Design Patterns and Best Practices 📚 and a regular speaker at international tech conferences 🎤, as well as the co-organizer behind Flutter Riga and Flutter & Friends. In her free time, she likes travelling, dancing, and learning languages.',
        talkTitle: 'To SQL or NoSQL? Firebase is the Answer',
        talkAbstract: 'Firebase has long offered NoSQL databases, but 2024 brought Firebase DataConnect, a new SQL-based option. In this talk, I’ll share how I adopted it for my Bunny Search app: the wins, the struggles, and what it’s really like using a brand-new product in production. You’ll leave with a clear answer when DataConnect is the right choice, and when it’s not.',
        socials: { twitter: 'https://x.com/dariadroid', linkedin: 'https://www.linkedin.com/in/daria-orlova-47a44110a/' }
    },
    {
        name: 'Lukas Klingsbo',
        title: 'Open Source Engineer',
        company: 'Blue Fire',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758041773/profile_gde-lukas_kvjv9z.jpg',
        bio: 'Lukas is a GDE for Flutter & Dart and part of the open source collective called Blue Fire, which develops popular packages like Flame and Audioplayers. Lukas is also a maintainer for Melos. On his free-time he enjoys programming, climbing and playing the handpan.',
        talkTitle: 'An introduction to Building Games with Flutter & Flame',
        talkAbstract: 'Flame is an open source and completely free game engine for Flutter. While you can create cross platform games in pure Flutter, it becomes quite hard once you start building more advanced games, and that\'s where Flame comes in to help you! In this talk we will both go through both generic gamedev concepts and things specific to Flame.',
        socials: { twitter: 'https://x.com/spydon', linkedin: 'https://linkedin.com/in/spydon' }
    },
    {
        name: 'Victor Carreras',
        title: 'CTO Mobile DCX',
        company: 'Capgemini',
        avatarUrl: 'https://res.cloudinary.com/dxifmrvbs/image/upload/v1758280957/codemotion_smaller-min_ioacua.jpg',
        bio: 'Con más de 6 años inmerso en el desarrollo móvil, ha evolucionado desde sus inicios como desarrollador y escalado con maestría roles clave, consolidándose como líder técnico, arquitecto y desarrollador integral hasta su rol actual como CTO Mobile Experience DCX en Capgemini donde lidera equipos especializados en Flutter, Android e iOS contribuyendo al éxito de proyectos de envergadura.',
        talkTitle: 'Gestiona el modo mantenimiento y las versiones de tu app con Firebase.',
        talkAbstract: '¿Te gustaría poder activar el modo mantenimiento de tu app o de que todos tus usuarios actualicen a la última versión? En esta charla aprenderás cómo usar Firebase Remote Config para tomar el control total de tu aplicación móvil en tiempo real. Veremos cómo implementar un sistema de mantenimiento remoto, cómo forzar actualizaciones según la versión instalada y cómo comunicar estos cambios de forma efectiva a los usuarios.',
        socials: { twitter: 'https://x.com/vicajilau', linkedin: 'linkedin.com/in/vicajilau' }
    }
];

export const day1Schedule: AgendaEvent[] = [
    { time: '08:30', title: 'Bienvenida y networking', type: 'break', duration: 30 },
    { time: '09:00', title: 'Opening', type: 'talk', duration: 15, speaker: 'Conoce FlutterConf y empieza con nosotros el evento' },
    { time: '09:15', title: 'Aplicaciones agénticas con Gemini y Firebase', type: 'talk', duration: 30, speaker: 'Alfredo Bautista' },
    { time: '09:45', title: 'Who is a Native Bindings Author and why you should be one', type: 'talk', duration: 30, speaker: 'Hossein Yousefi' },
    { time: '10:15', title: 'To SQL or NoSQL? Firebase is the Answer', type: 'talk', duration: 30, speaker: 'Daria Orlova' },
    { time: '10:45', title: 'Coffee Break', type: 'break', duration: 30 },
    { time: '11:15', title: 'Recetas Mágicas para Android Studio con Gemini', type: 'talk', duration: 30, speaker: 'Gema Socorro Rodríguez' },
    { time: '11:45', title: 'Accessibility First: Building an App with Support for Various Disabilities', type: 'talk', duration: 30, speaker: 'Enzo Conty' },
    { time: '12:15', title: 'Gestiona el modo mantenimiento y las versiones de tu app con Firebase.', type: 'talk', duration: 30, speaker: 'Victor Carreras' },
    { time: '12:45', title: 'An introduction to Building Games with Flutter & Flame', type: 'talk', duration: 30, speaker: 'Lukas Klingsbo' },
    { time: '13:15', title: 'Charla', type: 'talk', duration: 30, speaker: 'Publicaremos la informacion próximamente' },
    { time: '13:45', title: 'Closing', type: 'talk', duration: 15, speaker: 'Publicaremos la informacion próximamente' },
    { time: '14:00', title: 'Networking', type: 'break', duration: 60 },
];

export const day1AfternoonSchedule: AgendaEvent[] = [
    { time: '16:15', title: 'Bienvenida parte 2', type: 'break', duration: 15 },
    { time: '16:30', title: 'Mesa de comunidades', speaker: 'Diferentes comunidades de Flutter participarán para dar su visión', type: 'panel', duration: 60 },
    { time: '17:30', title: 'Dart Conversations', speaker: 'Nuestro Podcast donde comentaremos todo lo vivido en la FlutterConf', type: 'panel', duration: 60 },
    { time: '18:30', title: 'Networking con Cervezas Victoria', speaker: 'Acompáñanos a cerrar el evento con la colaboración malagueña de Cervezas Victoria', type: 'break', duration: 30 },
];

export const day2Schedule: AgendaEvent[] = [
   { time: '10:30', title: 'Café-networking', type: 'break', duration: 60 },
   { time: '11:30', title: 'Presentación de comunidades', type: 'talk', duration: 45 },
   { time: '12:15', title: 'Lightning talks sobre temas Dart y Flutter', type: 'talk', duration: 45 },
   { time: '13:00', title: 'Cierre evento', type: 'talk', duration: 15 },
];
