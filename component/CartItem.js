import React from "react";

//styles
import { TotalPrice } from "../styles";

//native
import { ListItem, Body, Left, Right } from "native-base";
import { Image, Text } from "react-native";

//observer
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
      </Left>

      <Right>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
