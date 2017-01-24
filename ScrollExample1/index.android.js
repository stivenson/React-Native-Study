/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    ScrollView,
    View,
    Switch,
    StyleSheet,
    Button
} from 'react-native';

export default class ScrollExample1 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.content} >
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 26 }}>Scroll me plz</Text>

                        <Text style={{ fontSize: 26 }}>If you like</Text>

                        <Text style={{ fontSize: 26 }}>Scrolling down</Text>

                        <Text style={{ fontSize: 26 }}>What's the best</Text>

                        <Text style={{ fontSize: 26 }}>Framework around?</Text>

                        <Text style={{ fontSize: 30 }}>React Native</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Switch disabled={true} style={{ marginBottom: 10 }} value={false} />
                        <Switch disabled={false} value={true} />
                    </View>
                    <View style={{flex:3}}>
                        <Button onPress={()=>true} title="Un Botón" color="#841584" accessibilityLabel="Un boton" />
                    </View>
                    <View style={{flex:4}}>
                        <Button onPress={()=>true} title="Un Botón" color="blue" accessibilityLabel="Un boton" />
                    </View>
                    <View style={{flex:5}}>
                        <Button onPress={()=>true} title="Un Botón" color="orange" accessibilityLabel="Un boton" />
                    </View>
                </View>
                <View style={styles.content} >
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 26 }}>Scroll me plz</Text>

                        <Text style={{ fontSize: 26 }}>If you like</Text>

                        <Text style={{ fontSize: 26 }}>Scrolling down</Text>

                        <Text style={{ fontSize: 26 }}>What's the best</Text>

                        <Text style={{ fontSize: 26 }}>Framework around?</Text>

                        <Text style={{ fontSize: 30 }}>React Native</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Switch disabled={true} style={{ marginBottom: 10 }} value={false} />
                        <Switch disabled={false} value={true} />
                    </View>
                    <View style={{flex:3}}>
                        <Button onPress={()=>true} title="Un Botón" color="#841584" accessibilityLabel="Un boton" />
                    </View>
                    <View style={{flex:4}}>
                        <Button onPress={()=>true} title="Un Botón" color="blue" accessibilityLabel="Un boton" />
                    </View>
                    <View style={{flex:5}}>
                        <Button onPress={()=>true} title="Un Botón" color="orange" accessibilityLabel="Un boton" />
                    </View>
                </View>
                <View style={styles.content} >
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 26 }}>Scroll me plz</Text>

                        <Text style={{ fontSize: 26 }}>If you like</Text>

                        <Text style={{ fontSize: 26 }}>Scrolling down</Text>

                        <Text style={{ fontSize: 26 }}>What's the best</Text>

                        <Text style={{ fontSize: 26 }}>Framework around?</Text>

                        <Text style={{ fontSize: 30 }}>React Native</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Switch disabled={true} style={{ marginBottom: 10 }} value={false} />
                        <Switch disabled={false} value={true} />
                    </View>
                    <View style={{flex:3}}>
                        <Button onPress={()=>true} title="Un Botón" color="#841584" accessibilityLabel="Un boton" />
                    </View>
                    <View style={{flex:4}}>
                        <Button onPress={()=>true} title="Un Botón" color="blue" accessibilityLabel="Un boton" />
                    </View>
                    <View style={{flex:5}}>
                        <Button onPress={()=>true} title="Un Botón" color="orange" accessibilityLabel="Un boton" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    content:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
});


AppRegistry.registerComponent('ScrollExample1', () => ScrollExample1);


