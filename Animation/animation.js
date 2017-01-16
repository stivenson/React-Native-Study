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
      <Text style={styleAnimation.content}>{display}</Text>
    );
  }
}

const styleAnimation = StyleSheet.create({
  content: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    borderRadius: 4, 
    borderWidth: 0.5, 
    borderColor: '#d6d7da',
    backgroundColor: '#e5e5e5',
    margin: 10,
  }
});
