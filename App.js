import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { Font } from 'expo'; 
import Login from "./src/Login/index.js";
import Register from "./src/Register/index.js";
import Recover from "./src/Recover/index.js";

export default class App extends React.Component {

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
    return <Recover />;
  }
}
