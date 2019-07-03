import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slides extends Component {
  renderLastSlide = (index) => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          raised
          type='outline'
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={this.props.onComplete}
          title='Start Searching!' />
      )
    }
  }

  renderSlides = ({ item, index }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.color }]}>
        <Text style={styles.slideText}>
          {item.text}
        </Text>
        {this.renderLastSlide(index)}
      </View>
    )
  }

  render() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
        data={this.props.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={this.renderSlides} />
    )
  }
}

const styles = {
  slide: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  slideText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
  },
  button: {
    paddingHorizontal: 30
  },
  buttonText: {
    fontSize: 14,
    color: '#1976d2',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
}
