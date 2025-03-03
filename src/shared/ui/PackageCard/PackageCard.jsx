import React from "react";
import styles from "./PackageCard.module.scss";
import TextBlock from "../TextBlock/TextBlock";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { renderBlock } from "@/helpers/renderBlock";

const PackageCard = ({ product }) => {
  const includes = renderBlock(product.content.root.children[0], 0);
  return (
    <div className={styles.package}>
      <h3>{product.title}</h3>
      <TextBlock text={product.excerpt} />
      <div className={styles.price}>
        <span>€{product.price}</span>
      </div>
      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span>
            <img src="/images/icons/duration.svg" alt="duration" />
            Duration
          </span>
          <TextBlock text={product.duration} />
        </div>
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
      <AddToCartButton product={product} text="Get This Package" icon={false} />
    </div>
  );
};

export default PackageCard;
