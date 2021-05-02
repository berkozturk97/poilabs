import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CampaignDetail from "../../components/CampaignsDetail";
import SearchBar from "../../components/SearchBar";
import data from "../../constants/data.json";
import styles from "./campaigns.module.css";

function Campaigns() {
  const [shopList, setShopList] = useState();
  const { searchQuery } = useSelector((state) => state.search);
  useEffect(() => {
    console.log(searchQuery);
    const filteredData = (shopList || []).filter((value) => {
      if (searchQuery === "") {
        return shopList;
      } else if (
        value.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      ) {
        return value;
      }
    });
    if (searchQuery === "") {
      return setShopList(data);
    }
    setShopList(filteredData);
  }, [searchQuery]);
  useEffect(() => {
    setShopList(data);
  }, []);
  return (
    <div>
        <SearchBar />
      <div className={styles.container}>
        {(shopList || []).map((item, index) => {
          return <CampaignDetail shop={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Campaigns;
