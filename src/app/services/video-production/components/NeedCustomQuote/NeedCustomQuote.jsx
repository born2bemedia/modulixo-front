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
      title: "Production complexity (shooting, editing, VFX, animation)",
      image: "/images/video-production/icon1.svg",
    },
    {
      title: "Length & distribution format",
      image: "/images/video-production/icon2.svg",
    },
    {
      title: "Required crew & equipment",
      image: "/images/video-production/icon3.svg",
    },
    {
      title: "Number of filming days & post-production needs",
      image: "/images/video-production/icon4.svg",
    },
  ];
  return (
    <section className={styles.whatWeOffer}>
      <Image
        src="/images/video-production/need-custom-quote.png"
        alt="Need Custom Quote"
        width={539}
        height={486}
        quality={100}
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
            <WhiteButton text="View Pricing Details" url={"/pricing"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeedCustomQuote;
