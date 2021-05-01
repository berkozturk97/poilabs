import React from 'react';
import styles from './secondColumn.module.css';
import RoomIcon from "@material-ui/icons/Room";
import { useSelector } from "react-redux";
function SecondColumn({shop}) {
    const { selectedShopData } = useSelector((state) => state.search);
    return (
        <div className={styles.container}>
            {selectedShopData.id === shop.id ? (
            <RoomIcon style={{ color: "red" }} />
          ) : (
            <></>
          )}
            <div className={styles.title}>{shop.name}</div>
        </div>
    )
}

export default SecondColumn;