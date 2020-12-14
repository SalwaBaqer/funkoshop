import React from "react";

//component
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import FunkoDetail from "../FunkoDetail";

//Navigation

import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#03a5fc",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        cardStyle: { backgroundColor: "#d6f2ff" },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ title: "Choose a Shop" }}
      />
      <Screen
        name="Funkos"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
      />
      <Screen
        name="FunkoDetail"
        component={FunkoDetail}
        options={({ route }) => {
          const { funko } = route.params;
          return {
            title: funko.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
