import React, { Component } from 'react'
import { View, Animated, StyleSheet } from 'react-native'

export default class Ball extends Component {
  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY({ x: 0, y: 0 })
  }

  componentDidMount() {
    Animated.spring(this.position, {
      toValue: { x: 300, y: 500 }
    }).start()
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: '#333'
  }
})
