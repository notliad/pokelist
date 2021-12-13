import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import api from '../../services/api';

import colors from '../../styles/colors';
import * as S from './styles';

import Card from '../../components/Card';

export interface Pokemon {
  id: string;
  name: string;
  sprites: any;
  other: any;
  home: any;
  front_default: string;
  height: string;
  types: object;
  type: object;
  url: string;
}

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [nextUrl, setNextUrl] = useState('/pokemon/?limit=10&offset=0');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  function handleFetchMore() {
    setLoadingMore(true);
    fetchPokemons();
  }

  async function fetchPokemons() {
    const {data} = await api.get(nextUrl);
    if (!data) {
      return setLoading(true);
    }
    if (!!data.previous) {
      setPokemonList(oldValue => [...oldValue, ...data.results]);
    } else {
      setPokemonList(data.results);
      setPokemonCount(data.count);
    }
    setNextUrl(data.next);
    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <S.Container>
      <S.Header>
        <S.Title>PokeList</S.Title>
        <S.Quantity>{pokemonCount} Pokemons</S.Quantity>
      </S.Header>
      <S.ListView>
        <FlatList
          data={pokemonList}
          keyExtractor={Pokemon => Pokemon.id}
          renderItem={({item}) => <Card item={item} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={() => handleFetchMore()}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.blue_dark} /> : <></>
          }
        />
      </S.ListView>
    </S.Container>
  );
}
