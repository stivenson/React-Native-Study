/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class HelloWorldStivenson extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          - Hola extraño...
        </Text>
        <Text style={styles.welcome} >
          - {this.state.text}
        </Text>
        <TextInput style={styles.response}
          placeholder="Responde a Stivenson"
          onChangeText={(text) => this.setState({ text })}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  response: {
    fontSize: 20,
    margin: 10,
    height: 40
  }
});

AppRegistry.registerComponent('HelloWorldStivenson', () => HelloWorldStivenson);
