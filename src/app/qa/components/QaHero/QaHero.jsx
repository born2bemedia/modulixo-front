"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./QaHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const QaHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/qa/hero1.png"
        alt="hero1"
        width={392}
        height={394}
        quality={100}
      />
      <Image
        src="/images/qa/hero2.png"
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
          <SectionLabel text={"Got Questions? We’ve Got Answers!"} />
          <SectionTitle
            text={"Everything You Need to <br/>Know About Modulixo"}
            tag={"h1"}
          />
          <TextBlock
            text={
              "We believe in transparency and clarity and in helping you make informed decisions. Whether interested in 3D <br/>modelling, animation, video production, or UI/UX design, this Q&A section covers the most common questions <br/>about our services, process, and pricing. If you don’t find what you’re looking for, feel free to contact us and we’ll <br/>be happy to assist you!"
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QaHero;
