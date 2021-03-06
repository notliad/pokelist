import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Pokemon} from '../../pages/PokemonList';

import api from '../../services/api';

import * as S from './styles';

interface PokemonProps {
  item: Pokemon;
}

export default function Card({item}: PokemonProps) {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  //Pela limitação da API, as imagens ficam armazenadas somente no show dos pokemons, então escolhi chamar as
  //imagens aqui dentro para cada card ser responsável por sua renderização e evitar despareamento trabalhando com duas listas
  const loadImage = useCallback(
    async url => {
      const {data} = await api.get(item.url);
      setImage(data.sprites.front_default);
    },
    [setImage, item.url],
  );

  const handlePress = useCallback(
    (url: string) => {
      navigation.navigate('PokemonDetails', {url, name: item.name});
    },
    [navigation, item.name],
  );

  useEffect(() => {
    loadImage();
    setLoading(false);
  }, [loadImage]);

  return (
    <>
      <S.CardContainer onPress={() => handlePress(item.url, item.name)}>
        <S.CardInformation>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <S.PokemonImage source={{uri: image}} resizeMode="cover" />
          )}
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
