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
      title: "State-of-the-Art Equipment",
      description:
        "We use cinema-grade cameras, lenses, and lighting for professional-quality videos.",
      image: "/images/video-production/why1.png",
    },
    {
      title: "Creative Storytelling",
      description:
        "Every video is crafted to engage, entertain, and achieve your goals.",
      image: "/images/video-production/why2.png",
    },
    {
      title: "Seamless Process & Collaboration",
      description:
        "We work closely with clients from concept to final edit for the perfect result.",
      image: "/images/video-production/why3.png",
    },
    {
      title: "Diverse Expertise",
      description:
        "From corporate projects to viral social content, we create videos that stand out.",
      image: "/images/video-production/why4.png",
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
