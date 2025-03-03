"use client";
import React, { useRef } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationPackagesSection.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import AnimationPackages from "../AnimationPackages/AnimationPackages";

const AnimationPackagesSection = () => {
  return (
    <section className={styles.animationPackages}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text="Choose Your Animation Package" tag="h2" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="Flexible, scalable, and tailored to your needs — our packages fit every project, from short clips to high-end <br/>cinematic productions." />
          </motion.div>
          <AnimationPackages />
        </div>
      </div>
    </section>
  );
};

export default AnimationPackagesSection;
