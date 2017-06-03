/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './src/store';
import Counter from './src/native/containers/Counter';

export default class native extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider >
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

AppRegistry.registerComponent('native', () => native);
