import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import styles from "./TestimonialsRow.module.scss";

export const TestimonialsRow = ({ testimonials, speed = 20 }) => {
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure the height of the original testimonials content.
  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.offsetHeight);
    }
  }, [testimonials]);

  return (
    // Wrapper to hide overflow (ensure seamless scroll)
    <div className={styles.testimonialsRowWrapper}>
      <motion.div
        // Wrap both original and duplicate testimonials
        animate={{ y: -contentHeight }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
        // Ref attached to the first copy (we duplicate the content below)
        ref={containerRef}
      >
        {testimonials.map((testimonial) => (
          <TestimonialsCard key={testimonial.name} {...testimonial} />
        ))}
        {/* Duplicate testimonials for continuous scroll */}
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={`${testimonial.name}-duplicate`}
            {...testimonial}
          />
        ))}
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={`${testimonial.name}-duplicate2`}
            {...testimonial}
          />
        ))}
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={`${testimonial.name}-duplicate3`}
            {...testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
};
