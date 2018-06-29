import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";
import FormularioReg from './FormularioReg'
import ButtonInReg from './ButtonInReg'
import OptionsReg from './OptionsReg'

export default class CardItemReg extends React.Component {

	render() {

		return (
      <Contenedor>
        <TextoCard>Create Account</TextoCard>
        <Principal>
          <FormularioReg />
          <ButtonInReg />
        </Principal>
        <OptionsReg />
      </Contenedor>
	    );
	}
}

const Contenedor = styled.View`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  z-index:0;
  position: relative;
`;


const Principal = styled.View`
  alignItems: center;
  justifyContent: center;
  height: 68%;
  width: 90%;
  background-color: #FFF;
  border-radius: 10px;
  padding:5%;
`;

const TextoCard = styled.Text`
    font-size: 20;
    text-align: center;
    width: 60%;
    color: #FFF;
    background-color: #841584;
    border-radius: 4px;
    padding-top: 22px;
    padding-bottom: 22px;
    position: absolute; 
    z-index: 3;
    top: 7%;
`;
