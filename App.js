import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NavigationBar from 'react-native-navbar';

import Timer from './components/timer';
import styles from './components/styles';

const ONE_SECOND = 1000;

let timers = [{
  label: 'Push Ups',
  description: 'Touch the floor with your chest',
  duration: 3 * ONE_SECOND
}, {
  label: 'Lunges',
  description: 'Good Balance',
  duration: 2 * ONE_SECOND
}, {
  label: 'Rest',
  description: 'Catch your breath',
  duration: 1 * ONE_SECOND
}];

const titleConfig = {
  title: 'Timers'
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: -1
    };

    ['play', 'next'].forEach(fn => {
      this[fn] = this[fn].bind(this)
    });
  }

  play() {
    this.setState({ active: 0 }, () => {
      setTimeout(this.next, timers[0].duration)
    })
  }

  next () {
    const { active } = this.state;
    if(active < timers.length) {
      this.setState({
        active: active + 1
      }, () => {
        setTimeout(this.next, timers[active].duration)
      })
    } else {
      this.setState({
        active: -1
      });
    }
  }

  render() {
    const { active } = this.state;
    return (
      <View style={ styles.app }>
        <NavigationBar title={ titleConfig }/>
        { timers.map((t, i) => (
          <Timer
            { ...t }
            key={ `timer-${i}` }
            active={ i === active }
            />
        )) }
        <Button title='Play' onPress={ this.play }/>
      </View>
    );
  }
}
