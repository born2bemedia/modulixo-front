import React from "react";
import AnimationHero from "./components/AnimationHero/AnimationHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";

const AnimationPage = () => {
  return (
    <>
      <AnimationHero />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default AnimationPage;
