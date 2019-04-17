//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
//import Navigator in our project
import FirstPage from './firstScreen/FirstPage';
import SecondPage from './firstScreen/SecondPage';
import DrawerNavigatorExample from './firstScreen/menu';
//import all the screens we are going to switch 
const App = createDrawerNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: { screen: SecondPage }, 
    menu: DrawerNavigatorExample
  }
);
//Version 3+ changes are here. 
//In version 2+ createAppContainer was default container 
//but in version 3+ you have to export it manually
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);
