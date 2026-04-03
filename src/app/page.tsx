import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Info from '@/components/sections/info';
import Contact from '@/components/sections/contact';
import PastEvent from '@/components/sections/past-event';
import SponsorsSection from '@/components/sections/sponsors-section';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SponsorsSection />
      <PastEvent />
      <Info />
      <Contact />
    </>
  );
}
