"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./WhatWeOffer.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const WhatWeOffer = () => {
  const offers = [
    {
      title: "Custom UI Design",
      description:
        "Visually appealing and brand-consistent interfaces that make an impact.",
      image: "/images/ui/offer1.png",
    },
    {
      title: "UX Research & Wireframing",
      description:
        "Data-driven user journey planning to optimize navigation and usability.",
      image: "/images/ui/offer2.png",
    },
    {
      title: "App & Web Prototyping",
      description:
        "Interactive prototypes for testing before development.",
      image: "/images/ui/offer3.png",
    },
    {
      title: "Responsive & Adaptive Design",
      description:
        "Flawless experience across desktop, tablet, and mobile.",
      image: "/images/ui/offer4.png",
    },
    {
      title: "User Testing & Feedback Optimization",
      description:
        "Enhancing interactions based on real user data.",
      image: "/images/ui/offer5.png",
    },
    {
      title: "Comprehensive Design Systems",
      description:
        "Full-scale UI component libraries for scalable projects.",
      image: "/images/ui/offer6.png",
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
            <SectionTitle text="What We Offer" tag="h2" />
          </motion.div>
          <div className={styles.offers}>
            {offers.map((offer, index) => (
              <div className={styles.offer} key={index}>
                <div className={styles.offerImage}>
                  <img src={offer.image} alt={offer.title} />
                </div>
                <div className={styles.offerContent}>
                  <h3>{offer.title}</h3>
                  <TextBlock text={offer.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
