import React from 'react';
import {createAppContainer, createStackNavigator } from 'react-navigation';

import Tela1 from '../components/Tela1';
import Tela2 from '../components/Tela2';
import Home from '../components/Home';

const AppNavigator = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: { title: 'Home' }
        },
        Dado1: {
            screen: Tela1
        }, 
        Tela2: {
            screen: Tela2
        }
    }, 
    {
        initialRouteName: 'Home',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#f00',
                  },
                  headerTintColor: '#000',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
        },
    })
);

export default AppNavigator;