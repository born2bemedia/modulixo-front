"use client";
import React, { useEffect, useRef, useState } from "react";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "./UiUxPackages.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import fetchLatestProductsFromCategory from "@/helpers/fetchLatestProductsFromCategory";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import ProductCard from "@/shared/ui/ProductCard/ProductCard";
import PackageCard from "@/shared/ui/PackageCard/PackageCard";

const UiUxPackages = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categorySlug = "uiux-package";
  const limit = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchLatestProductsFromCategory({
        categorySlug,
        limit,
        setLoading,
      });
      console.log(products);
      setProducts(products.reverse());
    };
    fetchProducts();
  }, [categorySlug]);

  return (
    <div className={styles.packages}>
      {loading ? (
        <Skeleton count={3} height={1000} />
      ) : products.length > 0 ? (
        products.map((product, index) => (
          <PackageCard product={product} key={product.id} />
        ))
      ) : (
        <div className={styles.noProducts}>
          <img src="/images/icons/outOfStock.svg" alt="outOfStock" />
          <h4>Oops! Empty for now</h4>
          <TextBlock
            text={
              " It looks like there are no products here yet. Check back later or explore other categories."
            }
          />
        </div>
      )}
    </div>
  );
};

export default UiUxPackages;
