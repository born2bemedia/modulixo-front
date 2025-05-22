"use client";
import React from "react";
import styles from "./ModellingContact.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const ModellingContact = () => {
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
            <SectionLabel text={"Struggling to Find the Right 3D Model?"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text={"Work with Modulixo to Create a <br/>Custom Design Made for You"}
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
                "Looking for a tailor-made 3D model or personalized printing advice? Whether you want to collaborate on a custom <br/>design, request a personalized 3D model, or simply have questions, we’re here to help. Send us your individual <br/>request or inquiry, and let’s create something exceptional together!"
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

export default ModellingContact;
