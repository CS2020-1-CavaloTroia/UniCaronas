import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

import background from "../../assets/images/map.png";

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({ source: background })`
  width: 100%;
  height: 100%;
`;

export const Section = styled.View`
  width: 100%;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [
    "rgba(65, 105, 225, 1)",
    "rgba(65, 105, 225, 1)",
    "rgba(65, 105, 225, 1)",
    "rgba(65, 105, 225, 0.9)",
    "rgba(65, 105, 225, 0.8)",
  ],
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 10px;
  justify-content: center;
`;

export const AppIconContainer = styled.View`
  align-items: center;
  margin-bottom: 25px;
`;
