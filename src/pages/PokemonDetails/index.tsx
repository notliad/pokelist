import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import api from '../../services/api';
import {Linking, View, ActivityIndicator} from 'react-native';
import * as S from './styles';

type ParamList = {
  PokemonDetails: {
    id: string;
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

export default function PokemonDetails({url}) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);

  const route = useRoute<RouteProp<ParamList, 'PokemonDetails'>>();
  const {id} = route.params;

  useEffect(() => {
    api.get(url).then(response => {
      if (!response) {
        return setLoading(true);
      }
      setPokemon(response.data);
      setLoading(false);
    });
  }, []);

  const handleGoogle = useCallback(async searchName => {
    Linking.openURL(
      `https://www.google.com/search?q=${searchName}+rick+and+morty`,
    );
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <S.Container>
      <S.PokemonImage source={{uri: pokemon.image}} resizeMode="cover" />
      <S.PokemonInfo>
        <S.ViewRow>
          <S.PokemonTitle numberOfLines={1}>{pokemon.name}</S.PokemonTitle>
        </S.ViewRow>

        <S.ViewRow>
          <View>
            <S.PokemonSubTitle>Espécie:</S.PokemonSubTitle>
            <S.PokemonText>
              {pokemon.species === 'Human' ? 'Humano' : pokemon.species}
            </S.PokemonText>
          </View>
          <View>
            <S.PokemonSubTitle>Gênero:</S.PokemonSubTitle>
            {pokemon.gender !== 'Genderless' && pokemon.gender !== 'unknown' ? (
              <S.PokemonText>
                {pokemon.gender === 'Male' ? 'Masculino' : 'Feminino'}
              </S.PokemonText>
            ) : (
              <S.PokemonText>
                {pokemon.gender === 'Genderless'
                  ? 'Sem gênero'
                  : 'Desconhecido'}
              </S.PokemonText>
            )}
          </View>
        </S.ViewRow>

        <S.ViewRow>
          <View>
            <S.PokemonSubTitle>Localização:</S.PokemonSubTitle>
            <S.PokemonText>
              {pokemon.location.name === 'Earth (Replacement Dimension)'
                ? 'Terra Substituta'
                : pokemon.location.name}
            </S.PokemonText>
          </View>
        </S.ViewRow>

        <S.ViewRow>
          <S.View>
            <S.PokemonSubTitle>Origem:</S.PokemonSubTitle>
            <S.PokemonText>
              {pokemon.origin.name === 'Earth (Replacement Dimension)'
                ? 'Terra Substituta'
                : pokemon.origin.name}
            </S.PokemonText>
          </S.View>
          <View>
            <S.PokemonSubTitle>Status:</S.PokemonSubTitle>
            {pokemon.status !== 'unknown' ? (
              <S.PokemonStatus
                status={pokemon.status === 'Alive' ? 'alive' : 'dead'}>
                {pokemon.status === 'Alive' ? 'Vivo' : 'Morto'}
              </S.PokemonStatus>
            ) : (
              <S.PokemonStatus status={pokemon.status}>
                Desconhecido
              </S.PokemonStatus>
            )}
          </View>
        </S.ViewRow>
      </S.PokemonInfo>
      <S.Footer onPress={() => handleGoogle(pokemon.name)}>
        <S.FooterText>Buscar no Google</S.FooterText>
      </S.Footer>
    </S.Container>
  );
}
