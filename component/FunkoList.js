import React from "react";

import { observer } from "mobx-react";

//Components
import FunkoItem from "./FunkoItem";

//store
import funkoStore from "../stores/funkoStore";

//list
import { List, Spinner } from "native-base";

const FunkoList = ({ funkos, navigation }) => {
  if (funkoStore.loading) return <Spinner />;

  const funkosList = funkos.map((funko) => (
    <FunkoItem funko={funko} key={funko.id} navigation={navigation} />
  ));
  return <List>{funkosList}</List>;
};

export default observer(FunkoList);
