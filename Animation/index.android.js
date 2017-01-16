import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Animation from './animation';

class AnimationApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Animation text='Aja' seconds={1000} />
        <Animation text='y' seconds={2000} />
        <Animation text='tu' seconds={3500} />
        <Animation text='que' seconds={1700} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('Animation', () => AnimationApp);