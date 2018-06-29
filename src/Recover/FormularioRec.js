import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input, Button, ListItem, CheckBox, Body } from 'native-base';
import styled from "styled-components/native";

export default class FormularioRec extends React.Component {

	render() {

		return (
      <ViewForm>
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
      </ViewForm>
	    );
	}
}

const ViewForm = styled(View)`
  margin-top: 40px;
`;

const ItemFormPass = styled(Item)`
  alignItems: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;
