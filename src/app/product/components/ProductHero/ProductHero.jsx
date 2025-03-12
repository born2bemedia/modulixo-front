"use client";
import React, { useState } from "react";
import styles from "./ProductHero.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const ProductHero = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const imageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section
      className={styles.productHero}
      style={{ paddingTop: "100px", marginBottom: "500px" }}
    >
      <div className={"_container"}>
        <div className={`${styles.body}`}>
          <div className={styles.col1}>
            <Image
              alt={product.title}
              src={`${API_URL}${product.image?.url}`}
              width={747}
              height={747}
              quality={100}
            />
          </div>
          <div className={styles.col2}>
            <h1>{product.title}</h1>
            <TextBlock text={product.excerpt} />
            <span className={styles.price}>€{product.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
