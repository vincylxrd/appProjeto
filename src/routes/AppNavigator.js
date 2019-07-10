import React from 'react';
import {createAppContainer, createStackNavigator } from 'react-navigation';

import Tela1 from '../components/Tela1';
import Tela2 from '../components/Tela2';
import Home from '../components/Home';

const AppNavigator = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home
        },
        Tela1: {
            screen: Tela1
        }, 
        Tela2: {
            screen: Tela2
        }
    })
);

export default AppNavigator;