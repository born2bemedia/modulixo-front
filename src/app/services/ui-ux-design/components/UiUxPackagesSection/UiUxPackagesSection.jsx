"use client";
import React, { useRef } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./UiUxPackagesSection.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import UiUxPackages from "../UiUxPackages/UiUxPackages";

const UiUxPackagesSection = () => {
  return (
    <section className={styles.videoPackages}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text="Choose Your <br/>UI/UX Package"
              tag="h2"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="We offer scalable design solutions tailored for individuals and independent creators." />
          </motion.div>
          <UiUxPackages />
        </div>
      </div>
    </section>
  );
};

export default UiUxPackagesSection;
