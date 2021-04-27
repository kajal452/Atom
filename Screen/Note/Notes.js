'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {Constant} from '../Constant';
import axios from 'axios';
class Notes extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Text>Notes Tab</Text>
      <Image
          source={require('../../assets/background.png')}
          style={styles.bottomImage}
          imageStyle={styles.bottomImages}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		},
    bottomImage:{
  width: "100%",
  height: 185,
  padding: 20,
  paddingVertical: 40,
  position: 'absolute',
  bottom:0
},
bottomImages:{
  resizeMode: "cover",
  alignSelf: "flex-end"
}
});


export default Notes;