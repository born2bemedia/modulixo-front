import React from "react";
import QaHero from "./components/QaHero/QaHero";
import TellUs from "./components/TellUs/TellUs";
import styles from "./page.module.scss";
import QaWrapper from "./components/QaWrapper/QaWrapper";

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
