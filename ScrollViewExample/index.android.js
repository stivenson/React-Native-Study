import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <div style={{textAlign: 'center'}}>
                    <Text style={{ fontSize: 16 }}>Scroll me plz</Text><br/>
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Text style={{ fontSize: 16 }}>If you like</Text><br/>
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Text style={{ fontSize: 16 }}>Scrolling down</Text><br/>
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Text style={{ fontSize: 16 }}>What's the best</Text><br/>
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Text style={{ fontSize: 16 }}>Framework around?</Text><br/>
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Image source={require('./assets/img/favicon.png')} />
                    <Text style={{ fontSize: 18 }}>React Native</Text><br/><br/>
                </div>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('ScrollView',() => IScrolledDownAndWhatHappenedNextShockedMe);


