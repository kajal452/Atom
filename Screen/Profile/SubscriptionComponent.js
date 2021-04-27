'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class SubscriptionComponent extends Component {
  render() {
    return (
      <View style={{width:'30%',marginLeft:'0.5%'}}>
      	 <View style={[styles.square,{ backgroundColor: this.props.scolor ? this.props.scolor : '#25aae3'}]} >
         <Text  style={styles.squareText}>{this.props.stitle}</Text>
          <Text  style={[styles.squareText,{fontSize:8}]}>(DR/SWT/GT/MT)</Text>
         <Text  style={styles.squareText}>Rs:1499</Text>
          <Text  style={[styles.squareText,{fontSize:8}]}>MD/MS</Text>
          <Text  style={styles.squareText}>NEET PG</Text>
        </View>
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
    borderRadius:10,
      marginLeft:5,
  },
  squareText:{
      color:'#fff',
  },
});


export default SubscriptionComponent;