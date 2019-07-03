import React, { Component } from 'react'
import { View } from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  {
    text: 'Welcome to Job Finder',
    color: '#0d47a1'
  },
  {
    text: 'We will help you get a local job',
    color: '#1565c0'
  },
  {
    text: 'Just set your location and swipe away',
    color: '#1976d2'
  }
]

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <Slides
          data={SLIDE_DATA}
          onComplete={this.onSlidesComplete} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  }
}