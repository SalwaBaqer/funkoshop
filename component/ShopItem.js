import React from "react";

//react-native
import { Text, Image } from "react-native";

//observer
import { observer } from "mobx-react";
import { ListItem } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Funkos", { shop: shop })}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: shop.image }} />
      <Text>{shop.name}</Text>
    </ListItem>
  );
};

export default observer(ShopItem);
