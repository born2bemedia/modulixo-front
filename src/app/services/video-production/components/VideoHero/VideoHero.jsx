"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./VideoHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";

const AnimationHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/video-production/hero1.png"
        alt="hero1"
        width={660}
        height={854}
        quality={100}
      />
      <Image
        src="/images/video-production/hero2.png"
        alt="hero2"
        width={660}
        height={854}
        quality={100}
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
            text={
              "Video Production – Crafting <br/>Visual Stories That Captivate"
            }
            tag={"h1"}
          />
          <TextBlock
            text={
              "A great video does more than just capture visuals — it tells a story, evokes emotions, and leaves a lasting impact. <br/>At Modulixo, we specialize in high-quality video production, cinematic storytelling, and dynamic editing to create <br/>engaging content that resonates with audiences. Whether you need brand films, commercials, product showcases, <br/>or event recaps, our team ensures that every frame, cut, and transition delivers maximum impact."
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnimationHero;
