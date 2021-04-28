'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class SubcategoryComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.call}
        >
          <View style={[styles.square, { backgroundColor: this.props.subcatcolor ? this.props.subcatcolor : 'red' }]} >
            <Image source={require('../../assets/image_6.png')} style={{ alignSelf: 'center', height: 25, width: 30 }} resizeMode="contain"
              resizeMethod="resize" />
            <Text style={[styles.squareText, { fontSize: 10, textAlign: 'center' }]}>{this.props.subcattitle}</Text>
            <Text style={[styles.squareText, { fontSize: 7, textAlign: 'center', minHeight: 25 }]}>{this.props.subcatcontent ? this.props.subcatcontent : ''}</Text>

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 110,
    height: 100,
    alignItems: 'center',
    padding: 9,
    borderRadius: 5,
    marginLeft: 5,

  },
  squareText: {
    color: 'black',

  },
  container: {
    alignItems: 'center',
  },
});


export default SubcategoryComponent;