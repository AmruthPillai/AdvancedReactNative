import React, { Component } from 'react'
import { View } from 'react-native'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import {
  AuthScreen,
  WelcomeScreen,
  MapScreen,
  DeckScreen,
  ReviewScreen,
  SettingsScreen
} from "./src/screens";

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen }
        })
      }
    })
  }
})

const AppContainer = createAppContainer(MainNavigator)

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
}