import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import Ball from './src/Ball'

export default function App() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
});
