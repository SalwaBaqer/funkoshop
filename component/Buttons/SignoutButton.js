import React from "react";
//styles
import { SignoutButtonStyled } from "../../styles";
//stores
import authStore from "../../stores/authStore";
//navigation
import { useNavigation } from "@react-navigation/native";

const SignoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    authStore.signout();
    navigation.navigate("Home");
  };
  return (
    <SignoutButtonStyled name="logout" type="AntDesign" onPress={handlePress} />
  );
};

export default SignoutButton;
