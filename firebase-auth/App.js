import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';
import { Divider } from 'react-native-elements';
import firebase from 'firebase'

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCn-_SwZVEjoHbn4MP-YPW6nIBPrvFWtK8",
      authDomain: "advancedreactnative-otp.firebaseapp.com",
      databaseURL: "https://advancedreactnative-otp.firebaseio.com",
      projectId: "advancedreactnative-otp",
      storageBucket: "",
      messagingSenderId: "822813031290",
      appId: "1:822813031290:web:3a276b5e4471a27c"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <Divider />
        <SignInForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    marginTop: StatusBar.currentHeight,
    padding: 20
  },
});
