import React from "react";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import UiUxHero from "./components/UiUxHero/UiUxHero";
import UiUxPackagesSection from "./components/UiUxPackagesSection/UiUxPackagesSection";
import StepByStep from "./components/StepByStep/StepByStep";

const AnimationPage = () => {
  return (
    <>
      <UiUxHero />
      <WhatWeOffer />
      <UiUxPackagesSection />
      <StepByStep />
      <NeedCustomQuote />

      <WhyWork />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
