import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";
import FormularioRec from './FormularioRec'
import ButtonInRec from './ButtonInRec'
import OptionsRec from './OptionsRec'

export default class CardItemRec extends React.Component {

	render() {

		return (
      <Contenedor>
        <TextoCard>Forgot Password?</TextoCard>
        <Principal>
          <FormularioRec />
          <ButtonInRec />
        </Principal>
        <OptionsRec />
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
  height: 35%;
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
    top: 23%;
`;
