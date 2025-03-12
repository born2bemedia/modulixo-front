"use client";
import React, { useRef } from "react";
import styles from "./What.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const What = () => {
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
            <SectionTitle text={"What Clients Say About Us"} tag={"h2"} />
            <div className={styles.cards}>
              <div className={styles.card}>
                <img
                  src="/images/about/article-1.jpg"
                  alt="image"
                  className={styles.image}
                />
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>
                    01 | Strategy Meets Creativity
                  </h2>
                  <div className={styles.text}>
                    We don’t start with software — we start with an idea. Every
                    project begins with a deep dive into your vision, audience,
                    and goals to ensure the final result speaks your language.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <img
                  src="/images/about/article-2.jpg"
                  alt="image"
                  className={styles.image}
                />
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>
                    02 | Precision in Every Pixel
                  </h2>
                  <div className={styles.text}>
                    We combine advanced modeling, animation, and production
                    techniques to turn imagination into reality. Every detail
                    matters: a 3D-printed prototype, an animated sequence, or an
                    interactive user experience.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <img
                  src="/images/about/article-3.jpg"
                  alt="image"
                  className={styles.image}
                />
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>03 | Innovation on Repeat</h2>
                  <div className={styles.text}>
                    Technology evolves, and so do we. At Modulixo, we constantly
                    refine, test, and push creative boundaries, ensuring that
                    every model, animation, and frame is built for the future.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <img
                  src="/images/about/article-4.jpg"
                  alt="image"
                  className={styles.image}
                />
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>
                    04 | Collaboration That Works
                  </h2>
                  <div className={styles.text}>
                    We believe in seamless teamwork, transparent communication,
                    and creative synergy. Whether you’re a startup or an
                    enterprise, we collaborate closely with you to ensure your
                    vision is not just met — but elevated beyond expectations.
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h4 className="title">Browse Our Packages</h4>
            </motion.div>
            <TextBlock
              text={"We don’t just keep up with trends — we set them."}
            />
            <WhiteButton text={"View Pricing"} url={"/pricing"} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default What;
