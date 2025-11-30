import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Info from '@/components/sections/info';
import Contact from '@/components/sections/contact';
import PastEvent from '@/components/sections/past-event';
import CallForPapers from '@/components/sections/call-for-papers';
import SponsorsSection from '@/components/sections/sponsors-section';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CallForPapers />
      <SponsorsSection />
      <PastEvent />
      <Info />
      <Contact />
    </>
  );
}
