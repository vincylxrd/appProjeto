import React, { Component} from 'react';
import { StatusBar, View, Text} from 'react-native'

export default class Tela1 extends Component {
    static navigationOptions = {
        title: 'Tela1',
        headerStyle: {
            backgroundColor:'#f4511e'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            fontWeigth:'bold'
        }
    }
    render(){
        const{} = this.props.navigation.getParam('dados')
        return(
            <View>
                <Text>Tela 1 </Text>
            </View>
        )
    }
}