import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirstFloor from "../../components/FirstFloor";
import SearchBar from "../../components/SearchBar";
import SecondFloor from "../../components/SecondFloor";
import ShopList from "../../components/ShopList";
import styles from "./home.module.css";
import data from "../../constants/data.json";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { setSearchData } from "../../redux/actions/searchShopAction";

function HomePage() {
  const [floor, setFloor] = useState(1);
  const [upVisible, setUpVisible] = useState(false);
  const [downVisible, setDownVisible] = useState(true);
  const [shopData, setShopData] = useState();
  const { searchQuery } = useSelector((state) => state.search);
  const { selectedShopData } = useSelector((state) => state.search);

  useEffect(() => {
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
    if (Object.keys(selectedShopData).length > 0) {
      if(selectedShopData.floor === 2) {
        handleFloors(3)
      }
      if(selectedShopData.floor === 1) {
        handleFloors(4)
      }
      setFloor(selectedShopData.floor);
    }
  }, [selectedShopData]);

  useEffect(() => {
    setShopData(data);
  }, []);

  const handleFloors = (value) => {
    switch (value) {
      case 0:
        setUpVisible(true);
        setDownVisible(false);
        return setFloor(floor + 1);
      case 1:
        setUpVisible(false);
        setDownVisible(true);
        return setFloor(floor - 1)
      case 3:
        setUpVisible(true);
        setDownVisible(false);
        return;
      case 4:
          setUpVisible(false);
          setDownVisible(true);
          return;
      default:
        break;
    }
  };

  return (
    <div>
      <SearchBar />
      <div className={styles.container}>
        {floor === 1 ? <FirstFloor /> : <SecondFloor />}
        <div className={styles.buttonContainer}>
          <IconButton disabled={upVisible} onClick={() => handleFloors(0)} aria-label="increment" size="medium">
            <ArrowUpwardIcon fontSize="inherit" />
          </IconButton>
          <IconButton disabled={downVisible} onClick={() => handleFloors(1)} aria-label="decrement" size="medium">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
        </div>
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
