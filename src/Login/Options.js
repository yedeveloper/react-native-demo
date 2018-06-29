import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";

export default class Options extends React.Component {

	render() {

		return (
      <ViewMain>
        <ViewLeft>
          <TextLeft>Create Account</TextLeft>
        </ViewLeft>
        <ViewRight>
          <TextRight>Forgot Password</TextRight>
        </ViewRight>
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
const ViewLeft = styled.View`
  width: 50%;
`;
const ViewRight = styled.View`
  width: 50%;
`;
const TextLeft = styled.Text`
  color: #FFF
  font-size: 16;
  text-align: center;
`;
const TextRight = styled.Text`
  color: #FFF
  font-size: 16;
  text-align: center;
`;