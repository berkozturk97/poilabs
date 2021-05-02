import React, { useEffect } from "react";
import styles from "./firstColumn.module.css";
import RoomIcon from "@material-ui/icons/Room";
import { useSelector } from "react-redux";
function FirstColumn({ shop }) {
  const { selectedShopData } = useSelector((state) => state.search);
  useEffect(() => {}, [selectedShopData]);

  const renderData = () => {
    if (shop.shopType === "A") {
      return (
        <div className={styles.shopA}>
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
    } else if (shop.shopType === "C") {
      return (
        <div className={styles.shopC}>
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
          <div className={styles.titleC}>{shop.name}</div>
        </div>
      );
    }
  };
  return <>{renderData()}</>;
}

export default FirstColumn;
