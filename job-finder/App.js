import React, { Component } from 'react'
import { View, StatusBar, AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'
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
    navigationOptions: { tabBarVisible: false },
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
  componentDidMount() {
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
}