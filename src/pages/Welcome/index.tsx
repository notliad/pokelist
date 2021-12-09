import React from 'react';
import {useNavigation} from '@react-navigation/core';
import * as S from './styles';

export default function Welcome() {
  const navigation = useNavigation();

  function handleCharacterListAcess() {
    navigation.navigate('PokemonList');
  }

  return (
    <S.Container resizeMode="cover">
      <S.LogoImg source={require('../../assets/rickyandmortylogo.png')} />
    </S.Container>
  );
}
