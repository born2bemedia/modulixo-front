"use client";
import React from "react";
import styles from "./OfferCard.module.scss";
import Image from "next/image";
import { API_URL } from "@/helpers/constants";
import AddToCartButton from "@/shared/ui/AddToCartButton/AddToCartButton";

const OfferCard = ({ offer }) => {
  return (
    <div className={styles.offerCard}>
      <span
        className={styles.light}
        style={{
          backgroundColor: offer.color,
        }}
      ></span>
      <div className={styles.offerCardTop}>
        <div className={styles.offerCardTopLeft}>
          <h2>{offer.title}</h2>
          <h3>{offer.subtitle}</h3>
          <p>{offer.excerpt}</p>
        </div>
        <div className={styles.offerCardTopRight}>
          <div className={styles.prices}>
            <div>
              <h4>Total Price:</h4>
              <span>€{offer.totalPrice}</span>
            </div>
            <div>
              <h4>Discount:</h4>
              <span>{offer.discount}%</span>
            </div>
          </div>
          <div className={styles.actions}>
            <div>
              <h4>Price with Discount:</h4>
              <span>€{offer.price}</span>
            </div>
            <AddToCartButton product={offer} />
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <span>Products</span>
      </div>
      <div className={styles.offerProducts}>
        {offer.products.map((product, index) => (
          <div className={styles.offerProduct} key={index}>
            <Image
              src={`${API_URL}${product.image.url}`}
              alt={product.title}
              width={200}
              height={110}
            />
            <div className={styles.offerProductInfo}>
              <h4>{product.title}</h4>
              <p>€{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
