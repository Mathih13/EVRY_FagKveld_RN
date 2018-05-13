import React from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';

const MainStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        mode: 'modal'
    }
})

export default createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Splash: {
            screen: SplashScreen,
            mode: 'modal'
        },
        MainNavigator: { screen: MainStack }

    },
    {
        initialRouteName: 'Splash',
        mode: 'modal',
        headerMode: 'none'
    })

