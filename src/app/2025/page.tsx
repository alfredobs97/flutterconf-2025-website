import Hero from '@/components/sections/hero-2025';
import About from '@/components/sections/about';
import Speakers from '@/components/sections/speakers-2025';
import Agenda from '@/components/sections/agenda-2025';
import Sponsors from '@/components/sections/sponsors-2025';
import Info from '@/components/sections/info-2025';
import Contact from '@/components/sections/contact';
import PastEvent from '@/components/sections/past-event-2025';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Agenda />
      <PastEvent />
      <Sponsors />
      <Info />
      <Contact />
    </>
  );
}
