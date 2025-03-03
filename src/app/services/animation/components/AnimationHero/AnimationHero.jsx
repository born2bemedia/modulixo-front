"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./AnimationHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";

const AnimationHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/animation/hero1.png"
        alt="hero1"
        width={660}
        height={854}
      />
      <Image
        src="/images/animation/hero2.png"
        alt="hero2"
        width={660}
        height={854}
      />
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.body}
        >
          <SectionTitle
            text={"Animation – Turning <br/>Concepts into Motion"}
            tag={"h1"}
          />
          <TextBlock
            text={
              "At Modulixo, static visuals evolve into dynamic, high-impact animations that captivate, educate, and inspire. <br/>Whether it’s product demos, cinematic sequences, promotional content, or complex motion graphics, our <br/>animations are crafted with precision, creativity, and purpose. We specialize in 3D animation, motion design, and <br/>VFX to help brands, businesses, and creators communicate their message effectively."
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnimationHero;
