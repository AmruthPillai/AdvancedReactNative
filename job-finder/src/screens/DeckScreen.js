import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DeckScreen extends Component {
  render() {
    return (
      <View style={styles.statusBarHeight}>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
      </View>
    )
  }
}

const styles = {
  statusBarHeight: {
    marginTop: Expo.Constants.statusBarHeight
  }
}