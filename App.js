import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
// import { 
//   useFonts, 
//   Montserrat_400Regular, 
//   Montserrat_700Bold,
// } from '@expo-google-fonts/montserrat';
// import AppLoading from 'expo-app-loading';

import AppRoutes from './src/routes/AppRoutes';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import Home from './src/telas/Home';

export default function App() {
  // const [fonteCarregada] = useFonts({
  //   "MontserratRegular": Montserrat_400Regular,
  //   "MontserratBold": Montserrat_700Bold,
  // });

  // if (!fonteCarregada) {
  //   return <AppLoading />
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppRoutes />
      {/* <Home /> */}
      {/* <Cesta {...mock} /> */}
    </SafeAreaView>
  );
}
