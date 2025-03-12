"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./InsightsHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const InsightsHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/insights/hero1.png"
        alt="hero1"
        width={329}
        height={373}
        quality={100}
      />
      <Image
        src="/images/insights/hero2.png"
        alt="hero2"
        width={404}
        height={451}
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
          <SectionLabel
            text={"Stay Ahead with the Latest in 3D, Animation, Video & UI/UX."}
          />
          <SectionTitle
            text={
              "Industry Trends, Creative <br/>Strategies & Expert <br/>Knowledge"
            }
            tag={"h1"}
          />
          <TextBlock
            text={
              "Welcome to Modulixo Insights, your go-to source for expert articles, industry trends, and creative inspiration. <br/>Here, we share deep dives into design, animation techniques, video production strategies, and UI/UX innovations <br/>— helping you stay at the forefront of digital creativity."
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsHero;
