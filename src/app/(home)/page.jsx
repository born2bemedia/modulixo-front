import Image from "next/image";
import Hero from "./components/Hero/Hero";
import WhatWeCreate from "./components/WhatWeCreate/WhatWeCreate";
import WhyWorkWithUs from "./components/WhyWorkWithUs/WhyWorkWithUs";
import NumbersThatSpeak from "./components/NumbersThatSpeak/NumbersThatSpeak";
import Showcase from "./components/Showcase/Showcase";
import Pricing from "./components/Pricing/Pricing";
import StayAhead from "./components/StayAhead/StayAhead";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import HomeContact from "./components/HomeContact/HomeContact";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeCreate />
      <WhyWorkWithUs />
      <NumbersThatSpeak />
      <Showcase />
      <TestimonialsSection />
      <Pricing />
      <StayAhead />
      <HomeContact />
      <div className={styles.footerImage}></div>
    </>
  );
}
