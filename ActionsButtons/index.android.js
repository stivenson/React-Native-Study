/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  Button
} from 'react-native';

const onOpenAlert = () => { Alert.alert('Message','Button has been pressed and Alert opened'); };

export default class ActionsButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
            <Button  
                onPress={onOpenAlert} 
                title="Open Informative Alert" 
                accessibilityLabel="See an informative alert" />
        </View>
      </View>
    );
  }        
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerButton: {
        flex: 1, 
        backgroundColor: 'skyblue', 
        padding: 20
    }
})

AppRegistry.registerComponent('ActionsButtons', () => ActionsButtons);
