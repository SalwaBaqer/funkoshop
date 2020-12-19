//styles
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
  Iconstyled,
  ViewPasswordContainer,
} from "../../styles";

import React from "react";
//stores
import authStore from "../../stores/authStore";
import { useState } from "react";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [passwordIcon, setPasswordIcon] = useState("eye");
  const [passwordVisibilty, setPasswordVisibilty] = useState(true);
  //handle submit
  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Shops");
  };

  //handle password
  const handlePassword = () => {
    if (passwordIcon === "eye") {
      setPasswordIcon("eye-off");
      setPasswordVisibilty(false);
    } else {
      setPasswordIcon("eye");
      setPasswordVisibilty(true);
    }
  };
  return (
    <>
      <AuthContainer>
        <AuthTitle>Sign in</AuthTitle>
        <AuthTextInput
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <ViewPasswordContainer>
          <AuthTextInput
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={passwordVisibilty}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          <Iconstyled
            name={passwordIcon}
            type="MaterialCommunityIcons"
            onPress={handlePassword}
          />
        </ViewPasswordContainer>
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign in</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("Signup")}>
          Click here to register!
        </AuthOther>
      </AuthContainer>
    </>
  );
};

export default Signin;
