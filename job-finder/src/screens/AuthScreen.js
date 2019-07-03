import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { facebookLogin } from '../actions'

class AuthScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false
  }

  componentDidMount() {
    this.props.facebookLogin()
    AsyncStorage.removeItem('fb_token')
  }

  render() {
    return (
      <View style={styles.container} />
    )
  }
}

const styles = {
  container: {
    marginTop: Expo.Constants.statusBarHeight
  }
}

const mapDispatchToProps = {
  facebookLogin
}

export default connect(null, mapDispatchToProps)(AuthScreen)