"use client";
import React from "react";
import styles from "./WhatWeCreate.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import MoreLink from "@/shared/ui/MoreLink/MoreLink";
import Link from "next/link";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import ItemTitle from "@/shared/ui/ItemTitle/ItemTitle";

const WhatWeCreate = () => {
  return (
    <section className={styles.whatWeCreate}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text={"What We Create"} tag={"h2"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionLabel text={"Designed to Inspire"} />
          </motion.div>
          <div className={styles.row}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href={"#"} className={styles.item}>
                <img src="/images/home/category1.png" alt="3D Modelling" />
                <div className={styles.info}>
                  <ItemTitle text={"3D Modelling"} tag={"h4"} />
                  <TextBlock
                    text={"From product designs to fully immersive worlds."}
                  />
                  <MoreLink />
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href={"#"} className={styles.item}>
                <img src="/images/home/category2.png" alt="Animation" />
                <div className={styles.info}>
                  <ItemTitle text={"Animation"} tag={"h4"} />
                  <TextBlock text={"High-impact motion that captivates."} />
                  <MoreLink />
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href={"#"} className={styles.item}>
                <img src="/images/home/category3.png" alt="Video Production" />
                <div className={styles.info}>
                  <ItemTitle text={"Video Production"} tag={"h4"} />
                  <TextBlock
                    text={"Storytelling that connects and converts."}
                  />
                  <MoreLink />
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href={"#"} className={styles.item}>
                <img src="/images/home/category4.png" alt="UX/UI Design" />
                <div className={styles.info}>
                  <ItemTitle text={"UX/UI Design"} tag={"h4"} />
                  <TextBlock
                    text={"Intuitive, user-first digital experiences."}
                  />
                  <MoreLink />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;
