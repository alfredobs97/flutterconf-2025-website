import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Info from '@/components/sections/info';
import Contact from '@/components/sections/contact';
import PastEvent from '@/components/sections/past-event';
import SponsorsSection from '@/components/sections/sponsors-section';
import Agenda from '@/components/sections/agenda';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SponsorsSection />
      <Agenda />
      <PastEvent />
      <Info />
      <Contact />
    </>
  );
}
