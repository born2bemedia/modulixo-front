"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./WhyWork.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const WhyWork = () => {
  const offers = [
    {
      title: "User-Centered Approach",
      description:
        "Every design is built with real user behavior and engagement in mind.",
      image: "/images/ui/why1.png",
    },
    {
      title: "Industry-Leading Tools",
      description:
        "We use Figma, Adobe XD, Sketch, and other top-tier platforms for UI/UX design.",
      image: "/images/ui/why2.png",
    },
    {
      title: "Future-Proof Solutions",
      description:
        "We create scalable and adaptable UI/UX systems for long-term usability.",
      image: "/images/ui/why3.png",
    },
    {
      title: "Pixel-Perfect Execution",
      description:
        "Every element, font, and color is optimized for a seamless, visually stunning experience.",
      image: "/images/ui/why4.png",
    },
  ];
  return (
    <section className={styles.whatWeOffer}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text="Why Work With Modulixo?" tag="h2" />
          </motion.div>
          <div className={styles.offers}>
            {offers.map((offer, index) => (
              <div
                className={styles.offer}
                key={index}
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div>
                  <div className={styles.offerContent}>
                    <h3>{offer.title}</h3>
                    <TextBlock text={offer.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
