"use client";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import Link from "next/link";
import React from "react";
import styles from "./InsightsLoop.module.scss";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";

const InsightsLoop = ({ insights }) => {
  return (
    <section className={styles.loop}>
      <div className="_container">
        <div className={styles.body}>
          {insights.map((insight, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
              key={index}
            >
              <SectionLabel text={`Article ${index + 1}`} />
              <SectionTitle text={insight.title} tag={"h3"} />
              <TextBlock text={insight.excerpt} />
              <WhiteButton
                text={"Read More"}
                url={`/insights/${insight.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsLoop;
