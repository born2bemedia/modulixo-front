"use client";
import React, { useEffect, useState } from "react";
import styles from "./CategorySection.module.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import SectionLabel from "@/shared/ui/SectionLabel/SectionLabel";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import fetchLatestProductsFromCategory from "@/helpers/fetchLatestProductsFromCategory";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import ProductCard from "@/shared/ui/ProductCard/ProductCard";
import PreviewCard from "../PreviewCard/PreviewCard";

const CategorySection = ({
  title,
  subtitle,
  description,
  link,
  categorySlug,
  limit = 4,
  buttonText,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchLatestProductsFromCategory({
        categorySlug,
        limit: limit,
        setLoading,
      });
      console.log(products);
      setProducts(products);
    };
    fetchProducts();
  }, [categorySlug]);

  return (
    <section className={styles.categorySection}>
      <div className="_container">
        <div className={styles.body}>
          {subtitle && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionLabel text={subtitle} />
            </motion.div>
          )}
          {title && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionTitle text={title} tag={"h2"} />
            </motion.div>
          )}
          {description && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <TextBlock text={description} />
            </motion.div>
          )}
          <div className={styles.products}>
            {loading ? (
              <Skeleton count={4} />
            ) : products.length > 0 ? (
              categorySlug === "animations" ||
              categorySlug === "videos" ? (
                products.map((product, index) => (
                  <PreviewCard product={product} key={product.id} />
                ))
              ) : (
                products.map((product, index) => (
                  <ProductCard product={product} key={product.id} />
                ))
              )
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
          {link && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <WhiteButton text={buttonText} url={link} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
