"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./StepByStep.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const StepByStep = () => {
  const offers = [
    {
      id: "1",
      title: "Discovery & Research",
      description:
        "We understand your goals, target audience, and competition to create a strategic design direction.",
    },
    {
      id: "2",
      title: "Wireframing & User Flow Mapping",
      description:
        "Before we dive into visuals, we create low-fidelity wireframes and user journeys to structure navigation and optimize interactions.",
    },
    {
      id: "3",
      title: "High-Fidelity UI Design",
      description:
        "Once the framework is set, we design polished, visually appealing UI components that reflect your brand identity.",
    },
    {
      id: "4",
      title: "Prototyping & Interaction Design",
      description:
        "We build interactive prototypes that allow you to experience the design before development.",
    },
  ];
  return (
    <section className={styles.stepByStep}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text="Our Step-by-Step UI/UX Process" tag="h2" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="We follow a structured process to ensure every design is backed by research, creativity, and functionality." />
          </motion.div>
          <div className={styles.steps}>
            {offers.map((offer, index) => (
              <div
                className={styles.step}
                key={index}
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div>
                  <div className={styles.number}>Step {offer.id}</div>
                  <h3>{offer.title}</h3>
                  <TextBlock text={offer.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
