"use client";
import React, { useState } from "react";
import styles from "./ProductHero.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";

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
        <div
          className={`${styles.body} ${
            product.category?.id == 6 && styles.animation
          }`}
        >
          <h1 style={{ fontSize: "100px", color: "white" }}>{product.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
