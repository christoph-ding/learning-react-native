import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';

class IndividualPicture extends Component {
   render() {
    return (
      <Image source={this.props.picture} style={styles.picture}/>
    )
  }  
}

class BigPictureContainer extends Component {
   render() {
    return (
      <IndividualPicture picture={this.props.picture} />
    )
  }
}

export default BigPictureContainer

const styles = StyleSheet.create({
  picture: {
    width: 290,
    height: 150
  }
});
