"use client";
import React from "react";
import styles from "./PricingDownload.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import ContactForm from "@/shared/ContactForm/ContactForm";
import Image from "next/image";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import DownloadIcon from "@/shared/icons/DownloadIcon";
import Link from "next/link";

const PricingDownload = () => {
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
            <SectionTitle text={"Download Our Full Price List"} tag={"h2"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock
              text={
                "Want to see all pricing details in one place? Download our comprehensive price list, including additional services, <br/>custom solutions, and optional add-ons."
              }
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="#" target="_blank">
              <DownloadIcon />
              Download Price List
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingDownload;
