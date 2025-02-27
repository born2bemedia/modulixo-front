"use client";
import React from "react";
import styles from "./Pricing.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import MoreLink from "@/shared/ui/MoreLink/MoreLink";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Link from "next/link";
import Image from "next/image";

const Pricing = () => {
  const items = [
    {
      title: "Browse Our Packages",
      url: "#",
      image: "/images/home/pricing1.png",
      linkText: "View Pricing",
    },
    {
      title: "Need a Custom Quote?",
      url: "#",
      image: "/images/home/pricing2.webp",
      linkText: "Request Now",
    },
  ];

  return (
    <section className={styles.pricing}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text="Need Pricing? Let’s Talk Numbers" tag={"h2"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="We believe in transparent, flexible pricing that fits your needs." />
          </motion.div>
          <div className={styles.row}>
            {items.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.item}
                key={index}
              >
                <Link href={item.url}>
                  <Image src={item.image} alt={item.title} fill />
                  <h4>{item.title}</h4>
                  <div className={styles.button}>
                    <MoreLink text={item.linkText} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
