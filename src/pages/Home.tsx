import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Difference } from "@/components/sections/Difference";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { HorizontalDeals } from "@/components/sections/HorizontalDeals";
import { ScrollMarquee } from "@/components/sections/ScrollMarquee";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { OurPeoplePreview } from "@/components/sections/OurPeoplePreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { useGsapWithLenis } from "@/hooks/useGsap";

export default function Home() {
  useGsapWithLenis();

  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Difference />
      <TrackRecord />
      <HorizontalDeals />
      <ScrollMarquee />
      <WhoWeServe />
      <OurPeoplePreview />
      <ContactCTA />
    </>
  );
}
