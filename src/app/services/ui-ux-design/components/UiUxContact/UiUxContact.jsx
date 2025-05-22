"use client";
import React from "react";
import styles from "./UiUxContact.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const UiUxContact = () => {
  return (
    <section className={styles.modellingContact}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionLabel text={"Looking for a Video That Truly Fits Your Vision?"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text={"Get a Custom Solution Designed <br/>Just for You by Modulixo"}
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
                "Have a specific user experience goal or project in mind? Whether you want to collaborate on a custom solution, <br/>provide detailed instructions, or simply inquire, we’re here to assist. Share your ideas, and together we’ll create an <br/>engaging and seamless user journey!"
              }
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

export default UiUxContact;
