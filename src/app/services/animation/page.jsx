import React from "react";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import AnimationPackagesSection from "./components/AnimationPackagesSection/AnimationPackagesSection";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";

const AnimationPage = () => {
  return (
    <>
      <AnimationHero />
      <WhatWeOffer />
      <AnimationPackagesSection />
      <NeedCustomQuote />
      <WhyWork />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
