import React, { Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const estilo = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#ccc',
        padding: 10,
        height:60
    },
    titulo:{
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWweight: 'bold',
        color: '#000'
    }
})

export default class BarraNavegacao extends Component {
    render() {
        return (
            <View style={estilo.barraTitulo}>
                <Text style={estilo.titulo}>Dado </Text>
                
            </View>
        )
    }
}