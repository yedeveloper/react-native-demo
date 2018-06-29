import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";

export default class Formulario extends React.Component {

  onPressLearnMore(){
      console.log('ok');
  }

	render() {

		return (
      <ViewForm>
        <ItemFormUser style={{}}>
            <Icon
              name="md-lock"
              style={{
                color: '#841584', fontSize: 20, marginLeft: 10,
              }}
            />
            <Input
              blurOnSubmit={false}
              returnKeyType="next"
              editable={true}
              autoCapitalize="sentences"
              placeholder={'Usuario...'}
            />
        </ItemFormUser>
        <ItemFormPass style={{}}>
            <Icon
              name="md-lock"
              style={{
                color: '#841584', fontSize: 20, marginLeft: 10,
              }}
            />
            <Input
              blurOnSubmit={false}
              secureTextEntry={true}
              returnKeyType="next"
              editable={true}
              autoCapitalize="sentences"
              placeholder={'Password...'}
            />
        </ItemFormPass>
      </ViewForm>
	    );
	}
}

const ViewForm = styled(View)`
  margin-top: 40px;
`;

const ItemFormUser = styled(Item)`
  alignItems: center;
  width: 100%;
  margin-top: 20px;
`;

const ItemFormPass = styled(Item)`
  alignItems: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;
