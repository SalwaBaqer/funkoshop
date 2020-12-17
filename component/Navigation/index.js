import React from "react";

//component
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import FunkoDetail from "../FunkoDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

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
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ title: "Choose a Shop", headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Funkos"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton />,
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
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
