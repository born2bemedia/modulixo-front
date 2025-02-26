"use client";
import React from "react";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import MoreLink from "@/shared/ui/MoreLink/MoreLink";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Link from "next/link";
import Image from "next/image";
import styles from "./StayAhead.module.scss";

const StayAhead = () => {
  const posts = [
    {
      title: "The Future of 3D Modelling: What’s Next in Digital Design?",
      url: "#",
      text: "From AI-powered modeling to real-time rendering, the 3D industry is evolving quickly. Find out what’s next and how to stay ahead of the competition.",
    },
    {
      title: "Motion Magic: How Animation is Transforming Branding & Marketing",
      url: "#",
      text: "Animation isn’t just for entertainment — it’s a game-changer for marketing. Discover why brands embrace animated content to connect with audiences like never before.",
    },
    {
      title:
        "The Art of Storytelling in Video Production: More Than Just a Pretty Edit",
      url: "#",
      text: "A great video is more than visuals — it’s about impact. Learn how narrative-driven editing creates unforgettable experiences that captivate and convert.",
    },
    {
      title: "UI/UX Trends Redefining Digital Experiences in 2025",
      url: "#",
      text: "Minimalism? Micro-interactions? AI-driven interfaces? See what’s reshaping user experiences in web and app design and how to implement them in your next project.",
    },
  ];

  return (
    <section className={styles.stayAhead}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text="Stay Ahead of the Creative Curve" tag={"h2"} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <TextBlock text="Innovation moves fast — stay ahead with insights, trends, and expert advice on 3D Modelling, Animation, Video <br/>roduction, and UI/UX Design. Whether you’re a creator, business, or brand, these reads will keep you at the <br/>forefront of digital creativity." />
          </motion.div>
          <div className={styles.row}>
            {posts.map((post, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.item}
                key={index}
              >
                <Link href={post.url}>
                  <div className={styles.top}>
                    <h3>{post.title}</h3>
                    <TextBlock text={post.text} />
                  </div>
                  <div className={styles.bottom}>
                    <MoreLink text="Read More" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayAhead;
