"use client";
import React, { useState } from "react";
import styles from "./ProductHero.module.scss";
import { fadeInUp } from "@/helpers/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import AddToCartButton from "@/shared/ui/AddToCartButton/AddToCartButton";
import AddToWishlistButton from "@/shared/ui/AddToWishlistButton/AddToWishlistButton";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const API_URL = process.env.NEXT_PUBLIC_CMS_URL;

const ProductHero = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const imageClick = (index) => {
    setCurrentImage(index);
  };

  const bestPractices = [
    {
      title: "01 | Choose the Right Filament",
      description: [
        "PLA – Ideal for general prints with ease of use.",
        "PETG / ABS – Stronger, more durable options for functional parts.",
      ],
      image: "/images/product/best1.png",
    },
    {
      title: "02 | Fine-Tune Layer Height",
      description: [
        "0.1mm or lower – For intricate details and smooth surfaces.",
        "0.2mm or higher – For faster prints with less precision.",
      ],
      image: "/images/product/best2.png",
    },
    {
      title: "03 | Optimize Print Orientation",
      description: [
        "Proper alignment reduces support, enhances strength, and minimizes print time",
      ],
      image: "/images/product/best3.png",
    },
    {
      title: "04 | Regular Printer Calibration",
      description: [
        "Keep your bed leveled and nozzle settings optimized to ensure high-quality prints.",
      ],
      image: "/images/product/best4.png",
    },
    {
      title: "05 | Adjust Infill for Strength & Efficiency",
      description: [
        "Higher infill (20%+) – Increases durability.",
        "Lower infill (<15%) – Speeds up printing and reduces material usage.",
      ],
      image: "/images/product/best5.png",
    },
    {
      title: "06 | Balance Print Speed & Detail",
      description: [
        "Slow speeds – Improve accuracy on fine details.",
        "Faster speeds – Work best for larger, less intricate prints.",
      ],
      image: "/images/product/best6.png",
    },
  ];

  return (
    <section className={styles.productHero}>
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
            <div className={styles.block}>
              <h3>Important Information</h3>
              <TextBlock
                text={
                  "We provide digital 3D printing files, not physical products. Your final print may differ based on printer settings, material choices, and post-processing techniques. Enjoy the creative freedom to customize and bring these models to life!"
                }
              />
            </div>
            <div className={styles.block}>
              <h3>Best Practices for 3D Printing</h3>
              <div className={styles.bestPractice}>
                {bestPractices.map((item, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.content}>
                      <h4>{item.title}</h4>
                      <ul>
                        {item.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.image}>
                      <Image src={item.image} alt={item.title} fill />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.block}>
              <h3>Custom 3D Printing Files – Tailored to Your Needs</h3>
              <TextBlock
                text={
                  "Every 3D model is unique, and pricing depends on several factors, including:"
                }
              />
              <div className={styles.factors}>
                <div className={styles.factor}>
                  Model complexity & level of detail
                </div>
                <div className={styles.factor}>
                  Size & printability requirements
                </div>
                <div className={styles.factor}>
                  Customization & modifications
                </div>
                <div className={styles.factor}>
                  Turnaround time & delivery format
                </div>
              </div>
              <TextBlock
                text={
                  "Share your project details with us, and we’ll provide a personalized quote to match your vision! "
                }
              />
              <div className={styles.buttons}>
                <WhiteButton text="Get a Quote" type="popup" />
                <WhiteButton
                  text="View Pricing Details"
                  type="link"
                  url="/pricing"
                />
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <Image
              alt={product.title}
              src={`${API_URL}${product.image?.url}`}
              width={747}
              height={747}
              quality={100}
            />
            <h1>{product.title}</h1>
            <TextBlock text={product.excerpt} />
            <span className={styles.price}>€{product.price}</span>
            <div className={styles.details}>
              <h4>
                <img src="/images/icons/delivery.svg" alt="delivery" />
                Delivery Method:
              </h4>
              <TextBlock
                text={
                  "Instant digital download – access your files immediately after purchase."
                }
              />
            </div>
            {product.files.length > 0 && (
              <div className={styles.details}>
                <h4>
                  <img src="/images/icons/files.svg" alt="files" />
                  Included Files:
                </h4>
                <TextBlock
                  text={
                    "Your files are ready to print, modify, and bring to life with your 3D printer!"
                  }
                />
                <div className={styles.files}>
                  {product.files?.map((file, index) => (
                    <span key={index}>
                      <img src={"/images/icons/zip.svg"} alt={file.filename} />
                      {file.filename}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {product.filesurl.length > 0 && (
              <div className={styles.details}>
                <h4>
                  <img src="/images/icons/files.svg" alt="files" />
                  Included Files:
                </h4>
                <TextBlock
                  text={
                    "Your files are ready to print, modify, and bring to life with your 3D printer!"
                  }
                />
                <div className={styles.files}>
                  {product.filesurl?.map((file, index) => (
                    <span key={index}>
                      <img src={"/images/icons/zip.svg"} alt={file.filename} />
                      {file.filename}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className={styles.details}>
              <h4>
                <img src="/images/icons/print.svg" alt="print" />
                Print Specs:
              </h4>
              <TextBlock text={product.specs} />
            </div>
            <div className={styles.addToCart}>
              <AddToCartButton product={product} />
              <AddToWishlistButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
