import React from 'react';
import { FlatList, ActivityIndicator, View, ImageBackground, StyleSheet, Platform, ListView, Image, ScrollView  } from 'react-native';
import { List, ListItem, Body, Text, Thumbnail, Icon } from 'native-base';
import styled from "styled-components/native";

export default class News extends React.Component {

  static navigationOptions = {
    header: null,
  };

 constructor(props) {
   super(props);
   this.state = {
     isLoading: true
   }
 }
 
GetItem (data) {
  
  this.props.navigation.navigate('NewsDetails', {data});
 
 }
 
 
 componentDidMount() {
 
   return fetch('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=2115db0268d249a6954b9e8a5e23b4ad')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson.articles),
       }, function() {
         // 
       });
     })
     .catch((error) => {
       console.error(error);
     });
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

  const { navigate } = this.props.navigation;

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
              onPress={() => navigate('Profile')}
              name="md-person"
              style={{
                color: '#FFF', fontSize: 30, marginLeft: 30, marginTop: 40, right: 0
              }}
          />
      <TextTitle>Read our awesome news</TextTitle>
      </ImageBackground>
    </ViewTitle>

    <Principal>
 
     <View style={styles.MainContainer}>
 
       <ListView
 
         dataSource={this.state.dataSource}
 
         renderSeparator= {this.ListViewItemSeparator}
 
         renderRow={(rowData) =>
 
        <View style={{flex:1, flexDirection: 'row'}}>
 
          <Image source = {{ uri: rowData.urlToImage }} style={styles.imageViewContainer} />
          <Text onPress={this.GetItem.bind(this, rowData)} style={styles.textViewContainer} >{rowData.title}</Text>
 
        </View>
         }
       />
 
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

const Contenedor = styled.View`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  z-index:0;
  position: relative;
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
  margin-top: 24px;
`;

const Principal = styled.View`
  alignItems: center;
  justifyContent: center;
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

