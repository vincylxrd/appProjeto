import React, { Component} from 'react';
import { View, Button, StyleSheet} from 'react-native';


export default class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return ((
          <View style={estilo.container} >
              <View style={estilo.botoes}>
                <View>
                  <Button onPress={()=> {navigate('Dado1')}}  title="1 Dado" />
                </View>
                <View style={estilo.espaco}>
                  <Button onPress={()=> {navigate('Tela2')}} title="2 Dados" />  
                </View>
              </View>
      
            </View>
         ) );
        } 
}

 const estilo = StyleSheet.create({
     container : {
        flex: 1,
        justifyContent: 'center',
     },
     botoes: {
         padding: 20,
     },
     espaco: {
         marginTop: 15
     },
     cor: {
        backgroundColor:'#f00'
     }
 })