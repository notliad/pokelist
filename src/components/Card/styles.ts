import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  background: #f0f0f5;
  border-radius: 6px;
  margin: 0px 15px 10px 15px;
`;

export const CardInformation = styled.View`
  justify-content: space-between;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: #333333;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
`;
