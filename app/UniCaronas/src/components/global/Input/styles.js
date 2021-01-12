import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const IContainer = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 500px;
  background-color: ${(props) => props.background};
  padding: 0 ${(props) => (props.select ? 0 : 20)}px;
  border: ${(props) => (props.border ? `1px solid ${props.border}` : 0)};
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput`
  font-size: 18px;
  color: ${(props) => props.color};
  flex: 1;
  padding-left: ${(props) => (props.select ? 20 : 0)}px;
`;

export const TextBottom = styled.Text`
  font-size: 14px;
  color: ${(props) => props.color};
`;

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-right: 20px;
`;

export const SelectText = styled.Text`
  color: ${(props) => props.color};
  font-size: 16px;
  margin-right: 5px;
`;
