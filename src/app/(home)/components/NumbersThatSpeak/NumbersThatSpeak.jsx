"use client";
import React, { useRef } from "react";
import styles from "./NumbersThatSpeak.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const NumbersThatSpeak = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 30vh", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const numbers = [
    {
      title: "10+",
      text: "Years of combined experience in digital creation",
    },
    {
      title: "6+",
      text: "Global Reach – We work with clients across 6+ countries",
    },
    {
      title: "4.8/5",
      text: "Rating from our clients",
    },
    {
      title: "70+",
      text: "Projects completed and counting",
    },
  ];
  return (
    <section className={styles.numbersThatSpeak} ref={container}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            <SectionTitle text="Numbers That Speak" tag={"h2"} />
          </motion.div>
          <div className={styles.numbers}>
            {numbers.map((number, index) => (
              <motion.div
                style={{
                  y:
                    index === 0 ? y1 : index === 1 ? y2 : index === 2 ? y3 : y4,
                }}
                className={styles.number}
                key={index}
              >
                <span>{number.title}</span>
                <TextBlock text={number.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersThatSpeak;
