"use client";
import React from "react";
import styles from "./ModellingInnerContact.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import ContactForm from "@/shared/ContactForm/ContactForm";
import Image from "next/image";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const ModellingInnerContact = () => {
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
            <SectionTitle
              text={"Bring Your Idea to Life – Start a Project"}
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
                "Have a custom 3D model, animation, or video project in mind? Whether you need a unique design for 3D printing, a <br/>cinematic animation, or a high-quality visual production, our team at Modulixo is ready to make it happen."
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
                "We work closely with you to understand your vision, optimize for functionality, and deliver professional-grade <br/>digital creations — built to impress. Let's collaborate and create something extraordinary!"
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <WhiteButton text={"Start Your Project Today"} type={"popup"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModellingInnerContact;
