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
      title: "Industry-Leading Expertise",
      description:
        "We use cutting-edge software like Blender, Cinema 4D, and Unreal Engine to create stunning visuals.",
      image: "/images/animation/why1.png",
    },
    {
      title: "Tailored Storytelling",
      description:
        "Every animation is custom-designed to match your brand, product, or creative vision.",
      image: "/images/animation/why2.png",
    },
    {
      title: "Seamless Collaboration",
      description:
        "We work closely with you from storyboarding to final rendering for a smooth experience.",
      image: "/images/animation/why3.png",
    },
    {
      title: "Top-Quality Results",
      description:
        "Our animations are built for marketing, branding, entertainment, and interactive experiences.",
      image: "/images/animation/why4.png",
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
