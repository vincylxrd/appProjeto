import React, { Component} from 'react';
import { View, Button} from 'react-native';

export default class Home extends Component {

    static navegationOptions = {
        title : 'Home',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return ((
          <View >
            <Button onPress={()=> {navigate('Tela1')}} title="Tela 1" />
            <Button onPress={()=> {navigate('Tela2')}} title="Tela 2" />        
            </View>
         ) );
        } 
}