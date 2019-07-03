import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DeckScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
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
  container: {
    marginTop: Expo.Constants.statusBarHeight
  }
}