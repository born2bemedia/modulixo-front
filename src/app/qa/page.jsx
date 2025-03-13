import React from "react";
import QaHero from "./components/QaHero/QaHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import QaWrapper from "./components/QaWrapper/QaWrapper";

export const metadata = {
  title: "Modulixo Q&A | Your Questions, Answered",
  description:
    "Have questions about our services? Explore our detailed Q&A to learn about our 3D modelling, animation, video production, and UI/UX offerings.",
  openGraph: {
    title: "Modulixo Q&A | Your Questions, Answered",
    description:
      "Have questions about our services? Explore our detailed Q&A to learn about our 3D modelling, animation, video production, and UI/UX offerings.",
    images: "https://modulixo.com/images/meta.png",
  },
};

const page = () => {
  return (
    <>
      <QaHero />
      <QaWrapper />
      <TellUs />
      <div className={styles.footerImage}></div>
    </>
  );
};

export default page;
