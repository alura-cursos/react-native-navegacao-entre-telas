import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeRoutes from './HomeRoutes';

import HomeSvg from '../assets/home.svg';
import CoracaoSvg from '../assets/coracao.svg';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let Icon = HomeSvg;

            if (route.name === 'Melhores Avaliados') {
              Icon = CoracaoSvg;
            }

            return <Icon color={focused ? '#2A9F85' : '#C7C7C7'} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}
      >
        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name="Melhores Avaliados" component={HomeRoutes} initialParams={{melhoresAvaliados: true}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}