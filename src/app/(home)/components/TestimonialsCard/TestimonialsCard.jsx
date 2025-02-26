import React from "react";
import styles from "./TestimonialsCard.module.scss";
import Image from "next/image";
import Star from "@/shared/icons/Star";
import TextBlock from "@/shared/ui/TextBlock/TextBlock";

const TestimonialsCard = ({ name, photo, status, text, stars }) => {
  return (
    <div className={styles.testimonialsCard}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < stars ? "" : styles.inactive}>
            <Star />
          </span>
        ))}
      </div>
      <TextBlock text={text} />
      <div className={styles.info}>
        <Image width={44} height={44} src={photo} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
