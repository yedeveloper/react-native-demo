import React from 'react';
import { FlatList, ActivityIndicator, View, ImageBackground, StyleSheet, Platform, ListView, Image, ScrollView  } from 'react-native';
import { List, ListItem, Body, Text, Thumbnail, Item, Icon, Input } from 'native-base';
import styled from "styled-components/native";

export default class Profile extends React.Component {

  static navigationOptions = {
    header: null,
  };

 constructor(props) {
   super(props);
   this.state = {
     isLoading: false
   }
 }
 
GoEdit () {
  
  this.props.navigation.navigate('Login');
 
 }
 
 ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
 
 render() {

  const { goBack } = this.props.navigation;

   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }
 
   return (
   
    <Contenedor>

    <ScrollViewItem contentContainerStyle={{flex:1}}>

    <ViewTitle>
    <ImageBackground 
          source={{uri: 'http://dailyhdwallpaper.com/wp-content/uploads/Dark-Nature-Black-Background-HD-Wallpaper.jpg'}} style={{width: '100%', height: '100%'}}>
      <Icon
              onPress={() => goBack()}
              name="md-arrow-back"
              style={{
                color: '#FFF', fontSize: 30, marginLeft: 30, marginTop: 40, right: 0
              }}
          />
      <TextTitle>Profile</TextTitle>
      </ImageBackground>
    </ViewTitle>

    <Principal>
      <ImagePro
        source={{uri: 'https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg'}}
      /> 
     <View>

          <ViewMain>
            <ViewLeft>
              <Icon active name='person' style={{marginLeft:50, color: 'blue'}} />
              <TextLeft>60 Friends</TextLeft>
            </ViewLeft>
            <ViewRight>
              <Icon active name='heart' style={{marginLeft:50, color:'red'}} />
              <TextRight>120k Likes</TextRight>
            </ViewRight>
          </ViewMain>
 
       <ItemForm>
          <Icon active name='person' />
          <Input disabled placeholder='Nombres'/>
        </ItemForm>
        <ItemForm>
          <Icon active name='person' />
          <Input disabled placeholder='Apellidos'/>
        </ItemForm>
        <ItemForm>
          <Icon active name='home' />
          <Input disabled placeholder='Dirección'/>
        </ItemForm>
        <ItemForm>
          <Icon active name='call' />
          <Input disabled placeholder='Número de teléfono'/>
        </ItemForm>
 
     </View>
     </Principal>
     </ScrollViewItem>
     </Contenedor>
     
   );
 }
}

const ScrollViewItem = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const ItemForm = styled(Item)`
  width: 100%;
  margin-top:20px;
`;

const ViewMain = styled.View`
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  width: 90%;
`;
const ViewLeft = styled.View`
  width: 33%;
`;
const ViewRight = styled.View`
  width: 33%;
`;
const ViewCenter = styled.View`
  width: 33%;
`;
const TextLeft = styled.Text`
  color: #8B8686
  font-size: 18;
  text-align: right;
`;
const TextRight = styled.Text`
  color: #8B8686
  font-size: 18;
  text-align: right;
`;

const Contenedor = styled.View`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  z-index:0;
  position: relative;
`;

const ImagePro = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  position: absolute;
  z-index: 4;
  top: -15%;
`;

const ViewTitle = styled.View`
  alignItems: center;
  justifyContent: center;
  z-index:0;
  position: relative;
  height: 30%;
  width: 100%;
  background-color: #841584;
`;

const TextTitle = styled.Text`
  color: #FFF;
  text-align: center;
  font-size: 25;
  font-weight: bold;
  margin-top: 37px;
`;

const Principal = styled.View`
  alignItems: center;
  width: 95%;
  background-color: #FFF;
  border-radius: 10px;
  padding:2%;
  position: absolute;
  top: 23%;
  margin: 0 auto;
  left: 2.5%;
  right: 0;
  bottom: 0;
`;
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
margin: 5,
paddingTop: 10,
 
},
 
imageViewContainer: {
width: '30%',
height: 100 ,
margin: 5,
borderRadius : 5
 
},
 
textViewContainer: {
 
  textAlignVertical:'center',
  width:'70%', 
  padding:5
 
}
 
});

