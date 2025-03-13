import React from "react";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyWork from "./components/WhyWork/WhyWork";
import NeedCustomQuote from "./components/NeedCustomQuote/NeedCustomQuote";
import UiUxHero from "./components/UiUxHero/UiUxHero";
import UiUxPackagesSection from "./components/UiUxPackagesSection/UiUxPackagesSection";
import StepByStep from "./components/StepByStep/StepByStep";
import { uxShowcase } from "@/lib/showcase";
import ShowcaseSection from "@/app/showcase/components/ShowcaseSection/ShowcaseSection";

export const metadata = {
  title: "UI/UX Design Services | Stunning Interfaces & Digital Experiences",
  description:
    "Modulixo designs seamless, user-friendly digital experiences for websites, apps, and platforms, blending creativity with functionality.",
  openGraph: {
    title: "UI/UX Design Services | Stunning Interfaces & Digital Experiences",
    description:
      "Modulixo designs seamless, user-friendly digital experiences for websites, apps, and platforms, blending creativity with functionality.",
    images: "https://modulixo.com/images/meta.png",
  },
};

const AnimationPage = () => {
  const showcase = uxShowcase.slice(0, 3);

  return (
    <>
      <UiUxHero />
      <WhatWeOffer />
      <UiUxPackagesSection />
      <StepByStep />
      <NeedCustomQuote />

      <WhyWork />

      <ShowcaseSection
        title={"Explore Our UI/UX Design Showcase"}
        text={
          "Discover how intuitive design meets seamless functionality in our past projects. From engaging websites to interactive mobile experiences, our UI/UX solutions are crafted to enhance user journeys, drive engagement, and create visually stunning digital products."
        }
        showcase={showcase}
        length={"three"}
      />

      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
