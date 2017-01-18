import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
    render() {

        let last;

        if (this.props.index > 0) {
            last = (
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>LAST</Text>
                </TouchableHighlight>
            )
        }

        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>NEXT</Text>
                </TouchableHighlight>
                {last}
            </View>
        )
    }
}

MyScene.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};