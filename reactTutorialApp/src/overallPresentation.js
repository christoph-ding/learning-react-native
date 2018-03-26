import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Description from './description';
import BigPicture from './bigPicture';

class BigButton extends Component {
  render() {
    return (
      <Button onPress={this.props.action} title="More Cezanne"/>
    )
  }
}

class Home extends Component {
   state = {
    pictureIndex: 0
   }

   images = [
    {title: 'Large Bathers', 
     uri: 'https://uploads1.wikiart.org/images/paul-cezanne/large-bathers-1900.jpg'},
    {title: 'Basket of Apples',
     uri: 'https://uploads0.wikiart.org/images/paul-cezanne/still-life-with-bottle-and-apple-basket-1894.jpg!HalfHD.jpg'},
    {title: 'Mt. Stainte-Victoire',
     uri: 'https://uploads5.wikiart.org/images/paul-cezanne/mont-sainte-victoire-3.jpg!HalfHD.jpg'},
    {title: 'Mont Sainte-Victoire and the Viaduct of the Arc River Valley',
     uri: 'https://www.metmuseum.org/toah/images/hb/hb_29.100.64.jpg'},
    {title: 'Le golfe de Marseille vu de l`Estaque',
     uri: 'http://www.artdreamguide.com/_arti/cezanne/img/612.jpg'},
    {title: 'Still Life with Plaster Cast',
     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWkoqR4NkuzIS-7im-1_LsEzmjuVbIPKSfpc-VHsK4Le5aRf__A'},
   ]

   goToNextImage = () => {
      let nextIndex;

      if (this.state.pictureIndex === this.images.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = this.state.pictureIndex + 1
      }

      this.setState({pictureIndex: nextIndex})
   }

   render() {
    let currentImage = this.images[this.state.pictureIndex]

    return (
      <View style={styles.container}>
        <Description />
        <BigPicture picture={currentImage}/>
        <BigButton action={this.goToNextImage}/>
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
