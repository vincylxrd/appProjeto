import React, { Component} from 'react';
import { StatusBar, View, Text } from 'react-native';

export default class Tela2 extends Component {
    static navigationOptions = {
        title: 'Tela2',
        headerStyle: {
          backgroundColor:'#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight:'bold'
        }
      }
    render() {
        return (
            <View>
                <Text>Tela 2</Text>
            </View>
        )
    }
}