import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Texto from './Texto';

import Gradiente from '../assets/gradiente.svg';
import topo from '../assets/topo.png';
import VoltarSVG from '../assets/voltar.svg';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({ titulo, imagem = topo, altura = ALTURA_PADRAO }) {
  const navigation = useNavigation();
  const estilos = funcaoEstilos(altura);
  return <>
    <Image source={imagem} style={estilos.topo} />
    <Gradiente width={largura} height={130 / 360 * largura} style={estilos.gradiente}/>
    <Texto style={estilos.titulo}>{ titulo }</Texto>
    <TouchableOpacity 
      onPress={() => { navigation.goBack() }}
      style={estilos.botaoVoltar}>
      <VoltarSVG color='white' style={estilos.voltar} />
    </TouchableOpacity>
  </>
}

const funcaoEstilos = (altura) => StyleSheet.create({
  topo: {
    width: "100%",
    height: altura,
  },
  gradiente: {
    position: 'absolute',
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});
