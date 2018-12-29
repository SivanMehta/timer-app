import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AnimatedBackground from './animated-background';

class Timer extends Component {
  renderDuration(duration) {
    const time = duration / 1000;
    return (
      <Text>{ time } seconds</Text>
    );
  }

  render() {
    const { label, description, duration, active } = this.props;
    return (
      <View style={ styles.timer }>
        <AnimatedBackground active={ active } duration={ duration }/>
        <Text style={ styles.label }>{ label } - { this.renderDuration(duration) }</Text>
        <Text style={ styles.description }>{ description }</Text>
      </View>
    );
  }
}

export default Timer;
