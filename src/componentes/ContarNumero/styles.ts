import styled from "styled-components/native";

export const ContarNum  = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #D7D7D9;
  width: 40px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

export const CounterDisplay = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const CounterText = styled.TextInput`
  color: #00214E;
  font-size: 25px;
  font-weight: bold;
`;