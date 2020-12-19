//list
import { List, Spinner } from "native-base";

import React from "react";
//Components
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
//store
import shopStore from "../stores/shopStore";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;

  const shopsList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return <List>{shopsList}</List>;
};

export default observer(ShopList);
