"use client";
import React from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./PackageCard.module.scss";
import TextBlock from "../TextBlock/TextBlock";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { renderBlock } from "@/helpers/renderBlock";
import WhiteButton from "../WhiteButton/WhiteButton";

const PackageCard = ({ product, color = "#09f" }) => {
  const includes = renderBlock(product.content.root.children[0], 0);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.package}
    >
      <div className={styles.light} style={{ background: color }}></div>
      <h3>{product.title}</h3>
      <TextBlock text={product.excerpt} />
      <div className={styles.price}>
        <span>€{product.price}</span>
      </div>
      <div className={styles.details}>
        {product.duration && (
          <div className={styles.detailRow}>
            <span>
              <img src="/images/icons/duration.svg" alt="duration" />
              Duration
            </span>
            <TextBlock text={product.duration} />
          </div>
        )}

        <div className={styles.detailRow}>
          <span>
            <img src="/images/icons/bestfor.svg" alt="bestFor" />
            Best For
          </span>
          <TextBlock text={product.besfor} />
        </div>
      </div>
      <div className={styles.includesTitle}>
        <span></span>
        <h4>INCLUDES</h4>
        <span></span>
      </div>
      <div className={styles.includes}>{includes}</div>
      <WhiteButton
        text="Get This Package"
        type="request"
        icon={false}
        requestValue={product.title}
      />
    </motion.div>
  );
};

export default PackageCard;
