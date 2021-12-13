import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Pokemon} from '../../pages/PokemonList';
import * as S from './styles';

interface PokemonProps {
  item: Pokemon;
}

export default function Card({item}: PokemonProps) {
  const navigation = useNavigation();

  const handlePress = useCallback(
    (url: string) => {
      navigation.navigate('PokemonDetails', {url, name: item.name});
    },
    [navigation, item.name],
  );

  return (
    <>
      <S.CardContainer onPress={() => handlePress(item.url, item.name)}>
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
