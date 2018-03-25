import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Description extends Component {
   state = {
      myState: 'This is my state'
   }

   render() {
    return (
      <Text style={styles.welcome}>
        Welcome to your first Iphone App!
      </Text>      
    )
  }
}
export default Description

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'skyblue'
  }
});
