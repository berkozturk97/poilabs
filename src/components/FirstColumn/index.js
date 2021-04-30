import React from "react";
import styles from "./firstColumn.module.css";
function FirstColumn({ shop }) {
  const renderData = () => {
    if (shop.shopType === "A") {
      return (
        <div className={styles.shopA}>
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    } else if (shop.shopType === "B") {
      return (
        <div className={styles.shopB}>
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    } else if (shop.shopType === "C") {
      return (
        <div className={styles.shopC}>
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    }
  };
  return <>{renderData()}</>;
}

export default FirstColumn;
