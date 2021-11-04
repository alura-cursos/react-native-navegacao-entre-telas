import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../telas/Home';
import Produtor from '../telas/Produtor';
import Cesta from '../telas/Cesta';

const HomeStack = createNativeStackNavigator();

export default function HomeRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="Produtor" component={Produtor} />
      <HomeStack.Screen name="Cesta" component={Cesta} />
    </HomeStack.Navigator>
  );
}