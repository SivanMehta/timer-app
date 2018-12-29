import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles';

class AnimatedBackground extends Component {
  constructor() {
    super();
    this.state = {
      height: new Animated.Value(0)
    };
  }

  componentDidUpdate() {
    const { duration, active } = this.props;
    if(!active) return ;

    Animated.timing(
      this.state.height, {
        toValue: 140,
        duration
      }
    ).start();
  }

  render() {
    const style = {
      ...styles.animation,
      height: this.state.height.interpolate({
        inputRange: [0, 140],
        outputRange: ['0%', '140%'],
      })
    };
    return (
      <Animated.View style={ style }/>
    )
  }
}

export default AnimatedBackground;
