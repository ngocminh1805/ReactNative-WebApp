import React from 'react';
// import ReactDOM from 'react-dom';
import {AppRegistry} from 'react-native';
import './index.css';
import App from './App';
import AsyncStorage from '@react-native-community/async-storage';
// import Images from './component/Images';
// import HelloWorld from './component/HelloWorld';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <HelloWorld />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import {name as appName} from './app.json';
// AsyncStorage.setItem('type_app', 'mobile');

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
  initialProps: {type_app: 'web'},
});
