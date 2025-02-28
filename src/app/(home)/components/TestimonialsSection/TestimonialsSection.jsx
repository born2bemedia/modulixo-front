"use client";
import React from "react";
import styles from "./TestimonialsSection.module.scss";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";
import { motion } from "framer-motion";
import { fadeInUp } from "@/helpers/animations";
import WhiteButton from "@/shared/ui/WhiteButton/WhiteButton";
import { TestimonialsRow } from "../TestimonialsRow/TestimonialsRow";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Carter",
      photo: "/images/testimonials/carter.png",
      status: "Creative Director",
      text: "Their animation work gave my brand the energy it needed! The storytelling was phenomenal.",
      stars: 5,
    },
    {
      name: "Laura Jensen",
      photo: "/images/testimonials/jensen.png",
      status: "Digital Artist",
      text: "Great communication and fast turnaround. Attention to detail was impressive!",
      stars: 4,
    },
    {
      name: "Alicia Gomez",
      photo: "/images/testimonials/gomez.png",
      status: "Product Designer",
      text: "Their 3D modeling took my product concept to the next level. Absolutely stunning work!",
      stars: 5,
    },
    {
      name: "James Reed",
      photo: "/images/testimonials/reed.png",
      status: "Marketing Strategist",
      text: "Their video production blew me away — cinematic, high-quality, and exactly what I envisioned.",
      stars: 5,
    },
    {
      name: "Sophia Lin",
      photo: "/images/testimonials/lin.png",
      status: "App Founder",
      text: "I needed a sleek UI for my app, and Modulixo delivered a masterpiece. Super intuitive and stylish.",
      stars: 5,
    },
    {
      name: "Tom Russo",
      photo: "/images/testimonials/russo.png",
      status: "Indie Game Developer",
      text: "Modulixo did a fantastic job bringing my idea to life, though there’s always room for a little more refinement.",
      stars: 4,
    },
    {
      name: "Emma Sterling",
      photo: "/images/testimonials/sterling.png",
      status: "Startup Founder",
      text: "A reliable team that listens and delivers solid results. Would work with them again!",
      stars: 4,
    },
    {
      name: "David Chang",
      photo: "/images/testimonials/chang.png",
      status: "E-commerce Entrepreneur",
      text: "I was skeptical about hiring a young agency, but their expertise and passion proved me wrong.",
      stars: 5,
    },
  ];

  const firstThreeTestimonials = testimonials.slice(0, 3);
  const middleTestimonials = testimonials.slice(3, 5);
  const lastThreeTestimonials = testimonials.slice(5);

  return (
    <section className={styles.testimonialsSection}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle text={"What Clients Say About Us"} tag={"h2"} />
          </motion.div>
          <div className={styles.testimonialsWrap}>
            <TestimonialsRow testimonials={firstThreeTestimonials} speed={70} />
            <TestimonialsRow testimonials={middleTestimonials} speed={60} />
            <TestimonialsRow testimonials={lastThreeTestimonials} speed={70} />
          </div>
          <div className={styles.mobileTestimonials}>
            <TestimonialsRow testimonials={testimonials} speed={300} />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <WhiteButton text={"Start a Project"} type={"popup"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
