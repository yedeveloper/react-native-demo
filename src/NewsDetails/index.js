import React from 'react';
import { View, ScrollView, Text, Image, ImageBackground } from 'react-native';
import { Item, Icon, Input, Button } from 'native-base';
import styled from "styled-components/native";

export default class NewsDetails extends React.Component {

  static navigationOptions = {
    header: null,
  };

  saveDetails() {
        alert('Save Details');
    }

    componentDidMount() {
      this.props.navigation.setParams({ handleSave: this.saveDetails });
    }

	render() {
    const {data} =  this.props.navigation.state.params;
    const { goBack } = this.props.navigation;
		return (
      <Contenedor>
      <ScrollView contentContainerStyle={{flex:1}}>
      <ViewTitle>
        <ImageBackground 
              source={{uri: data.urlToImage}} style={{width: '100%', height: '100%'}}>
          <Icon
              onPress={() => goBack()}
              name="md-arrow-back"
              style={{
                color: '#FFF', fontSize: 30, marginLeft: 30, marginTop: 40
              }}
          />
          <TextTitleMain>{data.title}</TextTitleMain>
        </ImageBackground>
      </ViewTitle>
      <Principal>
        <ViewNews>
          <TextTitle>{data.title}</TextTitle>
          <ViewMain>
            <ViewLeft>
              <TextLeft>{data.author}</TextLeft>
            </ViewLeft>
            <ViewRight>
              <TextRight>{data.publishedAt.split('T')[0]}</TextRight>
            </ViewRight>
          </ViewMain>
          <ViewMain>
            <TextDesc>{data.description}</TextDesc>
          </ViewMain>
          <ViewMain>
            <TextFuente>
              Noticia completa en:  
              <TextUrl> {data.url}</TextUrl>
            </TextFuente>
          </ViewMain>
        </ViewNews>
        </Principal>
      </ScrollView>
      </Contenedor>
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

const TextLin = styled(Text)`
  width: 100%;
  height: 300px;
`;

const ViewTitle = styled.View`
  alignItems: center;
  justifyContent: center;
  z-index:0;
  position: relative;
  height: 45%;
  width: 100%;
  background-color: #841584;
`;

const TextTitleMain = styled.Text`
  color: transparent;
  text-align: center;
  font-size: 25;
  font-weight: bold;
  margin-top: 45px;
`;

const Principal = styled.View`
  alignItems: center;
  justifyContent: center;
  width: 95%;
  background-color: #FFF;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  margin: 0 auto;
  left: 2.5%;
  right: 0;
  bottom: 0;
`;

const ViewNews = styled.View`
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 10px;
`;

const ImgNews = styled(Image)`
  width: 100%;
  height: 300px;
  margin-top: -10px;
`;

const TextTitle = styled(Text)`
  color: #841584;
  font-size: 25;
  text-align: center;
  font-weight: bold;
  padding: 10px;
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
  color: #8B8686
  font-size: 13;
  text-align: left;
`;
const TextRight = styled.Text`
  color: #8B8686
  font-size: 13;
  text-align: right;
`;

const TextDesc = styled.Text`
  font-size: 20;
`;

const TextFuente = styled.Text`
  color: #8B8686
  font-size: 15;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const TextUrl = styled.Text`
  color: #841584
  font-size: 15;
`;