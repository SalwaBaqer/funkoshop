import styled from "styled-components/native";

import { Icon, Button, Text } from "native-base";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 42;

  text-align: center;
`;

export const TopStyling = styled.View`
  height: 40%;
  margin-top: 25%;

  margin-right: 2%;
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
  margin-right: 200;
`;

export const ButtonStyled = styled.Text`
  font-size: 23;
  color: #fff;
`;

export const ShopItemStyled = styled.Text`
  color: ${(props) => props.theme.blue};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const ShopDetailWrapper = styled.View`
  margin-top: 50;
`;

export const ShopDetailImage = styled.Image`
  width: 150;
  height: 150;
  margin-right: auto;
  margin-left: auto;
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
  margin-right: auto;
  margin-left: auto;
`;

export const FunkoDetailWrapper = styled.View`
  margin-top: 20;
  align-items: center;
  justify-content: center;
`;

export const FunkoDetailImage = styled.Image`
  width: 60%;
  height: 60%;
`;

export const FunkoDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 30;
  color: ${(props) => props.theme.blue};
`;

export const FunkoDetailDescription = styled.Text`
  font-size: 25;
  color: ${(props) => props.theme.blue};
`;

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(Icon)`
  color: ${(props) => props.theme.backgroundColor};
  margin-right: 10px;
`;

export const CartTextStyled = styled(Text)`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;

export const AddToCartButtonStyled = styled(Icon)`
  margin-top: 10px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 15px;
  width: 60%;
  height: 20%;
  text-align: center;
`;

export const TextStyle = styled.Text`
  font-size: 15px;
`;
