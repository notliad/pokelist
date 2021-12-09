import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
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
  const [search, setSearch] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  function handleFetchMore() {
    setLoadingMore(true);
    fetchCharacters();
  }
  async function fetchSearchCharacters() {
    const {data} = await api.get();
    if (!data) {
      return setLoading(true);
    }
    setPokemonList(data.results);
    setPokemonCount(data.info.count);
    setLoading(false);
  }
  async function fetchCharacters() {
    const {data} = await api.get('/pokemon/?limit=10&offset=0');
    console.log(data);
    if (!data) {
      return setLoading(true);
    }
    if (data.previous) {
      setPokemonList(oldValue => [...oldValue, ...data.results]);
    } else {
      setPokemonList(data.results);
      setPokemonCount(data.count);
      setNextUrl(data.next);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <S.Container>
      <S.Header>
        <S.Title>Listagem</S.Title>
        <S.Quantity>{pokemonCount} Pokemons</S.Quantity>
      </S.Header>
      <View>
        <S.ContainerList>
          <TouchableOpacity onPress={fetchSearchCharacters}>
            <S.SearchButtonIcon name="search" />
          </TouchableOpacity>
          <S.ListTextInput
            keyboardAppearance="light"
            placeholderTextColor="#959595"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Busque por um personagem"
            onSubmitEditing={fetchSearchCharacters}
            onChangeText={e => setSearch(e)}
          />
        </S.ContainerList>
      </View>
      <S.ListView>
        {search !== '' ? (
          <FlatList
            data={pokemonList}
            keyExtractor={Character => Character.id}
            renderItem={({item}) => <Card item={item} />}
            showsVerticalScrollIndicator={false}
            numColumns={3}
          />
        ) : (
          <FlatList
            data={pokemonList}
            keyExtractor={Character => Character.id}
            renderItem={({item}) => <Card item={item} />}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            onEndReached={() => handleFetchMore()}
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator color={colors.blue_dark} />
              ) : (
                <></>
              )
            }
          />
        )}
      </S.ListView>
    </S.Container>
  );
}
