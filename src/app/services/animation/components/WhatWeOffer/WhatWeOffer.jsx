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
      title: "3D Character & Object Animation",
      description:
        "Lifelike movements, realistic physics, and expressive storytelling.",
      image: "/images/animation/offer1.png",
    },
    {
      title: "Product & Industrial Animation",
      description:
        "Showcase product features with precision, turning blueprints into motion.",
      image: "/images/animation/offer2.png",
    },
    {
      title: "Explainer & Promotional Videos",
      description:
        "Engaging, informative, and designed to educate, convert, and entertain.",
      image: "/images/animation/offer3.png",
    },
    {
      title: "UI/UX Motion Design",
      description:
        "Interactive animations that enhance user experience in digital applications",
      image: "/images/animation/offer4.png",
    },
    {
      title: "Cinematic VFX & Visual Effects",
      description:
        "High-end compositing, particle effects, and cinematic sequences that wow audiences.",
      image: "/images/animation/offer5.png",
    },
    {
      title: "Architectural & Engineering Animation",
      description:
        "3D visualization for construction projects, urban planning, and real estate presentations",
      image: "/images/animation/offer6.png",
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
