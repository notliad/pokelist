import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface PokemonStatusProps {
  status?: 'alive' | 'dead' | 'unknown';
}

const handleStatusType = {
  alive: '#4ac82a',
  dead: '#e91337',
  unknown: '#ff9000',
};

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;
export const PokemonImage = styled.Image`
  margin-bottom: 11px;
  width: 100%;
  height: 437px;
  left: 0px;
  top: 0px;
`;
export const PokemonInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-top: -30px;
  margin-bottom: 56px;
  padding: 15px 25px;
  background: #f0f0f5;
  align-items: flex-start;
`;
export const PokemonTitle = styled.Text`
  align-self: center;
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  line-height: 36px;
  color: #333333;
  width: 90%;
`;
export const LikeContainer = styled.TouchableOpacity`
  flex-direction: row;
  left: 10px;
  top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 6px;
`;
export const PokemonSubTitle = styled.Text`
  width: 100%;
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  margin-right: 150px;
`;
export const PokemonText = styled.Text`
  width: 100%;
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;
export const PokemonLocation = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  height: 56px;
  background-color: #1e2047;
`;

export const FooterText = styled.Text`
  margin-left: 16px;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  line-height: 33px;
  text-align: center;
  color: #e1e1e6;
`;

export const ReturnButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: 15px;
  left: 15px;
  height: 50px;
  width: 50px;
  background: #1e2047;
  border-radius: 25px;
`;

export const ReturnButtonIcon = styled(Icon)`
  margin-left: 3px;
  color: #ffffff;
  font-size: 26px;
`;

export const PokemonStatus = styled.Text<PokemonStatusProps>`
  color: #333333;
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  line-height: 20px;
  ${props =>
    props.status &&
    css`
      color: ${handleStatusType[props.status]};
    `}
`;
