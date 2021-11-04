import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../telas/Home';
import Produtor from '../telas/Produtor';
import Cesta from '../telas/Cesta';
import { useRoute } from '@react-navigation/core';

const HomeStack = createNativeStackNavigator();

export default function HomeRoutes() {
  const route = useRoute();

  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name="HomeScreen" component={Home} initialParams={route.params} />
      <HomeStack.Screen name="Produtor" component={Produtor} />
      <HomeStack.Screen name="Cesta" component={Cesta} />
    </HomeStack.Navigator>
  );
}