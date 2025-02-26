import Image from "next/image";
import Hero from "./components/Hero/Hero";
import WhatWeCreate from "./components/WhatWeCreate/WhatWeCreate";
import WhyWorkWithUs from "./components/WhyWorkWithUs/WhyWorkWithUs";
import NumbersThatSpeak from "./components/NumbersThatSpeak/NumbersThatSpeak";
import Showcase from "./components/Showcase/Showcase";
import Pricing from "./components/Pricing/Pricing";
import StayAhead from "./components/StayAhead/StayAhead";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeCreate />
      <WhyWorkWithUs />
      <NumbersThatSpeak />
      <Showcase />
      <Pricing />
      <StayAhead />
    </>
  );
}
