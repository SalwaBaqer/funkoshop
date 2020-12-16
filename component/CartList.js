import React from "react";

import { observer } from "mobx-react";

//Components
import CartItem from "./CartItem";

//store
import funkoStore from "../stores/funkoStore";
import cartStore from "../stores/cartStore";

//list
import { List, Spinner } from "native-base";

const CartList = () => {
  if (funkoStore.loading) return <Spinner />;

  const cartList = cartStore.items
    .map((item) => ({
      ...funkoStore.getFunkosById(item.funkoId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
