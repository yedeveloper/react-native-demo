import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";
import Formulario from './Formulario'
import ButtonIn from './ButtonIn'
import Options from './Options'

export default class CardItem extends React.Component {

	render() {

		return (
      <Contenedor>
        <TextoCard>Sign In</TextoCard>
        <Principal>
          <Formulario />
          <ButtonIn />
        </Principal>
        <Options />
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
  height: 45%;
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
    top: 18.5%;
`;
