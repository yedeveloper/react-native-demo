import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { Font } from 'expo'; 
import { createStackNavigator } from 'react-navigation';
import Login from "./src/Login/index.js";
import Register from "./src/Register/index.js";
import Recover from "./src/Recover/index.js";
import OnBoard from "./src/OnBoard/index.js";
import News from "./src/News/index.js";
import NewsDetails from "./src/NewsDetails/index.js";
import Profile from "./src/Profile/index.js";

const AppNavigator = createStackNavigator({
  OnBoard: {screen: OnBoard},
  Login: {screen: Login},
  Register: { screen: Register },
  Recover: { screen: Recover },
  News: { screen: News },
  NewsDetails: { screen: NewsDetails},
  Profile: { screen : Profile},
},
{
  headerMode: 'screen',
  navigationOptions: {
      headerStyle: {
        backgroundColor: '#841584',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
 });

export default class AppMain extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <AppNavigator />;
  }
}
