import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button, ListItem, CheckBox, Body } from 'native-base';
import styled from "styled-components/native";

export default class FormularioReg extends React.Component {

  onPressLearnMore(){
      console.log('ok');
  }

	render() {

		return (
      <ViewForm>
        <ItemFormUser style={{}}>
            <Icon
              name="md-person"
              style={{
                color: '#841584', fontSize: 20, marginLeft: 10,
              }}
            />
            <Input
              blurOnSubmit={false}
              returnKeyType="next"
              editable={true}
              autoCapitalize="sentences"
              placeholder={'Name...'}
            />
        </ItemFormUser>
        <ItemFormPass style={{}}>
            <Icon
              name="md-mail"
              style={{
                color: '#841584', fontSize: 20, marginLeft: 10,
              }}
            />
            <Input
              blurOnSubmit={false}
              returnKeyType="next"
              editable={true}
              autoCapitalize="sentences"
              placeholder={'Email...'}
            />
        </ItemFormPass>
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
        <ListItem>
            <CheckBox />
            <Body>
              <TextCheck>I agree to the terms and conditions</TextCheck>
            </Body>
          </ListItem>
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

const TextCheck = styled(Text)`
  margin-left: 8px;
`;
