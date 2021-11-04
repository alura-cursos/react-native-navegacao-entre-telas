import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Amados from '../telas/Amados';
import Produtor from '../telas/Produtor';
import Cesta from '../telas/Cesta';

const HomeStack = createNativeStackNavigator();

export default function AmadosRoutes() {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name="AmadosScreen" component={Amados} />
      <HomeStack.Screen name="Produtor" component={Produtor} />
      <HomeStack.Screen name="Cesta" component={Cesta} />
    </HomeStack.Navigator>
  );
}