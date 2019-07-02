import React, { Component } from 'react'
import { Text, View } from 'react-native'

import axios from 'axios'
import { Input, Button } from 'react-native-elements'

const ROOT_URL = 'https://us-central1-advancedreactnative-otp.cloudfunctions.net'

export default class SignUpForm extends Component {
  state = { phone: '' }

  handleSubmit = async () => {
    const { phone } = this.state
    await axios.post(`${ROOT_URL}/createUser`, { phone })
    await axios.post(`${ROOT_URL}/requestOTP`, { phone })
  }

  render() {
    return (
      <View>
        <Text style={styles.heading}>Signup</Text>
        <View style={{ marginBottom: 30 }}>
          <Input
            placeholder='+91 123 456 7890'
            label='Please enter your phone number'
            onChangeText={phone => { this.setState({ phone }) }} />
        </View>
        <Button
          title='Submit'
          onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = {
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40
  }
}