import React, { useEffect } from "react";
import styles from "./firstColumn.module.css";
import RoomIcon from "@material-ui/icons/Room";
import { useSelector } from "react-redux";
function FirstColumn({ shop }) {
  const { selectedShopData } = useSelector((state) => state.search);
  useEffect(() => {

  }, [selectedShopData]);

  const renderData = () => {
    if (shop.shopType === "A") {
      return (
        <div className={styles.shopA}>
          {selectedShopData.id === shop.id ? (
            <RoomIcon style={{ color: "red" }} />
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
            <RoomIcon style={{ color: "red" }} />
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
            <RoomIcon style={{ color: "red" }} />
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

export default FirstColumn;
