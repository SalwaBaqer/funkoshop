import React from "react";
import { observer } from "mobx-react";

//stores
import shopStore from "../stores/shopStore";
import funkoStore from "../stores/funkoStore";

//styles
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "../styles";

//native-base
import { Spinner } from "native-base";

//components
import FunkoList from "./FunkoList";

const ShopDetail = ({ route, navigation }) => {
  if (shopStore.loading) return <Spinner />;
  const { shop } = route.params;

  const funkosFromFunkoStore = shop.funkos.map((funko) =>
    funkoStore.getFunkosById(funko.id)
  );

  return (
    <ShopDetailWrapper>
      <ShopDetailImage source={{ uri: shop.image }} />
      <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      <FunkoList funkos={funkosFromFunkoStore} navigation={navigation} />
    </ShopDetailWrapper>
  );
};

export default observer(ShopDetail);
