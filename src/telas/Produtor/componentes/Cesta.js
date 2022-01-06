import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Cesta({ detalhes, itens, produtor }) {
    const navigation = useNavigation();
    const { nome, imagem, descricao, preco } = detalhes;

    return <TouchableOpacity
        style={estilos.cesta}
        onPress={() => navigation.navigate('Cesta', {
            detalhes,
            itens,
            produtor
        })}>
        <View style={estilos.conteudo}>
            <Image source={imagem} style={estilos.imagem} />

            <View style={estilos.textos}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.preco}>{preco}</Texto>
            </View>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
    },
    conteudo: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
    },
    imagem: {
        width: 62,
        height: 62,
        borderRadius: 6,
    },
    textos: {
        flex: 1,
        marginLeft: 8,
    },
    nome: {
        color: '#464646',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 14,
        lineHeight: 22,
    },
    preco: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 4,
    }
});
