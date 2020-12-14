import React from "react";
import { ShopItemStyled } from "../styles";
import { ListItem } from "native-base";
import { Image } from "react-native";

const FunkoItem = ({ funko, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("FunkoDetail", { funko: funko })}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: funko.image }}
      />
      <ShopItemStyled>{funko.name}</ShopItemStyled>
    </ListItem>
  );
};

export default FunkoItem;
