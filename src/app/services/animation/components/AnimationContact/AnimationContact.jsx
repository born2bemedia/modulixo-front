"use client";
import React from "react";
import styles from "./AnimationContact.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const AnimationContact = () => {
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
            <SectionLabel text={"Didn’t Find the Perfect Animation?"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text={"Request the Custom One With <br/>Modulixo"}
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
                "Got a unique animation idea? Whether you want to collaborate on a custom animation, discuss specific <br/>requirements, or have questions, we’re here to help. Share your vision, and let’s bring your story to life together!"
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

export default AnimationContact;
