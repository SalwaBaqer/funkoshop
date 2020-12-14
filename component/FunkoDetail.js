import React from "react";
import { observer } from "mobx-react";

//stores
import funkoStore from "../stores/funkoStore";

//styles
import {
  FunkoDetailTitle,
  FunkoDetailImage,
  FunkoDetailWrapper,
  FunkoDetailDescription,
} from "../styles";

//native-base
import { Spinner } from "native-base";

const FunkoDetail = ({ route }) => {
  if (funkoStore.loading) return <Spinner />;
  const { funko } = route.params;

  return (
    <FunkoDetailWrapper>
      <FunkoDetailTitle>{funko.name}</FunkoDetailTitle>
      <FunkoDetailImage source={{ uri: funko.image }} />

      <FunkoDetailDescription>price: {funko.price}</FunkoDetailDescription>
      <FunkoDetailDescription>
        description: {funko.description}
      </FunkoDetailDescription>
    </FunkoDetailWrapper>
  );
};

export default observer(FunkoDetail);
