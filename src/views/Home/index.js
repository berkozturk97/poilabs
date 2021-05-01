import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirstFloor from "../../components/FirstFloor";
import SearchBar from "../../components/SearchBar";
import SecondFloor from "../../components/SecondFloor";
import ShopList from "../../components/ShopList";
import styles from "./home.module.css";
import data from "../../constants/data.json";
import { setSearchData } from "../../redux/actions/searchShopAction";

function HomePage() {
  const [floor, setFloor] = useState(1);
  const [shopData, setShopData] = useState();
  const { searchQuery } = useSelector((state) => state.search);
  const { selectedShopData } = useSelector((state) => state.search);
  
  useEffect(() => {
    console.log(searchQuery);
    const filteredData = (shopData || []).filter((value) => {
      if (searchQuery === "") {
        return shopData;
      } else if (
        value.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      ) {
        return value;
      }
    });
    if (searchQuery === "") {
      return setShopData(data);
    }
    setShopData(filteredData);
  }, [searchQuery]);

  useEffect(() => {
    if(Object.keys(selectedShopData).length > 0) {
        setFloor(selectedShopData.floor)
    }
    
  },[selectedShopData])

  useEffect(() => {
    setShopData(data);
  }, []);

  return (
    <div>
      <SearchBar />
      <div className={styles.container}>
        {floor === 1 ? <FirstFloor /> : <SecondFloor />}
        <button onClick={() => setFloor(floor + 1)}>up</button>
        <button onClick={() => setFloor(floor - 1)}>down</button>
      </div>
      {searchQuery === "" ? (
        <></>
      ) : (
        (shopData || []).map((item) => {
          return <ShopList shopData={item} />;
        })
      )}
    </div>
  );
}

export default HomePage;
