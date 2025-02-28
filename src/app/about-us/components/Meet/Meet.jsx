"use client";
import React, { useRef } from "react";
import styles from "./Meet.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const Meet = () => {
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
                            text={"Meet the Makers Behind Modulixo"}
                            tag={"h2"}
                        />
                        <TextBlock
                            text={
                                "At Modulixo, creativity is a team effort. While these individuals lead the way, they are part of a dynamic group of designers, animators, and innovators who make every project possible."
                            }
                        />
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <h3 className={styles.name}>Ethan</h3>
                                        <div className={styles.status}>Digital Architect</div>
                                    </div>
                                    <div className={styles.job}>Lead 3D Designer</div>
                                    <div className={styles.text}>I’ve always been obsessed with structure — how things fit together, how they can be improved. Designing 3D models for printing is like solving a puzzle, bringing precision and creativity into harmony. Every model is a challenge I love to crack.</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <h3 className={styles.name}>Maya</h3>
                                        <div className={styles.status}>Motion Maestro</div>
                                    </div>
                                    <div className={styles.job}>Animation Specialist</div>
                                    <div className={styles.text}>I’ve always been obsessed with structure — how things fit together, how they can be improved. Designing 3D models for printing is like solving a puzzle, bringing precision and creativity into harmony. Every model is a challenge I love to crack.</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <h3 className={styles.name}>Jules</h3>
                                        <div className={styles.status}>Visual Storyteller</div>
                                    </div>
                                    <div className={styles.job}>Director & Video Editor</div>
                                    <div className={styles.text}>I’ve always been obsessed with structure — how things fit together, how they can be improved. Designing 3D models for printing is like solving a puzzle, bringing precision and creativity into harmony. Every model is a challenge I love to crack.</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <h3 className={styles.name}>Leo</h3>
                                        <div className={styles.status}>Precision Engineer</div>
                                    </div>
                                    <div className={styles.job}>3D Printing Specialist</div>
                                    <div className={styles.text}>I’ve always been obsessed with structure — how things fit together, how they can be improved. Designing 3D models for printing is like solving a puzzle, bringing precision and creativity into harmony. Every model is a challenge I love to crack.</div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h4 className="title">Need a Custom Quote?</h4>
                        </motion.div>
                        <WhiteButton text={"Request Now"} url={"#"} />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Meet;