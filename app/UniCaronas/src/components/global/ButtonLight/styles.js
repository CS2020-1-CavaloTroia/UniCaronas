import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: bold;
`;
