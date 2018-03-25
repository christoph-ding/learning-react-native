import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {
   state = {
      myState: 'This is my state'
   }

   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to your first Iphone App!
        </Text>
        <Text style={styles.instructions}>
          I'm inside your phone!
        </Text>
        <Text style={styles.instructions}>
          Coming at you from app.js!
        </Text>
      </View>
    )
  }
}
export default Home

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
