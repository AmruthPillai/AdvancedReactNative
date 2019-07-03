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
    this.onAuthComplete(this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      this.onAuthComplete(this.props);
    }
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map')
    }
  }

  render() {
    return (
      <View />
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token }
}

const mapDispatchToProps = {
  facebookLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)