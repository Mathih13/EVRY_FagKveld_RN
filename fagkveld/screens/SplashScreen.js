import React from 'react';
import {StyleSheet, ActivityIndicator, StatusBar, View, Image} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import firebase from '../firebase'


export default class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        // Listen for an authentication from firebase
        // Update any new data from Facebook, then move to next screen
        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                firebase.database().ref('/users/' + user.uid).set({
                    username: user.displayName,
                    email: user.email,
                    createdAt: user.createdAt ? user.createdAt : null,
                    lastLogin: user.lastLoginAt ? user.lastLoginAt : null,
                    photoURL: user.photoURL,
                });

                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'MainNavigator' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
            else this.props.navigation.navigate('Login');
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
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