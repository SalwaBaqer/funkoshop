import React from "react";

import { useState } from "react";
//styles
import { ShopItemStyled, AddToCartButtonStyled } from "../styles";

//native
import { ListItem, Left, Right } from "native-base";
import { Image, Text } from "react-native";

//NumericInput
import NumericInput from "react-native-numeric-input";

//stores
import cartStore from "../stores/cartStore";

const FunkoItem = ({ funko, navigation }) => {
  const handleAdd = () => {
    const newItem = { quantity, funkoId: funko.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
    console.log(cartStore.items);
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <ListItem
      onPress={() => navigation.navigate("FunkoDetail", { funko: funko })}
    >
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: funko.image }}
        />
        <ShopItemStyled>{funko.name}</ShopItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
        <AddToCartButtonStyled onPress={handleAdd}>
          <Text>Add</Text>
        </AddToCartButtonStyled>
      </Right>
    </ListItem>
  );
};

export default FunkoItem;
