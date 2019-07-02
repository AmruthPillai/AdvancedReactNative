import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import SignUpForm from './src/components/SignUpForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    padding: 20
  },
});
