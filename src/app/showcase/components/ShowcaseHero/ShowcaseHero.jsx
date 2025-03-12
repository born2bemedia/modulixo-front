"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./ShowcaseHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const ShowcaseHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/showcase/hero1.png"
        alt="hero1"
        width={392}
        height={394}
        quality={100}
      />
      <Image
        src="/images/showcase/hero2.png"
        alt="hero2"
        width={323}
        height={463}
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
          <SectionLabel text={"Discover Our Work, See the Impact"} />
          <SectionTitle
            text={"Bringing Digital <br/>Creations to Life"}
            tag={"h1"}
          />
          <TextBlock
            text={
              "At Modulixo, we turn ideas into stunning visuals, seamless animations, and immersive digital experiences. Our <br/>showcase is a testament to our expertise, creativity, and attention to detail — from precisely crafted 3D models <br/>to cinematic videos and intuitive UI/UX designs. Take a look at our past projects and see what’s possible!"
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseHero;
