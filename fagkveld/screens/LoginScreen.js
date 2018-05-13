import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base'
import firebase from '../firebase'

export default class LoginScreen extends React.Component {


    async loginWithFacebook() {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
            ('1823147287980509', { permissions: ['public_profile'] })

        if (type === 'success') {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);

            firebase.auth().signInAndRetrieveDataWithCredential(credentials).catch(error => console.log(error));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    rounded
                    full
                    style={{ margin: 15, backgroundColor: '#3b5998' }}
                    onPress={() => this.loginWithFacebook()}
                >
                    <Text>Login With Facebook</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});