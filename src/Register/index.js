import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styled from "styled-components/native";
import { Constants } from 'expo';
import CardItemReg from './CardItemReg'

export default class Register extends React.Component {

	render() {
		return (
			<View  style={{paddingTop: Constants.statusBarHeight}}>
			<ImageBackground 
	      	source={{uri: 'http://xinature.com/wp-content/uploads/2016/10/winter-trees-dark-cold-snow-forest-nature-wall-white-black-desktop-wallpapers-backgrounds.jpg'}} style={{width: '100%', height: '100%'}}>
			    	<CardItemReg />
			</ImageBackground>
			</View>
	    );
	}
}
