/**
 * Created by yons on 2017/3/11.
 */
import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.navigitorButton} onPress={this.props.onBack}>
                    <Text>
                        prev
                    </Text>
                </TouchableHighlight>
                <Text style={styles.text}>
                    current scene:{this.props.title}
                </Text>
                <TouchableHighlight style={styles.navigitorButton} onPress={this.props.onForward}>
                    <Text>
                        next
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
    navigitorButton: {
        height:20,
        fontSize: 20,
        textAlign: 'center',

        marginTop: 30,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginTop:30,
    },


});

