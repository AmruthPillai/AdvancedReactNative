import _ from 'lodash'
import React, { Component } from 'react'
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
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
  state = { token: null }

  static navigationOptions = {
    tabBarVisible: false
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token')

    if (token) {
      this.props.navigation.navigate('map')
    } else {
      this.setState({ token: false })
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <ActivityIndicator
        size='large'
        style={styles.flexCenter} />
    }

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
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}