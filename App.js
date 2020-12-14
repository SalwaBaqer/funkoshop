import React from "react";

//styled-component
import { ThemeProvider } from "styled-components";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./component/Navigation";

const theme = {
  light: {
    mainColor: "#00BFFF",
    backgroundColor: "white",
    blue: "#191970",
    itemBorder: "#00BFFF",
  },

  dark: {
    mainColor: "white",
    backgroundColor: "#191970",
    blue: "#F5FFFA",
    itemBorder: "#00BFFF",
  },
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
