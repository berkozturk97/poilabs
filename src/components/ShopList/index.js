import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import styles from "./shopList.module.css";
import { Button, ListItemSecondaryAction } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setShopData } from "../../redux/actions/searchShopAction";

function ShopList({shopData}) {
    const dispatch = useDispatch();
    const handleShopData = () => {
        dispatch(setShopData(shopData));
    }
  return (
    <div className={styles.container}>
      <List className={styles.listContainer}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={shopData.logo} />
           
          </ListItemAvatar>
          <ListItemText primary={<span className={styles.shopName}>{shopData.name}</span>} secondary={<span className={styles.shopFloor}>Floor: {shopData.floor}</span>} />
          <ListItemSecondaryAction>
                    <Button className={styles.button} onClick={handleShopData}>Locate</Button>
        </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}

export default ShopList;
