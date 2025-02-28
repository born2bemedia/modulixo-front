"use client";
import React, { useRef } from "react";
import styles from "./Beyond.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import Link from "next/link";
import ArrowWhite from "@/shared/icons/ArrowWhite";

const Beyond = () => {
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
                            text={"Beyond Pixels – What We Do"}
                            tag={"h2"}
                        />
                        <TextBlock
                            text={
                                "We craft immersive digital experiences that push creative limits."
                            }
                        />
                        <div className={styles.cards}>
                            <Link href="#" className={styles.card}>
                                <div className={styles.more}>
                                    More
                                    <ArrowWhite />
                                </div>
                                <img src="/images/about/article-img-01.jpg" alt="image" className={styles.img} />
                                <div className={styles.bottom}>
                                    <h5 className={styles.title}>3D Printing-Ready <br /> Models</h5>
                                    <div className={styles.text}>High-precision digital sculpting optimized for 3D printing, ensuring smooth, detailed, and functional designs for products, architecture, and prototyping.</div>
                                </div>
                            </Link>
                            <Link href="#" className={styles.card}>
                                <div className={styles.more}>
                                    More
                                    <ArrowWhite />
                                </div>
                                <img src="/images/about/article-img-02.jpg" alt="image" className={styles.img} />
                                <div className={styles.bottom}>
                                    <h5 className={styles.title}>Animation That Tells a Story</h5>
                                    <div className={styles.text}>Dynamic motion design for cinematics, branding, and storytelling.</div>
                                </div>
                            </Link>
                            <Link href="#" className={styles.card}>
                                <div className={styles.more}>
                                    More
                                    <ArrowWhite />
                                </div>
                                <img src="/images/about/article-img-03.jpg" alt="image" className={styles.img} />
                                <div className={styles.bottom}>
                                    <h5 className={styles.title}>Visual Impact Through Video</h5>
                                    <div className={styles.text}>Storytelling that connects and converts.</div>
                                </div>
                            </Link>
                            <Link href="#" className={styles.card}>
                                <div className={styles.more}>
                                    More
                                    <ArrowWhite />
                                </div>
                                <img src="/images/about/article-img-04.jpg" alt="image" className={styles.img} />
                                <div className={styles.bottom}>
                                    <h5 className={styles.title}>UI/UX that Feels Like Home</h5>
                                    <div className={styles.text}>Intuitive, user-first digital experiences.</div>
                                </div>
                            </Link>
                        </div>
                        <h4 className={styles.label}>See Our Work in Action</h4>
                        <TextBlock
                            text={
                                "Innovation meets aesthetics — every project, every frame"
                            }
                        />
                        <WhiteButton text={"Explore Portfolio"} type={"button"} />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Beyond;