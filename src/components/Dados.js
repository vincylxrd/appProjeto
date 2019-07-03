import React, {Component} from 'react';
import {Image} from 'react-native';
import {PropTypes} from 'prop-types';

const Lado1 = require('../img/dado1.png');
const Lado2 = require('../img/dado2.png');
const Lado3 = require('../img/dado3.png');
const Lado4 = require('../img/dado4.png');
const Lado5 = require('../img/dado5.png');
const Lado6 = require('../img/dado6.png')

export default class Dados extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    static propType ={
        nome: PropTypes.int
    }
    render(){
        if(this.props.nome === 0){
            return (
                <Image source ={Lado1}/>
            )
        }if(this.props.nome === 1){
            return (
                <Image source ={Lado2}/>
            )
        }if(this.props.nome === 2){
            return (
                <Image source ={Lado3}/>
            )
        }if(this.props.nome === 3){
            return (
                <Image source ={Lado4}/>
            )
        }if(this.props.nome === 4){
            return (
                <Image source ={Lado5}/>
            )
        }if(this.props.nome === 5){
            return (
                <Image source ={Lado6}/>
            )
        }
        
        return (<Image />)
    }
}