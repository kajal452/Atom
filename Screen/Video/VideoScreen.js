'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.isFree = true;
    this.freeColor = '#fc0103';
    if (this.props.vtype == 'P') {
      this.isFree = false;
      this.freeColor = 'green';
    }
    this.state = {};
    console.log(this.props.vtype);
  }
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.call}
        >
          <View style={styles.boxShado}>
            <View style={{ flex: 2, }}>
              <Image source={require('../../assets/youtube.png')} style={{ height: '100%', width: '100%' }} />
            </View>
            <View style={{ flex: 10, flexDirection: 'column', marginHorizontal: 8 }}>
              <Text style={{ color: '#0b556d', fontSize: 14 }}>{this.props.vtitle}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#6d9b11', fontSize: 10, marginLeft: 4, marginHorizontal: 5 }}> min           Full Video</Text>

                <Text style={{ backgroundColor: this.freeColor, borderRadius: 7, color: '#fff', padding: 4, height: 18, fontSize: 8, width: 27 }}>{this.isFree ? 'Free' : 'Paid'}</Text>
                <Text style={{ fontSize: 10, marginLeft: 4, marginHorizontal: 5 }}>{this.isFree ? 'Free only 5 min' : ''}</Text>
              </View>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: 4,
    backgroundColor: '#f6f6f6',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    elevation: 5,
    borderRadius: 8,

  },
  squareText: {
    color: '#fff',
  },
  boxShado: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
});


export default VideoScreen;