"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./NeedCustomQuote.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import Image from "next/image";

const NeedCustomQuote = () => {
  const offers = [
    {
      title: "Project complexity & animation style",
      image: "/images/animation/icon1.svg",
    },
    {
      title: "Length & level of detail",
      image: "/images/animation/icon2.svg",
    },
    {
      title: "Number of revisions & custom assets",
      image: "/images/animation/icon3.svg",
    },
    {
      title: "Deadlines & turnaround time",
      image: "/images/animation/icon4.svg",
    },
  ];
  return (
    <section className={styles.whatWeOffer}>
      <Image
        src="/images/animation/need-custom-quote.png"
        alt="Need Custom Quote"
        width={749}
        height={686}
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
        </div>
      </div>
    </section>
  );
};

export default NeedCustomQuote;
