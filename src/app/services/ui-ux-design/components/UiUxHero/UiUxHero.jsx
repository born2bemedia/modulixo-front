"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./UiUxHero.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";

const UiUxHero = () => {
  return (
    <section className={styles.hero}>
      <Image src="/images/ui/hero1.png" alt="hero1" width={660} height={854} />
      <Image src="/images/ui/hero2.png" alt="hero2" width={660} height={854} />
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
              "UI/UX Design – Creating <br/>Seamless & Intuitive Digital <br/>Experiences"
            }
            tag={"h1"}
          />
          <TextBlock
            text={
              "A well-crafted user interface (UI) and user experience (UX) are the backbone of any successful digital product. At <br/>Modulixo, we create visually stunning, highly functional, and user-friendly interfaces that ensure a seamless journey <br/>across web, mobile, and digital platforms. From concept to completion, our team delivers designs that enhance <br/>usability, drive engagement, and elevate brand identity."
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UiUxHero;
