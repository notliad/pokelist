import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;

export const PokemonImage = styled.Image`
  margin-bottom: 10px;
  width: 100%;
  height: 40%;
`;

export const PokemonInfo = styled.View`
  padding: 15px 25px;
  background: #fff;
  align-items: flex-start;
`;

export const PokemonAttr = styled.Text`
  margin: 15px 0px 5px 0px;
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: #333;
`;
export const PokemonText = styled.Text`
  margin: 5px 0px 0px 15px;
  padding: 0px 5px;
  border-radius: 6px;
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #333;
  background-color: #f1f2f4;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
