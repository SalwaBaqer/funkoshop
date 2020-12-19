//styles
import { CheckoutButton, CheckoutButtonText } from "../styles";
//list
import { Left, List, Right, Spinner, Text } from "native-base";

//Components
import CartItem from "./CartItem";
import React from "react";
import SignoutButton from "./Buttons/SignoutButton";
//store
import authStore from "../stores/authStore";
import cartStore from "../stores/cartStore";
import funkoStore from "../stores/funkoStore";
import { observer } from "mobx-react";

const CartList = ({ navigation }) => {
  if (funkoStore.loading) return <Spinner />;

  //cartList
  const cartList = cartStore.items
    .map((item) => ({
      ...funkoStore.getFunkosById(item.funkoId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  //handle checkout
  const handleCheckOut = async () => {
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
