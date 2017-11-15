/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 
 * https://stackoverflow.com/questions/42718973/run-avd-emulator-without-android-studio
 * 1. cek nama avd yang sudah dibuat, masuk ke sdk tool (C:\Users\nurah\AppData\Local\Android\sdk\tools\bin)
 * 2. masuk ke tools , lalu perintahkah "emulator -avd <avdName> Nexus_5X_API_24" 
 */

import React, { Component } from 'react';

import {
  Platform, 
  StyleSheet,
  Text,
  View 
} from 'react-native';

import MainBro from './src/main';


export default class App extends Component {
  render() {
    return (
      <View>
        <MainBro />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
