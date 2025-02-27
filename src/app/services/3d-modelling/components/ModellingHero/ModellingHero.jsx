"use client";
import React from "react";
import styles from "./ModellingHero.module.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";

const ModellingHero = () => {
  return (
    <section className={styles.modellingHero}>
      <Image
        src={"/images/modelling/hero1.png"}
        width={470}
        height={452}
        alt="hero1"
      />
      <Image
        src={"/images/modelling/hero2.png"}
        width={470}
        height={452}
        alt="hero2"
      />
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text={"Crafting Dimensions: <br/>3D Models for Printing & Beyond"}
              tag={"h1"}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="We turn ideas into high-quality, print-ready 3D models. Whether you need custom designs, optimized 3D prints, or ready-made models, our precision-crafted digital creations bring innovation to life. Explore our shop for a growing collection of functional, decorative, and creative 3D models for seamless printing." />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModellingHero;
