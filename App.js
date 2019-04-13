import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, TouchableWithoutFeedback,
   ToastAndroid, ItemSeparatorComponent, ActivityIndicator
} from 'react-native';
import { Header, Left, Right, Icon} from 'native-base';
import { logicalExpression } from '@babel/types';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';
import Button from './src/components/Buttom';

class HomeScreen extends Component{

  constructor(){
    super()
    this.state={
      dataSource: [],
      isLoading: true
    }
  }

  renderItem = ({ item }) => {

    return(
      <TouchableWithoutFeedback onPress={ () => this._onPress(item)}>
      <Card>
  <CardSection>
  <View style={styles.thumbnailContainerStyle}>
  <Image  style={styles.thumbnailStyle}
  source={{ uri: item.picture.medium }} />
  </View>
  <View style={styles.Main}>
  <View style={styles.containerImageStyle}>
      <Image
      style={styles.image}
       source={require('./src/components/image/inbox.png')} 
       />
  <Text style={styles.ImageheaderTextStyle}>{item.email}</Text>
  </View>
  <View style={styles.HeaderContenStyle}>

  <Text style={styles.headerTextTitleStyle}>
      {item.name.title +" "+ item.name.first +" "+ item.name.last}
      </Text>
      <Text>{item.login.username}</Text>
  </View>
  <View style={styles.containerTimeStyle}>
  <Text style={styles.timeStyle}>{item.registered.date}</Text>
  </View>
  </View>
  </CardSection>
  <CardSection>
  <Button />
  </CardSection>
  </Card>
      </TouchableWithoutFeedback>
    )

  }

  _onPress(item) {
    this.props.navigation.navigate('Settings', {
      itemId: item.name.title+" "+item.name.first+" "+item.name.last,
      title: item.picture.medium,
    });
  }

  renderSeparator =() => {
    return (
      <View style={{height: 1, width: '95%', backgroundColor: 'gray' }}>
      </View>
    );
  }

  actionOnRow(item) {
    ToastAndroid.show('Selected Item :'+item.name.title+" "+item.name.first+" "+item.name.last, ToastAndroid.SHORT);
}

  componentDidMount() {
    const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=100'

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.results,
          isLoading: false
        })
    })
    .catch((error) => {
      console.log(error)

    })

  }


  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (

      <Icon name="menu" style={{ fontSize: 2000, color: '#000000', backgroundColor: 'red' }} />
    )
  }
  render(){
    return(
      this.state.isLoading
      ?
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#330066" animating />
      </View>
      :
      <View style={styles.container}>
      <Header>
      <Left style={{ paddingRight: 350}}>
      <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
      </Left>
      </Header>
      <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={this.renderSeparator}
      />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF'
  },
  HeaderContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextTitleStyle: {
    fontSize: 18,
    color: '#000',
  },
  containerImageStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Main: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10
  },
  headerImageStyle: {
    height: 20,
    width: 20,
  },
  ImageheaderTextStyle: {
    fontSize: 15,
    paddingLeft: 6,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  image: {
    height: 20,
    width: 20,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeStyle: {
    fontSize: 13,
  },
});