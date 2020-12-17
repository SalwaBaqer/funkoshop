import React from "react";

//observer
import { observer } from "mobx-react";

//navigation
import { useNavigation } from "@react-navigation/native";

//styles
import { CartButtonStyled, CartTextStyled } from "../../styles";

//native
import { Button } from "native-base";
import { Alert } from "react-native";

//stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button transparent onPress={handlePress}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};

export default observer(CartButton);
