import React from "react";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import AnimationPackagesSection from "./components/AnimationPackagesSection/AnimationPackagesSection";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import CategorySection from "../3d-modelling/components/CategorySection/CategorySection";

const AnimationPage = () => {
  return (
    <>
      <AnimationHero />
      <WhatWeOffer />
      <AnimationPackagesSection />
      <CategorySection
        title={"Browse Ready-Made Animations"}
        description={
          "Need high-quality animations fast? Explore our pre-designed, ready-to-use animations, perfect for branding, marketing, and presentations."
        }
        categorySlug={"animations"}
      />
      <NeedCustomQuote />
      <WhyWork />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
