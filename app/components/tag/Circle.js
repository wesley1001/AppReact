/**
 * Created by lyan2 on 16/8/20.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let touchableProps = {};
        if (!this.props.disabled) {
            touchableProps.onPress = this.props.onPress;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }

        let size = this.props.size ? this.props.size : 12;

        return (
            <TouchableOpacity {...touchableProps} testID={this.props.testID} style={[{height: size, width: size}]}>
                <View style={[{backgroundColor: '#fff', height: size, width: size, borderRadius: size}]}>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
});