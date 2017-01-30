'use strict';

var React = require('react-native');
var Vibration = require('react-native-vibration');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var VibrationExamples = React.createClass({
  onPress() {
    Vibration.vibrate(500);
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.button}
        >
          <Text>
            Click me to vibrate!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('VibrationExamples', () => VibrationExamples);
