import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';

class BigPicture extends Component {
   state = {
      // cezanne's apples
      uri: 'https://i.pinimg.com/originals/18/59/bc/1859bca2c28882ba0d366a11898b6a91.jpg'
   }

   render() {
    return (
      <Image source={this.state} style={styles.picture}/>
    )
  }
}
export default BigPicture

const styles = StyleSheet.create({
  picture: {
    width: 290,
    height: 150
  }
});
