import React from "react";
import styles from "./TextBlock.module.scss";

const TextBlock = ({ text }) => {
  return (
    <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default TextBlock;
