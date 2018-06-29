import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";

export default class OptionsReg extends React.Component {

	render() {

		return (
      <ViewMain>
          <TextCenter>Sign In</TextCenter>
      </ViewMain>
	    );
	}
}

const ViewMain = styled.View`
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 90%;
`;
const TextCenter = styled.Text`
  color: #FFF
  font-size: 16;
  text-align: center;
`;