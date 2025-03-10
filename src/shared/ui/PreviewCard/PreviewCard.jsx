"use client";
import React, { useState } from "react";
import styles from "./PreviewCard.module.scss";
import TextBlock from "../TextBlock/TextBlock";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Image from "next/image";
import { API_URL } from "@/helpers/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Link from "next/link";
import ReactPlayer from "react-player";

const PreviewCard = ({ product }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.previewCard}
    >
      <div
        className={styles.animationWrap}
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
      >
        <ReactPlayer
          url={`${API_URL}${product.preview?.url}`}
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
          src={`${API_URL}${product.image.url}`}
          alt={product.title}
          style={{
            opacity: isPlaying ? 0 : 1,
          }}
        />
      </div>
      <div className={styles.content}>
        <Link href={`/product/${product.slug}`} className={styles.top}>
          <h3>{product.title}</h3>
          <TextBlock text={product.excerpt} />
        </Link>
      </div>
    </motion.div>
  );
};

export default PreviewCard;
