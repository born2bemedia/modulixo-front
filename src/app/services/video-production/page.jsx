import React from "react";
import VideoHero from "./components/VideoHero/VideoHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import VideoPackagesSection from "./components/VideoPackagesSection/VideoPackagesSection";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import CategorySection from "../3d-modelling/components/CategorySection/CategorySection";

const AnimationPage = () => {
  return (
    <>
      <VideoHero />
      <WhatWeOffer />
      <VideoPackagesSection />
      <NeedCustomQuote />
      <CategorySection
        title={"Browse Ready-Made Videos"}
        description={
          "Need high-quality video assets fast? We offer pre-designed video templates for marketing, branding, and social media campaigns."
        }
        categorySlug={"videos"}
      />

      <WhyWork />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
