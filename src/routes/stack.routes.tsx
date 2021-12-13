import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../styles/colors';
import PokemonList from '../pages/PokemonList';
import PokemonDetails from '../pages/PokemonDetails';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}>
    <stackRoutes.Screen
      options={{headerShown: false}}
      name="PokemonList"
      component={PokemonList}
    />
    <stackRoutes.Screen
      name="PokemonDetails"
      options={({route}) => ({
        title: route.params.name.replace(/\b(\w)/g, s => s.toUpperCase()),
      })}
      component={PokemonDetails}
    />
  </stackRoutes.Navigator>
);

export default AppRoutes;
