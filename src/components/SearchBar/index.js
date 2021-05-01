import { Button, TextField, Box } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../redux/actions/searchShopAction";
import styles from "./searchBar.module.css";

function SearchBar() {
  const [searchShop, setSearchShop] = useState("");
  const dispatch = useDispatch();
  const handleSearchQuery = (e) => {
    e.preventDefault();
    setSearchShop(e.target.value);
    dispatch(setSearchData(e.target.value));
  };
  return (
    <div className={styles.container}>
      <TextField
        value={searchShop}
        id="standard-basic"
        onChange={handleSearchQuery}
        className={styles.searchBar}
        label="Search shop"
      />
    </div>
  );
}

export default SearchBar;
