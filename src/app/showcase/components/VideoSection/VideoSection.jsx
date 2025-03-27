"use client";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoSection.module.scss";
import { API_URL } from "@/helpers/constants";
import Image from "next/image";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import ShowcasePreviewCard from "@/shared/ui/ShowcasePreviewCard/ShowcasePreviewCard";

const VideoSection = ({
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
                  <ReactPlayer
                    playing={true}
                    width={"100%"}
                    url={`${item.video}`}
                    controls={true}
                    light={item.image}
                    loop={true}
                    className={styles.video}
                    height={"100%"}
                    playIcon={
                      <img
                        width={32}
                        height={32}
                        src="/images/showcase/play.svg"
                      />
                    }
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

export default VideoSection;
