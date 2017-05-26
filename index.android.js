/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry} from 'react-native';

import { Provider } from 'react-redux';

import configureStore from './configureStore';

import App from './app'

const store = configureStore();

const Test_Login = () => (
  <Provider store={store}>
    <App />  
  </Provider>
)

AppRegistry.registerComponent('Test_Login', () => Test_Login);
