import React from "react";

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
    <HomeBackground
      source={{
        uri:
          "https://i.pinimg.com/736x/97/71/5c/97715c18bf2fc55c8688693db1011e41.jpg",
      }}
    >
      <TopStyling>
        <Title>Funko shop</Title>
      </TopStyling>

      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("Shops")}>
          Click here to skip
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
