import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const LogoImg = styled.Image`
  position: absolute;
  width: 300px;
  height: 127.5px;
  left: 56px;
  top: 15px;
`;

export const ButtonText = styled.Text`
  top: 16px;
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: white;
`;

export const ButtonIcon = styled(Icon)`
  left: 216px;
  top: -4px;
  color: white;
  font-size: 20px;
`;
