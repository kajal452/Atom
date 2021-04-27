'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class CategoryComponent extends Component {
    render() {
    return (
      <View >
      <TouchableOpacity
        onPress={this.props.call}
      >
      	<View style={[styles.square,{ backgroundColor: this.props.catcolor ?this.props.catcolor:'red'}]} >
            <Text  style={styles.squareText}>{this.props.cattitle}</Text>
             <Text  style={[styles.squareText,{fontSize:8}]}>{this.props.catcontent ? this.props.catcontent : ''}</Text>
             
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 square:{
      width:100,
      height:100,
     alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
      marginLeft:5,
  },
  squareText:{
      color:'#fff',
  },
});


export default CategoryComponent;