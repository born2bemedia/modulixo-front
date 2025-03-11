"use client";
import React, { useRef } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./PackageSection.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Packages from "../Packages/Packages";

const PackageSection = ({ title, description, categorySlug, color }) => {
  return (
    <section className={styles.packagesWrapper}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text={title} tag="h2" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text={description} />
          </motion.div>
          <Packages categorySlug={categorySlug} color={color} />
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
