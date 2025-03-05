"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./NeedCustomQuote.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import Image from "next/image";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const NeedCustomQuote = () => {
  const offers = [
    {
      title: "Project complexity (number of screens, UI elements, animations, interactivity)",
      image: "/images/video-production/icon1.svg",
    },
    {
      title: "Research depth (competitor analysis, user behavior studies, A/B testing)",
      image: "/images/video-production/icon2.svg",
    },
    {
      title: "Development handoff (design system, dev-ready assets, style guides)",
      image: "/images/video-production/icon3.svg",
    },
  ];
  return (
    <section className={styles.whatWeOffer}>
      <Image
        src="/images/ui/need-custom-quote.png"
        alt="Need Custom Quote"
        width={539}
        height={486}
      />
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionLabel text="Tell us about your vision, and we’ll provide a tailored quote." />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text="Need a Custom Quote? <br/>Let’s Talk Pricing!"
              tag="h2"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="Every project is unique. Custom animations are priced based on:" />
          </motion.div>
          <div className={styles.offers}>
            {offers.map((offer, index) => (
              <div className={styles.offer} key={index}>
                <img src={offer.image} alt={offer.title} />
                <h3>{offer.title}</h3>
              </div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.button}
          >
            <WhiteButton text="View Pricing Details" url={"#"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeedCustomQuote;
