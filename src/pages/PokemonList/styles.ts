import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #c4c4c4;
`;

export const ListView = styled.View`
  width: 100%;
  align-items: center;
  background-color: #c4c4c4;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background: #e4000f;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Poppins-SemiBold';
  font-style: normal;
  font-size: 20px;
  line-height: 32px;
`;

export const Quantity = styled.Text`
  color: #fff;
  font-family: 'Poppins-Light';
  font-style: normal;
  font-size: 14px;
  line-height: 32px;
`;

export const ContainerList = styled.View`
  width: 371px;
  height: 50px;
  flex-direction: row;
  top: -25px;
  background: #ffffff;
  border-radius: 6px;
  padding-left: 20px;
`;

export const ListTextInput = styled.TextInput`
  flex: 1;
  color: #222222;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  left: 5px;
  top: 2px;
`;

export const SearchButtonIcon = styled(Icon)`
  top: 15px;
  left: 0px;
  color: #1e2047;
  font-size: 20px;
`;
