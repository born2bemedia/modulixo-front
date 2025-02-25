import ButtonArrow from "@/shared/icons/ButtonArrow";
import Link from "next/link";
import React from "react";
import styles from "./WhiteButton.module.scss";

const WhiteButton = ({ text, type, onClick, url }) => {
  switch (type) {
    case "button":
      return (
        <button className={styles.whiteButton} onClick={onClick}>
          {text}
          <ButtonArrow />
        </button>
      );
      break;
    case "link":
      return (
        <Link className={styles.whiteButton} href={url}>
          {text}
          <ButtonArrow />
        </Link>
      );
      break;
    default:
      return (
        <Link className={styles.whiteButton} href={url}>
          {text}
          <ButtonArrow />
        </Link>
      );
  }
};

export default WhiteButton;
