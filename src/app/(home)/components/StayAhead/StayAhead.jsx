"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import MoreLink from "@/shared/ui/MoreLink/MoreLink";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Link from "next/link";
import Image from "next/image";
import styles from "./StayAhead.module.scss";
import fetchFromAPI from "@/helpers/fetchFromAPI";
import { CACHE_TAG_IDEAS } from "@/helpers/constants";
const StayAhead = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchFromAPI("/api/ideas", {
        tag: CACHE_TAG_IDEAS,
      });
      const posts = (data.docs || []).reverse();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

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
                <Link href={`/insights/${post.slug}`}>
                  <div className={styles.top}>
                    <h3>{post.title}</h3>
                    <TextBlock text={post.excerpt_home} />
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
