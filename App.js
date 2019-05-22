/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';


//Screens 
import Login from './Screens/Login'
import SignUp from './Screens/Registration'
import forgetPass from './Screens/ForgotPassword'


const stacks = createStackNavigator({
  //Login Screen With Disable Navigation Header
      LOGIN : {
        screen:Login,
          navigationOptions: {
             header: null,
          }   
      },
      SIGNUP : {
        screen:SignUp,
        navigationOptions:{
          header: null,
        }
      },
      FORGOTPASS:{
        screen:forgetPass,
        navigationOptions:{
          header: null
        }
      },

});

const APP = createAppContainer(stacks)
export default APP
