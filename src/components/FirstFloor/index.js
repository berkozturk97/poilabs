import React, { useEffect, useState } from "react";
import FirstColumn from "../FirstColumn";
import SecondColumn from "../SecondColumn";
import ThirdColumn from "../ThirdColumn";
import styles from "./firstFloor.module.css";
import data from "../../constants/data.json";


function FirstFloor() {
  const [storeList, setStoreList] = useState();
  useEffect(() => {
    setStoreList(data);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        {(storeList || []).slice(0, 6).map((shop, index) => {
          return <FirstColumn shop={shop} key={index} />;
        })}
      </div>
      <div className={styles.secondSection}>
        {(storeList || []).slice(6, 8).map((item) => {
          return <SecondColumn name={item.name} />;
        })}
      </div>

      <div className={styles.lastSection}>
        {(storeList || []).slice(8, 15).map((item, index) => {
          return <ThirdColumn shop={item} key={index} />;
        })}
       
      </div>
    </div>
  );
}

export default FirstFloor;
