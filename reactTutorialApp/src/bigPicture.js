import React, { Component } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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
      <View>
        <IndividualPicture picture={this.props.picture} />
        <Text style={styles.description}>
          {this.props.picture.title}
        </Text>
      </View>
    )
  }
}

export default BigPictureContainer

const styles = StyleSheet.create({
  picture: {
    width: 290,
    height: 150
  },
  description: {
    fontSize: 10,
    margin: 10,
    textAlign: 'center',
  }
});
