import React from "react";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ text, tag }) => {
  switch (tag) {
    case "h1":
      return (
        <h1
          className={styles.sectionTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
      break;
    case "h2":
      return (
        <h2
          className={styles.sectionTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
      break;
    case "h3":
      return (
        <h3
          className={styles.sectionTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
      break;
  }
};

export default SectionTitle;
