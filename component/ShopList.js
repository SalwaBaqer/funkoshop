import React from "react";

import { observer } from "mobx-react";

// Style
import { Title } from "../styles";

//Components
import ShopItem from "./ShopItem";

//store
import shopStore from "../stores/shopStore";

//list
import { List, Spinner } from "native-base";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;

  const shopsList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return <List>{shopsList}</List>;
};

export default observer(ShopList);
