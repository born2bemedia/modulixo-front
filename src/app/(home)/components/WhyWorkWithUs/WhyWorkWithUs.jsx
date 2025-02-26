"use client";
import React, { useRef } from "react";
import styles from "./WhyWorkWithUs.module.scss";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import ItemTitle from "@/shared/ui/ItemTitle/ItemTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import Image from "next/image";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useTransform } from "framer-motion";

const WhyWorkWithUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const items = [
    {
      title: "Young, Ambitious, & Fearless",
      text: "We bring fresh perspectives, cutting-edge tools, and bold creativity.",
    },
    {
      title: "Detail-Oriented Execution",
      text: "Every frame, every pixel, every moment is carefully crafted.",
    },
    {
      title: "Tailored to Your Vision",
      text: "We don’t do cookie-cutter — we do custom.",
    },
    {
      title: "Fast Turnaround, No Compromise",
      text: "Efficiency meets perfection in every project.",
    },
  ];

  return (
    <section className={styles.whyWorkWithUs} ref={container}>
      <motion.div style={{ y }} className={styles.image}>
        <Image
          src={"/images/home/whyTop.png"}
          width={962}
          height={881}
          alt="whyTop"
        />
      </motion.div>
      <motion.div className={styles.image}>
        <Image
          src={"/images/home/whyBottom.png"}
          width={962}
          height={881}
          alt="whyBottom"
        />
      </motion.div>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text="Why Work With Modulixo?" tag={"h2"} />
          </motion.div>
          <div className={styles.items}>
            {items.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.item}
                key={index}
              >
                <ItemTitle text={item.title} tag={"h4"} />
                <TextBlock text={item.text} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <WhiteButton text={"Discover Our Team"} url={"#"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
