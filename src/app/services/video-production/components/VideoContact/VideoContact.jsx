"use client";
import React from "react";
import styles from "./VideoContact.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";

const VideoContact = () => {
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
              text={"Get a Personalized Video <br/>Production Crafted Just for You by <br/>Modulixo"}
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
                "Need a custom-made video tailored to your exact needs? We are ready to assist if you want to partner on a <br/>unique project, provide detailed instructions, or have questions. Tell us your vision, and together, we’ll craft a <br/>powerful story that stands out!"
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

export default VideoContact;
