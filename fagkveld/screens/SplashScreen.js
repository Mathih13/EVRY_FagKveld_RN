import React from 'react';
import {StyleSheet, ActivityIndicator, View, Image} from 'react-native';
import firebase from '../firebase'


export default class SplashScreen extends React.Component {
    componentDidMount() {
        // Listen for an authentication from firebase
        // Update any new data from any sign-in action, then move to next screen
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            if (user != null) {
                firebase.database().ref('/users/' + user.uid).set({
                    username: user.displayName,
                    email: user.email,
                    createdAt: user.createdAt ? user.createdAt : null,
                    lastLogin: user.lastLoginAt ? user.lastLoginAt : null,
                    photoURL: user.photoURL,
                });
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Login');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 100, margin: 20 }} source={require('../assets/logo.png')}/>
                <ActivityIndicator size="large" color="#fff" />
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