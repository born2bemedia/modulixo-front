"use client";
import React from "react";
import styles from "./ProductCard.module.scss";
import TextBlock from "../TextBlock/TextBlock";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Image from "next/image";
import { API_URL } from "@/helpers/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import Link from "next/link";
import AddToWishlistButton from "../AddToWishlistButton/AddToWishlistButton";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.productCard}
    >
      <AddToWishlistButton product={product} className={styles.wishlistButton} />
      <Link href={`/product/${product.slug}`} className={styles.image}>
        <Image
          src={`${API_URL}${product.image.url}`}
          alt={product.title}
          fill
          quality={100}
        />
      </Link>
      <div className={styles.content}>
        <Link href={`/product/${product.slug}`} className={styles.top}>
          <h3>{product.title}</h3>
          <TextBlock text={product.excerpt} />
        </Link>
        <div className={styles.bottom}>
          <span className={styles.price}>€{product.price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
