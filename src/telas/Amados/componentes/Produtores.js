import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './Produtor';
import useTextos from '../../../hooks/useTextos';
import useProdutoresAmados from '../../../hooks/useProdutoresAmados';

export default function Produtores({ topo: Topo }) {
  const navigation = useNavigation();
  const lista = useProdutoresAmados();
  const { tituloProdutores } = useTextos();

  const TopoLista = () => {
    return <>
      <Topo />
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item} onPress={
        () => navigation.navigate('Produtor', item)
      } />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  }
})
