"use client";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./ShowcaseSection.module.scss";
import { API_URL } from "@/helpers/constants";
import Image from "next/image";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import ShowcasePreviewCard from "@/shared/ui/ShowcasePreviewCard/ShowcasePreviewCard";

const ShowcaseSection = ({
  title,
  text,
  showcase,
  subtitle,
  buttonText,
  buttonLink,
  length,
}) => {
  console.log(showcase);

  return (
    <section className={styles.showcase}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text={title} tag={"h2"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text={text} />
          </motion.div>
          <div
            className={`${styles.loop} ${
              length == "three" ? styles.three : styles.four
            }`}
          >
            {showcase.map((item) =>
              item.video ? (
                <div className={styles.item} key={item.id}>
                  <ShowcasePreviewCard
                    image={item.image}
                    video={item.video}
                    title={item.title}
                    id={item.id}
                  />
                </div>
              ) : (
                <motion.div
                  key={item.id}
                  className={styles.item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <Image src={item.image} alt={item.title} fill />
                </motion.div>
              )
            )}
          </div>
          {subtitle && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h4>{subtitle}</h4>
            </motion.div>
          )}
          {buttonText && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <WhiteButton
                text={buttonText}
                url={buttonLink}
                type={buttonLink == "#" ? "popup" : "link"}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
