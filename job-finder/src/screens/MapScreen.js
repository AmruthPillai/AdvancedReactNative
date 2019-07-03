import React, { Component } from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapScreen extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          region={this.state.region}
          provider={PROVIDER_GOOGLE}
          style={styles.container} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  }
}