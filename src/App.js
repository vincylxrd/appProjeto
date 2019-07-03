import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Botao from './components/Botao';
import Dados from './components/Dados';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultado:0
    }
  }   

  Dado(){
    const resultado= Math.floor(Math.random() * 6);
  
      this.setState({ 
        resultado
    });
  }

render() {
  return (
    <View style={estilo.container}>
      <View style={estilo.botao}>
        <Botao texto= 'Jogar' cor='#841584' Func={() =>{this.Dado()}} />
      </View>
      <View style={estilo.fonte}>
        <Text>{this.state.resultado}</Text>
        <Text>Resultado:</Text>
        {/* <Dados nome={this.state.resultado} /> */}
      </View>
    </View>
  );
 }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  fonte: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems:'center'
  }
})
