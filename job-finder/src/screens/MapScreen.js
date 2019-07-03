import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: Expo.Constants.statusBarHeight
  }
}