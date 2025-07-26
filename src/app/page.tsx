import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Speakers from '@/components/sections/speakers';
import Agenda from '@/components/sections/agenda';
import Sponsors from '@/components/sections/sponsors';
import Info from '@/components/sections/info';
import Contact from '@/components/sections/contact';
import PastEvent from '@/components/sections/past-event';

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
