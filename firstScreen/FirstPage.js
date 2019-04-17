//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Alert, Button } from 'react-native-elements';
//import all the components we are going to use.
 
export default class FirstPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInputValue: "",
      ErrorStatus : true,
     }
  }
  onEnterText = (TextInputValue) =>{
    if(TextInputValue.trim() != 0){
     this.setState({TextInputValue : TextInputValue, ErrorStatus : true}) ;
   }else{
       this.setState({TextInputValue : TextInputValue, ErrorStatus : false}) ;
   }
 }
 
 buttonClickListener = () =>{
       const { TextInputValue }  = this.state ;
       if (TextInputValue == ""){
          Alert.alert("Please enter the text to proceed");
       }
   }
   
  render() {
    const { navigate } = this.props.navigation;
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <KeyboardAvoidingView style={styles.searchSection} behavior="padding" enabled>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={styles.loginContainer}>
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.companyLink}>https://support.faveohelpdesk.com</Text>
        </View>
        
        <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 120,
      }}>
        <Text style={styles.helpdeskText}>Helpdesk URL</Text>
        <View style={styles.loginOption}>
           <Image source={require('./screens/src/components/image/login.png')} style={{ marginTop: 8, height: 28, width: 28, borderRadius: 30 }} />
          <TextInput
        style={styles.input}
        placeholder="https://support.faveohelpdesk.com"
        onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
        underlineColorAndroid = "transparent"
         behavior="padding" 
         />
        <TouchableOpacity
            style={styles.Button}
            onPress={() =>navigate('SecondPage')}>
            <Image source={require('./screens/src/components/image/Art.png')} style={{ height: 45, width: 45 }} />
            </TouchableOpacity>
            </View> 
            <Text style={styles.NeedText}>Need help with your Helpdesk URL? </Text>
            </View>
            <View />
      </View>
         </KeyboardAvoidingView>
          
    );
  }
}
const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    padding: 0,
    borderColor: '#00aeef',
    width: '80%',
    fontSize: 16,
    borderBottomWidth: 2,
  },
  loginContainer: {
   marginTop: 100,
   marginLeft: 10,
  },
   login: {
    color: 'grey',
    fontSize: 25,
     fontWeight: '500',
  },
   companyLink: {
    color: 'grey',
    fontSize: 12,
  },
   searchSection: {
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
},
loginOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
   
  },
  helpdeskText: {
    marginLeft: 10,
    fontWeight: '500',
    marginTop: 10,
    color: 'gray',
  },
  Button: {
    borderRadius: 30,
    backgroundColor: '#00aeef',
  },
  NeedText: {
    marginLeft: 40,
    fontWeight: 'bold',
    color: '#00aeef',
    textDecorationLine: 'underline',
  },
  
});
