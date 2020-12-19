import CartButton from "../Buttons/CartButton";
import CartList from "../CartList";
import FunkoDetail from "../FunkoDetail";
//component
import Home from "../Home";
import React from "react";
import ShopDetail from "../ShopDetail";
import ShopList from "../ShopList";
import Signin from "../Authentication/Signin";
import SignoutButton from "../Buttons/SignoutButton";
import Signup from "../Authentication/Signup";
import { Text } from "react-native";
import authStore from "../../stores/authStore";
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
        options={{
          title: "Choose a Shop",
          headerRight: () => <CartButton />,
          headerLeft: () => {
            return authStore.user && <SignoutButton />;
          },
        }}
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
