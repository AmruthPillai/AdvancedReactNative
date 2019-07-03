import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.statusBarHeight}>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    )
  }
}

const styles = {
  statusBarHeight: {
    marginTop: Expo.Constants.statusBarHeight
  }
}