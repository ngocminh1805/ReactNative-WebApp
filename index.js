/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';
import AsyncStorage from '@react-native-community/async-storage';

const  AppWrapper = (props) => {
    return <App {...{
      ...props,
      type_app: "mobile",
    }}/>;
  };

// AsyncStorage.setItem('type_app', 'mobile');
AppRegistry.registerComponent(appName, () => AppWrapper);

