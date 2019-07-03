import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import axios from 'axios'
import { Input, Button } from 'react-native-elements'

const ROOT_URL = 'https://us-central1-advancedreactnative-otp.cloudfunctions.net'

export default class SignInForm extends Component {
  state = { phone: '', code: '' }

  handleSubmit = async () => {
    const { phone, code } = this.state
    try {
      const { data } = await axios.post(`${ROOT_URL}/verifyOTP`, { phone, code })
      firebase.auth().signInWithCustomToken(data.token)
    } catch (error) {
      console.log('An Error Has Occured', error)
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.heading}>Login</Text>
        <View style={{ marginBottom: 30 }}>
          <Input
            placeholder='9876512345'
            value={this.state.phone}
            label='Please enter your phone number'
            onChangeText={phone => { this.setState({ phone }) }} />
        </View>
        <View style={{ marginBottom: 30 }}>
          <Input
            placeholder='1234'
            value={this.state.code}
            label='Enter your OTP'
            onChangeText={code => { this.setState({ code }) }} />
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