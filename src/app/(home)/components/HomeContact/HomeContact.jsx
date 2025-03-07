"use client";
import React from "react";
import styles from "./HomeContact.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import ContactForm from "@/shared/ContactForm/ContactForm";
import Image from "next/image";

const HomeContact = () => {
  return (
    <section className={styles.homeContact}>
      <Image
        src="/images/home/contact1.png"
        alt="home-contact"
        width={470}
        height={620}
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
            <SectionTitle
              text={"Let’s Build Something Extraordinary"}
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
              text={"Your vision is waiting. Let’s bring it to life."}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
