import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base'


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: '#fff' }}>Open up HomeScreen.js to start working on your component!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5722',
        alignItems: 'center',
        justifyContent: 'center',
    },
});