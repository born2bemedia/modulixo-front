"use client";
import React, { useRef } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./VideoPackagesSection.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import VideoPackages from "../VideoPackages/VideoPackages";

const VideoPackagesSection = () => {
  return (
    <section className={styles.videoPackages}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              text="Choose Your <br/>Video Production Package"
              tag="h2"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="We offer flexible packages for creatives and brands looking for exceptional video content." />
          </motion.div>
          <VideoPackages />
        </div>
      </div>
    </section>
  );
};

export default VideoPackagesSection;
