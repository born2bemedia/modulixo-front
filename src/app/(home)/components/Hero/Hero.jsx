"use client";
import React, { useRef } from "react";
import styles from "./Hero.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import Image from "next/image";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  //const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <>
      <section className={styles.hero} ref={container}>
        <div className="_container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.body}
          >
            <SectionLabel text={"We Design. We Animate. We Create."} />
            <SectionTitle
              text={"Where Ideas Take Shape & Stories Come Alive"}
              tag={"h1"}
            />
            <TextBlock
              text={
                "Your vision isn’t just an idea — it’s an experience waiting to happen. Modulixo transforms concepts into stunning 3D visuals, dynamic animations, cinematic productions, and intuitive UI/UX designs. Whether you’re a startup, creator, or brand pushing boundaries, we bring ideas to life with precision and creativity."
              }
            />
            <WhiteButton text={"Start Your Project Today"} type={"popup"} />
          </motion.div>
        </div>
        <div className={styles.imagesWrap}>
          <Image
            src={"/images/home/heroBack.webp"}
            fill
            alt="hero back"
            quality={100}
          />
          <motion.img
            style={{ y }} // This applies the smooth upward motion
            src="/images/home/color-picker.svg"
            alt="color picker"
          />
          <motion.img
            style={{ y }}
            src="/images/home/tools-bar.svg"
            alt="tools bar"
          />
        </div>
        <div className={styles.imagesWrapMob}>
          <img src="/images/home/heroBackMob.png" />
        </div>
      </section>
    </>
  );
};

export default Hero;
