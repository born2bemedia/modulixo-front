"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./PricingHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const PricingHero = () => {
  return (
    <section className={styles.hero}>
      {/**<Image
        src="/images/animation/hero1.png"
        alt="hero1"
        width={660}
        height={854}
        quality={100}
      />
      <Image
        src="/images/animation/hero2.png"
        alt="hero2"
        width={660}
        height={854}
        quality={100}
      /> */}
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.body}
        >
          <SectionLabel
            text={
              "High-Quality 3D, Animation, Video & Design – Tailored to Your Needs."
            }
          />
          <SectionTitle
            text={"Transparent & Scalable <br/>Solutions for Every Project"}
            tag={"h1"}
          />
          <TextBlock
            text={
              "At Modulixo, we offer flexible, scalable pricing designed to fit a range of project needs — from custom <br/>animations and cinematic video production to intuitive UI/UX design and high-quality 3D models for printing. <br/>Whether you’re looking for a quick solution, a full-scale production, or ready-to-print 3D models, we provide <br/>transparent, upfront pricing with no hidden costs."
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
