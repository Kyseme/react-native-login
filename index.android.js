/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './src/pages/Login';
import HomePage from './src/pages/Home';
import SignPage from './src/pages/SignUp';
import LoginPage from  './src/pages/Loginpage';
    const MyDemo=StackNavigator({
        Login:{screen:Login},
        Home:{screen:HomePage},
        Sign:{screen:SignPage}

    }, {
        initialRouteName: 'Login',
        navigationOptions: {
            headerTintColor: '#51c4fe',
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {alignSelf: 'center'},
        }
    }
)
AppRegistry.registerComponent('MyDemo', () => MyDemo);
