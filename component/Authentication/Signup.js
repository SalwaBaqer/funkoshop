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

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //handle submit
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("Shops");
  };
  return (
    <>
      <AuthContainer>
        <AuthTitle>Sign up</AuthTitle>
        <AuthTextInput
          placeholder="First Name"
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />

        <AuthTextInput
          placeholder="Last Name"
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
        <AuthTextInput
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />

        <AuthTextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(email) => setUser({ ...user, email })}
        />

        <AuthTextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign up</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("Signin")}>
          Click here to sign in!
        </AuthOther>
      </AuthContainer>
    </>
  );
};

export default Signup;
