import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Produtor from '../telas/Produtor';
import Cesta from '../telas/Cesta';
import mock from '../mocks/cesta';

const Teste = () => <Cesta {...mock} />

const ProdutorStack = createNativeStackNavigator();

export default function ProdutorRoutes() {
  return (
    <ProdutorStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <ProdutorStack.Screen name="ProdutorScreen" component={Produtor} />
      <ProdutorStack.Screen name="Teste" component={Teste} />
    </ProdutorStack.Navigator>
  );
}