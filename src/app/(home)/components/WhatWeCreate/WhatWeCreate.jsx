import React from "react";
import styles from "./WhatWeCreate.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const WhatWeCreate = () => {
  return (
    <section className={styles.whatWeCreate}>
      <div className="_container">
        <div className={styles.body}>
          <SectionTitle text={"What We Create"} tag={"h2"} />
          <SectionLabel text={"Designed to Inspire"} />
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;
