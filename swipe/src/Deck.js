import React, { Component } from 'react'
import {
  View,
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  UIManager,
  LayoutAnimation
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25
const SWIPE_OUT_DURATION = 250

export default class Deck extends Component {
  static defaultProps = {
    onSwipeLeft: () => { },
    onSwipeRight: () => { }
  }

  constructor(props) {
    super(props)

    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right')
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left')
        } else {
          this.resetPosition()
        }
      },
    })

    this.state = {
      index: 0,
      position,
      panResponder
    }
  }

  forceSwipe(direction) {
    const x = SCREEN_WIDTH * (direction === 'right' ? 2 : -2)

    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    try {
      if (nextProps.data.length === prevState.index) {
        return { index: 0 };
      } else {
        return null
      }
    } catch (e) {
      return { index: 0 };
    }
  }

  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

    LayoutAnimation.spring()
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props
    const item = data[this.state.index]

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)

    this.state.position.setValue({ x: 0, y: 0 })
    this.setState({
      index: this.state.index + 1
    })
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start()
  }

  getCardStyle() {
    const { position } = this.state

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2.5, 0, SCREEN_WIDTH * 2.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })

    const opacity = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: [0, 1, 0]
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
      opacity
    }
  }

  renderCards() {
    const { panResponder } = this.state
    const { data, renderCard } = this.props

    if (this.state.index >= data.length) {
      return this.props.renderNoMoreCards()
    }

    return data.map((item, index) => {
      if (index === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this.getCardStyle(), styles.card, styles.currentCard]}
            {...panResponder.panHandlers}>
            {renderCard(item)}
          </Animated.View>
        )
      } else if (index < this.state.index) {
        return null
      }

      return (
        <Animated.View
          key={item.id}
          style={[
            styles.card,
            { top: 8 * (index - this.state.index) }
          ]}>
          {renderCard(item)}
        </Animated.View>
      )
    }).reverse()
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  currentCard: {
    zIndex: 2,
  },
  card: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    zIndex: 1
  }
})
