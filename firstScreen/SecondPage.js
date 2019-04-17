//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
//import all the components we are going to use.
import Icon from 'react-native-vector-icons/MaterialIcons';
 
export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: '',
  }
  this.state = {
      icEye: 'visibility-off',
      password: true
  }
}
changePwdType = () => {
  let newState;
  if (this.state.password) {
      newState = {
          icEye: 'visibility',
          password: false
      }
  } else {
      newState = {
          icEye: 'visibility-off',
          password: true
      }
  }
  // set new state value
  this.setState(newState)
};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior='padding' style={StyleSheet.wrapper}>
    <View>
    <View style={styles.container}>
    <Text style={styles.Header}>
      LOGIN
    </Text>
    </View>
    <View style={styles.InputContainer}>
     <TextInput
        style={styles.textInput}
        placeholder="UserName"
        onChangeText={(username) => this.setState({username})}
        underlineColorAndroid = "transparent"
    />
    <TextInput
    style={styles.textInput}
       secureTextEntry={this.state.password}
       placeholder="Password"
                           />
                <Icon style={styles.icon}
                      name={this.state.icEye}
                      size={this.props.iconSize}
                      color={this.props.iconColor}
                      onPress={this.changePwdType}
                />
    </View>
    <View>
    <TouchableOpacity
    style={styles.Button}
    onPress={() =>navigate('menu')}>
    <Text style={styles.ButtonSign}>SIGN IN</Text>
    </TouchableOpacity>
    </View>
    </View>
    </KeyboardAvoidingView>
    );
  }
}
const styles=StyleSheet.create({
  wrapper:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  
  container: {
    marginTop: '12%',
  },
  Header: {
    fontSize: 30,
    marginTop: '6%',
    marginLeft: '4%',
    marginBottom: 60,
    color: 'gray',
  },
  textInput: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderColor: '#00aeef',
    width: '90%',
    marginLeft: '5%',
    marginTop: '6%',
    fontSize: 20,
    borderBottomWidth: 2,
  },
  Button: {
    alignSelf: 'stretch',
    backgroundColor: '#00aeef',
    padding: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15%',
    margin: 30,
    height: 60,
    borderRadius: 10,
  },
  ButtonSign: {
    alignItems: 'center',
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 100,
    height: 50,
    width: 50,
}
});