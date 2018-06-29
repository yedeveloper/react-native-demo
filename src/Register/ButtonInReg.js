import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";

export default class ButtonInReg extends React.Component {

  onPressLearnMore(){
      console.log('ok');
  }

	render() {

		return (
      <ViewBtn>
        <Button transparent light block>
            <TextBtn>GET STARTED</TextBtn>
        </Button>
      </ViewBtn>
	    );
	}
}

const ViewBtn = styled.View`
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 10px;
`;

const TextBtn = styled(Text)`
  text-align: center;
  color: #841584;
  font-size: 15;
`;