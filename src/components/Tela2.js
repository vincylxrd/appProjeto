import React, { Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Botao from './Botao';
import Dados from './Dados';


const estilo = StyleSheet.create({
    container: {
      flex: 1,
    },
    botao: {
      marginTop: 60,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    fonte: {
      marginTop: 35,
      flexDirection: 'column-reverse',
      alignItems:'center'
    }
  });
  

export default class Tela2 extends Component {
    constructor(props){
        super(props);
        this.state = {
          resultado:0,
          resultado1:0,
        };
    };
    
      Dado = () =>{
        const resultado= Math.floor(Math.random() * 6);
        const resultado1= Math.floor(Math.random() * 6);
      
          this.setState({ 
            resultado
        });
        this.setState({
          resultado1
        });
      }
      
    static navigationOptions = {
        title: '2 Dados',
        headerStyle: {
            backgroundColor:'#f00'
        },
        headerTintColor:'#000',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }

    render(){
        return(
        <View style={estilo.container}>
            <View style={estilo.botao}>
          </View>
          <View style={estilo.fonte}>
            <Text>{this.state.resultado + 1}</Text>
            <Text>Resultado:</Text>
            <Dados nome={this.state.resultado} />
          </View> 
          <View style={estilo.botao}>
            <Botao texto= 'Jogar' cor='#f00' Func={this.Dado} />
          </View>
          <View style={estilo.fonte}>
            <Text>{this.state.resultado1 + 1}</Text>
            <Text>Resultado:</Text>
            <Dados nome={this.state.resultado1} />
        </View>  
        </View>       
        )
    }
}