import React from "react";

import { Image, TouchableOpacity, Text } from "react-native";

//styled
import {
  HomeBackground,
  Title,
  TopStyling,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    // <TouchableOpacity onPress={() => alert("hello")}>

    <HomeBackground
      source={{
        uri:
          "https://i.pinimg.com/736x/97/71/5c/97715c18bf2fc55c8688693db1011e41.jpg",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Shops")}>
        <TopStyling>
          <Image
            style={{ width: "65%", height: "30%" }}
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/0433/1952/5529/files/Funko_Logo_White.png?v=1602310645",
            }}
          />
        </TopStyling>

        <BottomStyling>
          <ButtonStyled>Click here to skip</ButtonStyled>
        </BottomStyling>
      </TouchableOpacity>
    </HomeBackground>

    /* </TouchableOpacity> */
  );
};

export default Home;
