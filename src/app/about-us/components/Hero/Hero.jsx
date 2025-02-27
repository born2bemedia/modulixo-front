"use client";
import React, { useRef } from "react";
import styles from "./Hero.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

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
            <SectionLabel text={"Every Great Idea Deserves a Dimension — We Make It Happen."} />
            <SectionTitle
              text={"Blueprinting the Future, One Layer at a Time"}
              tag={"h1"}
            />
            <TextBlock
              text={
                "At Modulixo, we believe the best ideas deserve to exist beyond the screen. We take imagination, data, and artistry and turn them into tangible digital masterpieces. 3D modeling, animation, video production, or UX/UI design, our work brings depth, motion, and life to every project. From futuristic designs to hyper-realistic environments, we don’t just create — we engineer experiences"
              }
            />
            <WhiteButton text={"Start Your Project Today"} type={"button"} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;