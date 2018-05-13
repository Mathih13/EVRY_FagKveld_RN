import React from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            mode: 'modal'
        },
        Login: {
            screen: LoginScreen,
        },
        Splash: {
            screen: SplashScreen,
            mode: 'modal'
        }

    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
        mode: 'modal'
    })

