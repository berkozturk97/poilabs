import React from "react";
import styles from "./thirdColumn.module.css";
import RoomIcon from "@material-ui/icons/Room";
import { useSelector } from "react-redux";
function ThirdColumn({ shop }) {
  const { selectedShopData } = useSelector((state) => state.search);
  const renderData = () => {
    if (shop.shopType === "E") {
      return (
        <div className={styles.shopE}>
          {selectedShopData.id === shop.id ? (
            <lord-icon
              src="https://cdn.lordicon.com/zzcjjxew.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              stroke="100"
              style={{ width: 32, height: 32 }}
            ></lord-icon>
          ) : (
            <></>
          )}
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    } else if (shop.shopType === "B") {
      return (
        <div className={styles.shopB}>
          {selectedShopData.id === shop.id ? (
            <lord-icon
              src="https://cdn.lordicon.com/zzcjjxew.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              stroke="100"
              style={{ width: 32, height: 32 }}
            ></lord-icon>
          ) : (
            <></>
          )}
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    } else if (shop.shopType === "F") {
      return (
        <div className={styles.shopF}>
          {selectedShopData.id === shop.id ? (
            <lord-icon
              src="https://cdn.lordicon.com/zzcjjxew.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              stroke="100"
              style={{ width: 32, height: 32 }}
            ></lord-icon>
          ) : (
            <></>
          )}
          <div className={styles.title}>{shop.name}</div>
        </div>
      );
    }
  };
  return <>{renderData()}</>;
}

export default ThirdColumn;
