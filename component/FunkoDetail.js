import React from "react";
import { observer } from "mobx-react";

//stores
import funkoStore from "../stores/funkoStore";

//styles
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "../styles";

//native-base
import { Spinner } from "native-base";

const FunkoDetail = ({ route }) => {
  if (funkoStore.loading) return <Spinner />;
  const { funko } = route.params;

  return (
    <ShopDetailWrapper>
      <ShopDetailImage source={{ uri: funko.image }} />
      <ShopDetailTitle>{funko.name}</ShopDetailTitle>
      <ShopDetailTitle>{funko.price}</ShopDetailTitle>
    </ShopDetailWrapper>
  );
};

export default observer(FunkoDetail);
