"use client";
import React, { useRef } from "react";
import styles from "./TellUs.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import Link from "next/link";
import ArrowWhite from "@/shared/icons/ArrowWhite";
import usePopupStore from "@/stores/popupStore";

const TellUs = () => {
  const container = useRef(null);
  const { setGetQuotePopupDisplay } = usePopupStore();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  //const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <>
      <section className={styles.hero} ref={container}>
        <div className="_container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.body}
          >
            <SectionTitle
              text={"Tell Us About Your Video Production Project"}
              tag={"h2"}
            />
            <TextBlock
              text={
                "The more details you provide, the better we can understand your needs! Let us know your video type, preferred style, duration, and any elements you’d like included."
              }
            />
            <div className={styles.links}>
              <button
                className={styles.link}
                onClick={() => setGetQuotePopupDisplay(true)}
              >
                Start a Project
                <ArrowWhite />
              </button>
              <Link href="#" className={styles.link}>
                Explore Our Portfolio
                <ArrowWhite />
              </Link>
              <Link href="#" className={styles.link}>
                Contact Us
                <ArrowWhite />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TellUs;
