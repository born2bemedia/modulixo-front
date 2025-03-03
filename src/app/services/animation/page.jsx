import React from "react";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import AnimationPackagesSection from "./components/AnimationPackagesSection/AnimationPackagesSection";

const AnimationPage = () => {
  return (
    <>
      <AnimationHero />
      <AnimationPackagesSection />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
