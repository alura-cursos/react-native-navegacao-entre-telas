import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import Cesta from '../telas/Cesta';
import mock from '../mocks/cesta';

import HomeSvg from '../assets/home.svg';
import CoracaoSvg from '../assets/coracao.svg';

const Tab = createBottomTabNavigator();

const CestaScreen = () => <Cesta {...mock} />;

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let Icon;

            if (route.name === 'Home') {
              Icon = HomeSvg;
            } else if (route.name === 'Cesta') {
              Icon = CoracaoSvg
            }

            return <Icon color={focused ? '#2A9F85' : '#C7C7C7'} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cesta" component={CestaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}