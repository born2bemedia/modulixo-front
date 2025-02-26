import React from "react";
import styles from "./ItemTitle.module.scss";

const ItemTitle = ({ text, tag }) => {
  switch (tag) {
    case "h2":
      return (
        <h2
          className={`${styles.itemTitle}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
      break;
    case "h3":
      return (
        <h3
          className={styles.itemTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
      break;
    case "h4":
      return (
        <h3
          className={styles.itemTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
      break;
  }
};

export default ItemTitle;
