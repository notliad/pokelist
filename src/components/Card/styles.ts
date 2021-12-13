import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  background: #f0f0f5;
  border-radius: 6px;
  margin: 10px 15px 0px 15px;
  padding: 10px;
`;

export const PokemonImage = styled.Image`
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
`;

export const CardInformation = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: #333333;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
`;
