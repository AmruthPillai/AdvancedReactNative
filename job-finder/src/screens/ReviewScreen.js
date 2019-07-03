import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Icon } from "react-native-elements"

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review Jobs',
    headerRight: (
      <Button
        type='clear'
        icon={
          <Icon
            name='settings'
            size={24}
            color='#2196f3' />
        }
        onPress={() => {
          navigation.navigate('settings')
        }}
      />
    )
  });

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    )
  }
}
