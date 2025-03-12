"use client";
import React from "react";
import styles from "./Showcase.module.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import Image from "next/image";

const Showcase = () => {
  const showcase = [
    {
      title: "Hyper-realistic 3D Models",
      image: "/images/home/showcase1.png",
    },
    {
      title: "Seamless Animations",
      image: "/images/home/showcase2.png",
    },
    {
      title: "Cinematic-Grade Video Production",
      image: "/images/home/showcase3.png",
    },
    {
      title: "UI/UX Designs",
      image: "/images/home/showcase4.png",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className={styles.body}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionTitle text={"Showcase"} tag={"h2"} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionLabel text={"Experience the Work That Defines Us"} />
        </motion.div>
        <div className={styles.row}>
          {showcase.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
              key={index}
            >
              <Image src={item.image} alt={item.title} fill quality={100} />
              <h4>{item.title}</h4>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h4>Ready to Be Inspired?</h4>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <WhiteButton text={"View Showcase"} url={"/showcase"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
