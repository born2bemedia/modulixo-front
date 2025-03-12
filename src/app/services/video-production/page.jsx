import React from "react";
import VideoHero from "./components/VideoHero/VideoHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import VideoPackagesSection from "./components/VideoPackagesSection/VideoPackagesSection";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import CategorySection from "../../../shared/ui/CategorySection/CategorySection";
import ShowcaseSection from "@/app/showcase/components/ShowcaseSection/ShowcaseSection";
import { videoShowcase } from "@/lib/showcase";

const AnimationPage = () => {
  const showcase = videoShowcase.slice(0, 3);

  return (
    <>
      <VideoHero />
      <WhatWeOffer />
      <VideoPackagesSection />
      <NeedCustomQuote />

      <ShowcaseSection
        title={"Explore Our Video Showcase"}
        text={
          "Discover our portfolio of professionally crafted videos designed for marketing, branding, and social media engagement. See how we bring stories to life through cinematic visuals, dynamic editing, and high-impact storytelling."
        }
        showcase={showcase}
        length={"three"}
      />

      <WhyWork />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
