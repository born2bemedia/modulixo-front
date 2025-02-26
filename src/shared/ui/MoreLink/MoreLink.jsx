import React from "react";
import styles from "./MoreLink.module.scss";
import Link from "next/link";
import ButtonArrow from "@/shared/icons/ButtonArrow";
const MoreLink = ({ text = "More" }) => {
  return (
    <span href={"#"} className={styles.moreLink}>
      <span>{text}</span>
      <ButtonArrow />
    </span>
  );
};

export default MoreLink;
