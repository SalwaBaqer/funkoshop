import React from "react";
import { useState } from "react";

//styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "../../styles";

//stores
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle submit
  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Shops");
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
        <AuthTextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
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
