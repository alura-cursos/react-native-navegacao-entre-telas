import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';

export default function Topo({ melhoresAvaliados, compra }) {
  const { boasVindas, legenda, legendaMelhoresAvaliados, mensagemCompra } = useTextos();
  const compraTexto = mensagemCompra?.replace("%nome%", compra);

  return <>
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.imagem} />
      <Text style={estilos.boasVindas}>{melhoresAvaliados ? "" : boasVindas}</Text>
      <Text style={estilos.legenda}>{melhoresAvaliados ? legendaMelhoresAvaliados : legenda}</Text>
    </View>
    {!!compra && 
      <View style={estilos.compra}>
        <Text style={estilos.compraMensagem}>{compraTexto}</Text>
      </View>
    }
    
  </>
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  compraMensagem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  }
});
