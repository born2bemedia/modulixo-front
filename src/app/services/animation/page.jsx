import React from "react";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import AnimationPackagesSection from "./components/AnimationPackagesSection/AnimationPackagesSection";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import CategorySection from "@/shared/ui/CategorySection/CategorySection";

const AnimationPage = () => {
  return (
    <>
      <AnimationHero />
      <WhatWeOffer />
      <AnimationPackagesSection />
      <CategorySection
        title={"Explore Our Animation Showcase"}
        description={
          "Get inspired by our collection of past animations crafted for branding, marketing, and storytelling. See how our work brings ideas to life with seamless motion, dynamic visuals, and high-quality execution."
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
