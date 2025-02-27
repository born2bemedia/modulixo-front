"use client";
import React from "react";
import styles from "./ProductCard.module.scss";
import TextBlock from "../TextBlock/TextBlock";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Image from "next/image";
import { API_URL } from "@/helpers/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.productCard}
    >
      <div className={styles.image}>
        <Image
          src={`${API_URL}${product.image.url}`}
          alt={product.title}
          fill
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3>{product.title}</h3>
          <TextBlock text={product.excerpt} />
        </div>
        <div className={styles.bottom}>
          <span className={styles.price}>€{product.price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
