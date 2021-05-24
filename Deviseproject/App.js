// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';


const StackNavigator = createStackNavigator({
  signup : SignupScreen,
  signin : SigninScreen,
  home : HomeScreen
}) ;


const App = createAppContainer(StackNavigator) ;


export default App

// const styles = StyleSheet.create({})
