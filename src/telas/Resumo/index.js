import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import useTextos from '../../hooks/useTextos';

import VoltarSVG from '../../assets/voltar.svg';
import sucesso from '../../assets/sucesso.png';

export default function Resumo() {
  const {
    mensagemCompra,
    topoCompra,
    tituloCompra,
    botaoHomeCompra,
    botaoProdutorCompra
  } = useTextos();

  return <View style={estilos.tela}>
    <View style={estilos.topo}>
      <TouchableOpacity
        style={estilos.topoVoltar}
        onPress={() => { }}
      >
        <VoltarSVG />
      </TouchableOpacity>

      <Text style={estilos.topoTexto}>{topoCompra}</Text>
    </View>

    <View style={estilos.conteudo}>
      <Image source={sucesso} style={estilos.sucesso} />

      <View style={estilos.textos}>
        <Text style={estilos.titulo}>{tituloCompra}</Text>
        <Text style={estilos.mensagem}>{mensagemCompra}</Text>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => {}}>
          <Text style={estilos.textoBotao}>{botaoHomeCompra}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilos.botao, estilos.botaoProdutor]}
          onPress={() => {}}>
          <Text style={[estilos.textoBotao, estilos.textoBotaoProdutor ]}>{botaoProdutorCompra}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topo: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topoTexto: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topoVoltar: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  conteudo: {
    zIndex: 0,
  },
  sucesso: {
    width: "100%",
    height: undefined,
    aspectRatio: 360 / 351,
  },
  textos: {
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: "#464646",
  },
  mensagem: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  botaoProdutor: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  textoBotaoProdutor: {
    color: "#464646",
  },
});