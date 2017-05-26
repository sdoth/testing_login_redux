/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Test_Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder='username'
         ></TextInput>
         <TextInput style={styles.textInput}
          placeholder='password'
         ></TextInput>
         <TouchableOpacity
          style={styles.button}
         >
         <Text style={styles.welcome}>Login</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput:{
    
   width:200,
    borderRadius:1,
    borderColor:'#000',
    backgroundColor: '#F5FCFF',
  },
  button:{
    backgroundColor:'#e0e3e6',
    padding:12,
    justifyContent:'center',
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Test_Login', () => Test_Login);
