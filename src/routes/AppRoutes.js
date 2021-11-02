import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import Cesta from '../telas/Cesta';
import mock from '../mocks/cesta';

const Tab = createBottomTabNavigator();

const CestaScreen = () => <Cesta {...mock} />;

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cesta" component={CestaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}