"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import styles from "./ShowcasePreviewCard.module.scss";

const ShowcasePreviewCard = ({ image, video, title, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsPlaying(true);
    }
  }, [isMobile]);

  return (
    <motion.div
      key={id}
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <ReactPlayer
        url={`${video}`}
        playing={isPlaying}
        controls={false}
        loop={true}
        className={styles.video}
        height={"100%"}
        muted={true}
        volume={0}
      />
      <Image
        fill
        quality={100}
        src={`${image}`}
        alt={title}
        style={{
          opacity: isPlaying ? 0 : 1,
        }}
      />
    </motion.div>
  );
};

export default ShowcasePreviewCard;
