import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import styled from "styled-components/native";
import { Button, Item, Icon, Input } from 'native-base';
import Swiper from 'react-native-swiper';
import { Constants, LinearGradient } from 'expo';

const height = '80%';

const styles = StyleSheet.create({
  wrapper: {
    height
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class OnBoard extends React.Component {

  static navigationOptions = {
      header: null,
    }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View>
          <ImageBackground 
              source={{uri: 'http://dailyhdwallpaper.com/wp-content/uploads/Dark-Nature-Black-Background-HD-Wallpaper.jpg'}} style={{width: '100%', height: '100%'}}>
                <Contenedor>
                    <LinearGradientW
                      colors={['#65799b', '#5e2563']}
                      start={[0, 0]}
                      end={[1, 0]}>
                      <TextoCard>Test 1</TextoCard>
                    </LinearGradientW>
                    <Principal>
                      <ViewForm>
                      <TextIcon>
                      <Icon
                        name="ios-wifi-outline"
                        style={{
                          color: '#841584', fontSize: 70, marginLeft: 10,
                        }}
                      />
                      </TextIcon>
                      <TextoCardDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </TextoCardDesc>
                    </ViewForm>
                    </Principal>
                    <ViewMain>
                      <TextMain
                        onPress={() => navigate('Login')}
                      >Skip To App</TextMain>
                    </ViewMain>
                  </Contenedor>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground 
              source={{uri: 'http://dailyhdwallpaper.com/wp-content/uploads/Dark-Nature-Black-Background-HD-Wallpaper.jpg'}} style={{width: '100%', height: '100%'}}>
                <Contenedor>
                    <LinearGradientW
                      colors={['#65799b', '#5e2563']}
                      start={[0, 0]}
                      end={[1, 0]}>
                      <TextoCard>Test 2</TextoCard>
                    </LinearGradientW>
                    <Principal>
                      <ViewForm>
                      <TextIcon>
                      <Icon
                        name="ios-umbrella-outline"
                        style={{
                          color: '#841584', fontSize: 70, marginLeft: 10,
                        }}
                      />
                      </TextIcon>
                      <TextoCardDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </TextoCardDesc>
                    </ViewForm>
                    </Principal>
                    <ViewMain>
                      <TextMain
                        onPress={() => navigate('Login')}
                      >Skip To App</TextMain>
                    </ViewMain>
                  </Contenedor>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground 
              source={{uri: 'http://dailyhdwallpaper.com/wp-content/uploads/Dark-Nature-Black-Background-HD-Wallpaper.jpg'}} style={{width: '100%', height: '100%'}}>
                <Contenedor>
                    <LinearGradientW
                      colors={['#65799b', '#5e2563']}
                      start={[0, 0]}
                      end={[1, 0]}>
                      <TextoCard>Test 3</TextoCard>
                    </LinearGradientW>
                    <Principal>
                      <ViewForm>
                      <TextIcon>
                      <Icon
                        name="ios-trophy-outline"
                        style={{
                          color: '#841584', fontSize: 70, marginLeft: 10,
                        }}
                      />
                      </TextIcon>
                      <TextoCardDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </TextoCardDesc>
                    </ViewForm>
                    </Principal>
                    <ViewMain>
                      <TextMain
                        onPress={() => navigate('Login')}
                      >Skip To App</TextMain>
                    </ViewMain>
                  </Contenedor>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground 
              source={{uri: 'http://dailyhdwallpaper.com/wp-content/uploads/Dark-Nature-Black-Background-HD-Wallpaper.jpg'}} style={{width: '100%', height: '100%'}}>
                <Contenedor>
                    <LinearGradientW
                      colors={['#65799b', '#5e2563']}
                      start={[0, 0]}
                      end={[1, 0]}>
                      <TextoCard>Test 4</TextoCard>
                    </LinearGradientW>
                    <Principal>
                      <ViewForm>
                      <TextIcon>
                      <Icon
                        name="ios-videocam-outline"
                        style={{
                          color: '#841584', fontSize: 70, marginLeft: 10,
                        }}
                      />
                      </TextIcon>
                      <TextoCardDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </TextoCardDesc>
                    </ViewForm>
                    </Principal>
                    <ViewMain>
                      <TextMain
                        onPress={() => navigate('Login')}
                      >Skip To App</TextMain>
                    </ViewMain>
                  </Contenedor>
          </ImageBackground>
        </View>
      </Swiper>
    );
  }
}

const TextButton = styled.Text`
  color: white;
  font-size: 25;
`;


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
  height: 55%;
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
    top: 14%;
`;

const TextoCard = styled.Text`
    font-size: 20;
    color: #FFF;
    text-align: center;
`;

const TextIcon = styled.Text`
    text-align: center;
    margin-top: 10px;
`;

const TextoCardDesc = styled.Text`
    font-size: 20;
    color: #767676;
    text-align: center;
    margin-top: 10px;
`;

const TextMain = styled.Text`
    font-size: 20;
    color: #FFF;
    text-align: center;
    margin-top: 10px;
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

