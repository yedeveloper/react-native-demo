import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { Item, Icon, Input, Button, ListItem, CheckBox, Body } from 'native-base';
import styled from "styled-components/native";
import { Constants, LinearGradient } from 'expo';

export default class Register extends React.Component {

	static navigationOptions = {
	    header: null,
	  }

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View  style={{paddingTop: Constants.statusBarHeight}}>
			<ImageBackground 
	      	source={{uri: 'http://dailyhdwallpaper.com/wp-content/uploads/Dark-Nature-Black-Background-HD-Wallpaper.jpg'}} style={{width: '100%', height: '100%'}}>
			    	<Contenedor>
				        <LinearGradientW
                  colors={['#65799b', '#5e2563']}
                  start={[0, 0]}
                  end={[1, 0]}>
                  <TextoCard>Create Account</TextoCard>
                </LinearGradientW>
				        <Principal>
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
				          <ViewBtn>
					        <Button transparent light block>
					            <TextBtn>GET STARTED</TextBtn>
					        </Button>
					      </ViewBtn>
				        </Principal>
				        <ViewMain>
					          <TextCenter
					          	onPress={() => navigate('Login')}
					          >Sign In</TextCenter>
					      </ViewMain>
				      </Contenedor>
			</ImageBackground>
			</View>
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

const LinearGradientW = styled(LinearGradient)`
    width: 60%;
    border-radius: 4px;
    padding-top: 22px;
    padding-bottom: 22px;
    position: absolute; 
    z-index: 3;
    top: 6.5%;
`;

const TextoCard = styled.Text`
    font-size: 20;
    color: #FFF;
    text-align: center;
`;

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
