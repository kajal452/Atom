'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Constant} from '../Constant';
import axios from 'axios';
class Logout extends Component {
  render() {
    return (
      <View >
      <Text>Logout Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{alignItems: 'center',}
});


export default Logout;