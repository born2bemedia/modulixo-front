"use client";
import React from "react";
import styles from "./CurrentDeals.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const CurrentDeals = () => {
  return (
    <section className={styles.currentDeals}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionLabel text={"Discover Our Current Deals"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text={"Exclusive 3D Modelling Offers Just for You"}
              tag={"h2"}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock
              text={
                "Looking for the best deals on custom 3D models? We have exciting special offers that make bringing your creative ideas to life more affordable. Don’t miss out on these limited-time promotions!"
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock
              text={
                "Take advantage of exclusive discounts, bundled deals, and more. Perfect for new projects or getting that custom 3D model you’ve been dreaming about."
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <WhiteButton
              text={"Explore Our Special Offers"}
              type={"link"}
              url={"/special-offers"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentDeals;
