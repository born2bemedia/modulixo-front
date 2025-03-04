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
      title: "Commercial & Brand Videos",
      description:
        "High-quality productions that tell your brand story with impact.",
      image: "/images/video-production/offer1.png",
    },
    {
      title: "Product Showcase & Promo Videos",
      description:
        "Highlight features, benefits, and usability with stunning visuals.",
      image: "/images/video-production/offer2.png",
    },
    {
      title: "Corporate & Explainer Videos",
      description:
        "Engaging, professional content designed to educate and inform.",
      image: "/images/video-production/offer3.png",
    },
    {
      title: "Event & Recap Videos",
      description:
        "Capture the best moments from conferences, product launches, and live events.",
      image: "/images/video-production/offer4.png",
    },
    {
      title: "Social Media & Short-Form Content",
      description:
        "Viral-ready content optimized for Instagram, TikTok, and YouTube Shorts.",
      image: "/images/video-production/offer5.png",
    },
    {
      title: "Cinematic Storytelling & Film Production",
      description:
        "Professional-grade visuals with advanced cinematography and VFX.",
      image: "/images/video-production/offer6.png",
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
