import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Description from './description';
import BigPicture from './bigPicture';

class Home extends Component {
   state = {
      myState: 'This is my state'
   }

   render() {
    return (
      <View style={styles.container}>
        <Description />
        <BigPicture />
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
    backgroundColor: 'powderblue'
  }
});
