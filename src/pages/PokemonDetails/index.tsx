import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import api from '../../services/api';
import {View, ActivityIndicator, FlatList} from 'react-native';
import * as S from './styles';

type ParamList = {
  PokemonDetails: {
    url: string;
    name: string;
  };
};
export interface Pokemon {
  id: string;
  name: string;
  status: string;
  other: object;
  home: object;
  height: string;
  sprites: object;
  types: object;
  front_default: string;
  species: string;
}

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);

  const route = useRoute<RouteProp<ParamList, 'PokemonDetails'>>();
  const {url} = route.params;

  const renderTypes = useCallback(types => {
    return (
      <S.PokemonText style={{textTransform: 'capitalize'}}>
        {types.item.type.name}
      </S.PokemonText>
    );
  }, []);

  useEffect(() => {
    api.get(url).then(response => {
      if (!response) {
        return setLoading(true);
      }
      setPokemon(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <S.Container>
      <S.PokemonImage
        source={{uri: pokemon.sprites.front_default}}
        resizeMode="contain"
        resizeMethod="scale"
      />
      <S.PokemonInfo>
        <S.ViewRow>
          <View>
            <S.PokemonAttr>Tipo:</S.PokemonAttr>
            <FlatList
              data={pokemon.types}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => renderTypes({item})}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </S.ViewRow>
        <S.ViewRow>
          <View>
            <S.PokemonAttr>Peso:</S.PokemonAttr>
            <S.PokemonText>{`${pokemon.weight / 10} kg`}</S.PokemonText>
          </View>
        </S.ViewRow>
        <S.ViewRow>
          <View>
            <S.PokemonAttr>Altura:</S.PokemonAttr>
            <S.PokemonText>{`${pokemon.height / 10} m`}</S.PokemonText>
          </View>
        </S.ViewRow>
      </S.PokemonInfo>
    </S.Container>
  );
}
