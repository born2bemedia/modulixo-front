"use client";
import React, { useRef } from "react";
import styles from "./Our.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const Our = () => {
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
            <div className={styles.col_01}>
              <SectionLabel
                text={"We don’t just create; We craft experiences that work."}
              />
              <SectionTitle
                text={"Our Workflow Process From Idea to Reality"}
                tag={"h2"}
              />
              <TextBlock
                text={
                  "We keep our process efficient, transparent, and creative to ensure the best results:"
                }
              />
              <WhiteButton text={"Get a Quote"} type={"popup"} />
            </div>

            <div className={styles.col_02}>
              <div className={styles.step}>
                <h2 className={styles.label}>Step 1</h2>
                <h3 className={styles.title}>Discovery & Consultation</h3>
                <div className={styles.text}>
                  We explore your needs, goals, and vision.
                </div>
              </div>
              <div className={styles.step}>
                <h2 className={styles.label}>Step 2</h2>
                <h3 className={styles.title}>Concept Development</h3>
                <div className={styles.text}>
                  Sketching, ideation, and drafting the perfect blueprint.
                </div>
              </div>
              <div className={styles.step}>
                <h2 className={styles.label}>Step 3</h2>
                <h3 className={styles.title}>Design & Execution</h3>
                <div className={styles.text}>
                  Bringing the idea to life through 3D modeling, animation, or
                  production.
                </div>
              </div>
              <div className={styles.step}>
                <h2 className={styles.label}>Step 4</h2>
                <h3 className={styles.title}>Discovery & Consultation</h3>
                <div className={styles.text}>
                  A ready-to-use model, animation, or design tailored to your
                  needs.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Our;
