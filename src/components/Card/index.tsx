import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Pokemon} from '../../pages/PokemonList';
import {View} from 'react-native';
import * as S from './styles';

interface PokemonProps {
  item: Pokemon;
}

export default function Card({item}: PokemonProps) {
  const navigation = useNavigation();

  const handlePokemonList = useCallback(
    (id: string) => {
      navigation.navigate('PokemonList', {id});
    },
    [navigation],
  );
  console.log(item);
  return (
    <>
      <S.CardContainer onPress={() => handlePress(item.url)}>
        <S.CardInformation>
          <S.CardTitle
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{textTransform: 'capitalize'}}>
            {item.name}
          </S.CardTitle>
        </S.CardInformation>
      </S.CardContainer>
    </>
  );
}
