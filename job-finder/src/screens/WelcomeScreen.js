import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.statusBarHeight}>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
      </View>
    )
  }
}

const styles = {
  statusBarHeight: {
    marginTop: Expo.Constants.statusBarHeight
  }
}