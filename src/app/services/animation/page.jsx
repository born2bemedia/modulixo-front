import React from "react";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import AnimationPackagesSection from "./components/AnimationPackagesSection/AnimationPackagesSection";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import CategorySection from "@/shared/ui/CategorySection/CategorySection";
import { animationShowcase } from "@/lib/showcase";
import ShowcaseSection from "@/app/showcase/components/ShowcaseSection/ShowcaseSection";
import AnimationContact from "./components/AnimationContact/AnimationContact";

export const metadata = {
  title: "Animation Services | Modulixo’s High-Quality Motion Design",
  description:
    "From explainer videos to cinematic animations, Modulixo creates stunning motion visuals that enhance branding, storytelling, and marketing.",
  openGraph: {
    title: "Animation Services | Modulixo’s High-Quality Motion Design",
    description:
      "From explainer videos to cinematic animations, Modulixo creates stunning motion visuals that enhance branding, storytelling, and marketing.",
    images: "https://modulixo.com/images/meta.png",
  },
};

const AnimationPage = () => {
  const showcase = animationShowcase.slice(0, 3);

  return (
    <>
      <AnimationHero />
      <WhatWeOffer />
      <AnimationPackagesSection />
      {/**<ShowcaseSection
        title={"Explore Our Animation Showcase"}
        text={
          "Get inspired by our collection of past animations crafted for branding, marketing, and storytelling. See how our work brings ideas to life with seamless motion, dynamic visuals, and high-quality execution."
        }
        showcase={showcase}
        buttonText="Discover Our Work"
        buttonLink="/showcase"
        length={"three"}
      /> */}
      <NeedCustomQuote />
      <WhyWork />
      <AnimationContact />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
