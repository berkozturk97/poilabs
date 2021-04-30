import React from "react";
import styles from "./thirdColumn.module.css";
function ThirdColumn({ shop }) {
  const renderData = () => {
    if (shop.shopType === "E") {
      return (
        <div className={styles.shopE}>
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    } else if (shop.shopType === "B") {
      return (
        <div className={styles.shopB}>
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    } else if (shop.shopType === "F") {
      return (
        <div className={styles.shopF}>
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    }
  };
  return <>{renderData()}</>;
}

export default ThirdColumn;
