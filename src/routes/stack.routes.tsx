import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
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
    <stackRoutes.Screen name="PokemonList" component={PokemonList} />
    <stackRoutes.Screen name="PokemonDetails" component={PokemonDetails} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
