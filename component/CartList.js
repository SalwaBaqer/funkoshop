import React from "react";

import { observer } from "mobx-react";

//Components
import CartItem from "./CartItem";

//store
import funkoStore from "../stores/funkoStore";
import cartStore from "../stores/cartStore";

//list
import { Left, List, Right, Spinner, Text } from "native-base";

//styles
import { CheckoutButton, CheckoutButtonText } from "../styles";

const CartList = () => {
  if (funkoStore.loading) return <Spinner />;

  //cartList
  const cartList = cartStore.items
    .map((item) => ({
      ...funkoStore.getFunkosById(item.funkoId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  //handle checkout
  const handleCheckOut = () => {
    cartStore.checkout();
    alert("Thank you!");
  };

  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={handleCheckOut}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
