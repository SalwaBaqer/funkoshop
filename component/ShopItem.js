//react-native
import { Image } from "react-native";
import { ListItem } from "native-base";
//react
import React from "react";
//styles
import { ShopItemStyled } from "../styles";
//observer
import { observer } from "mobx-react";

const ShopItem = ({ shop, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Funkos", { shop: shop })}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: shop.image }} />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};

export default observer(ShopItem);
