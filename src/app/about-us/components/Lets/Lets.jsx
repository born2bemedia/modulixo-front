"use client";
import React, { useRef } from "react";
import styles from "./Lets.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import Link from "next/link";
import ArrowWhite from "@/shared/icons/ArrowWhite";
import usePopupStore from "@/stores/popupStore";

const Lets = () => {
  const { setGetQuotePopupDisplay } = usePopupStore();
  const container = useRef(null);
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
              text={"Let’s Build Something Groundbreaking"}
              tag={"h2"}
            />
            <TextBlock
              text={
                "If you’re ready to take your designs, animations, and videos to the next level, let’s make it happen."
              }
            />
            <div className={styles.links}>
              <button href="#" className={styles.link} onClick={() => setGetQuotePopupDisplay(true)}>
                Start a Project
                <ArrowWhite />
              </button>
              <Link href="/showcase" className={styles.link}>
                Explore Our Portfolio
                <ArrowWhite />
              </Link>
              <Link href="/contacts" className={styles.link}>
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

export default Lets;
