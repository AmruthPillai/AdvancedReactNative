import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Deck from './src/Deck'
import { Card, Button } from 'react-native-elements'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
]

export default class App extends Component {
  renderCard(item) {
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
        imageStyle={styles.cardImage}
        containerStyle={styles.cardContainer}
        key={item.id.toString()}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget mauris posuere, hendrerit felis a, tincidunt diam. Nulla facilisi. Praesent ultrices enim a libero venenatis auctor feugiat sed risus.
        </Text>
        <Button
          backgroundColor='#03A9F4'
          title='View More' />
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title='All Done!'>
        <Text style={{ marginBottom: 20, textAlign: 'center' }}>
          There are no more cards left!
        </Text>

        <Button
          backgroundColor='#03A9F4'
          title='Refresh' />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  cardImage: {
    height: 300
  },
  cardContainer: {
    elevation: 4
  },
  description: {
    marginBottom: 16,
    textAlign: 'justify',
    padding: 14
  }
})
