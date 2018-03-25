import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// my components
import Home from './src/overallPresentation';

export default class App extends Component<Props> {
  render() {
    return (
      <Home />
    )
  }
}
