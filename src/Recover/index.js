import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { Item, Icon, Input, Button, ListItem, CheckBox, Body } from 'native-base';
import styled from "styled-components/native";
import { Constants, LinearGradient } from 'expo';

export default class Recover extends React.Component {

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
                  <TextoCard>Forgot Password?</TextoCard>
                </LinearGradientW>
				        <Principal>
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
				          <ViewBtn>
					        <Button transparent light block>
					            <TextBtn>GET STARTED</TextBtn>
					        </Button>
					      </ViewBtn>
				        </Principal>
				        <ViewMain>
				          <TextCenter
				          	onPress={() => navigate('Login')}
				          >Back to Sign In</TextCenter>
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
  height: 35%;
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
    top: 22%;
`;

const TextoCard = styled.Text`
    font-size: 20;
    color: #FFF;
    text-align: center;
`;

const ViewForm = styled(View)`
  margin-top: 40px;
`;

const ItemFormPass = styled(Item)`
  alignItems: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
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
