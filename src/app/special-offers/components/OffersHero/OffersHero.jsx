"use client";
import React from "react";
import styles from "./OffersHero.module.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Image from "next/image";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const OffersHero = () => {
  return (
    <section className={styles.offersHero}>
      <Image
        src={"/images/special-offers/hero1.png"}
        width={470}
        height={452}
        alt="hero1"
        quality={100}
      />
      <Image
        src={"/images/special-offers/hero2.png"}
        width={470}
        height={452}
        alt="hero2"
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
            <SectionLabel text={"Special Offers"} tag={"h1"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text={"Exclusive Deals on Home, <br/>Office, Fitness, and More!"}
              tag={"h1"}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="Discover our exclusive special offers and save on a range of high-quality 3D models and accessories! Whether you want to upgrade your home decor, enhance your office space, or organize your fitness equipment, we have something for everyone." />
            <TextBlock text="From stylish home solutions and functional office accessories to engaging toys and premium DIY tools, our specially curated sets offer significant discounts when you purchase in bundles. Explore the perfect mix of practicality and style while saving up to 20%!" />
            <TextBlock text="Don’t miss out on these limited-time offers — grab your favorite sets and enjoy exclusive savings on high-quality, versatile products designed to elevate your space and lifestyle. Buy more, save more!" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OffersHero;
