import React from "react";
import styles from "./secondColumn.module.css";
import RoomIcon from "@material-ui/icons/Room";
import { useSelector } from "react-redux";
function SecondColumn({ shop }) {
  const { selectedShopData } = useSelector((state) => state.search);
  return (
    <div className={styles.container}>
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

export default SecondColumn;
