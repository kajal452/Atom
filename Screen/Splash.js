'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background_signup.png')} style={styles.backgroundImage}>
          <Text >ADVANCE TRAINING INSTITUTE OF </Text>
          <Text>Medical Sciences</Text>
          <Image source={require('../assets/big_logo.png')} style={{ width: 200, height: 200, }} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',

  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
  }
});


export default Splash;