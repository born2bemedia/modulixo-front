import React from "react";
import styles from "./MoreLink.module.scss";
import Link from "next/link";
import ButtonArrow from "@/shared/icons/ButtonArrow";
const MoreLink = () => {
  return (
    <Link href={"#"} className={styles.moreLink}>
      <span>More</span>
      <ButtonArrow />
    </Link>
  );
};

export default MoreLink;
