/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import  MyScene from './MyScene'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Button
} from 'react-native';

export default class helloRN extends Component {
    render() {
        return (
        <Navigator
            initialRoute={{title: 'My Initial Scene', index: 0}}
            renderScene={(route, navigator) =>
                <MyScene title={route.title}
                    // Function to call when a new scene should be displayed
                         onForward={ () => {
                             const nextIndex = route.index + 1;
                             navigator.push({
                                 title: 'Scene ' + nextIndex,
                                 index: nextIndex,
                             });
                         }}

                    // Function to call to go back to the previous scene
                         onBack={() => {
                             if (route.index > 0) {
                                 navigator.pop();
                             }
                         }}
                />
            }
        />
        < Button
        title = "Learn More"
        color = "#841584"
        accessibilityLabel = "Learn more about this purple button"
            / >
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('helloRN', () => helloRN);
