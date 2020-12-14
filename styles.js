import styled from "styled-components/native";

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
  margin-top: 100;
  margin-right: 200;
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
  color: ${(props) => props.theme.mainColor};
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
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
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
  color: ${(props) => props.theme.mainColor};
`;

export const FunkoDetailDescription = styled.Text`
  font-size: 25;
  color: ${(props) => props.theme.mainColor};
`;
