import React from 'react' 
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer,createSwitchNavigator } from "react-navigation"; 
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/ExchangeScreen'
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class App extends React.Component {
render(){
  return( 
    <SafeAreaProvider>
  <AppContainer/>
    </SafeAreaProvider>
  ) 
}
}
const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  Exchange: {screen: Exchange }
})

const switchNavigator=createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  TabNavigator:{screen: TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);