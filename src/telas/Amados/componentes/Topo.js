import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';

export default function Topo() {
  const { legendaAmados } = useTextos();

  return <View style={estilos.topo}>
    <Image source={logo} style={estilos.imagem} />
    <Text style={estilos.legenda}>{legendaAmados}</Text>
  </View>
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  legenda: {
    marginTop: 24,
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  }
});
