import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text } from 'react-native';

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};


    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, this.props.seconds);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text class={styles.animation}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  animation: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18
  }
});
