'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.screen = this.props.screenname;
    this.primaryColor = '#000';
    this.secondaryColor = '#000';
    if (this.props.screenname == 'A') {
      this.activeTest = true;
      this.primaryColor = '#0b556d';
      this.secondaryColor = '#6d9b11';
    }
    else if (this.props.screenname == 'M') {
      this.missedTest = true;
      this.secondaryColor = 'red';
    }
    else if (this.props.screenname == 'C') {
      this.completeTest = true;
    }
    this.state = {};

  }

  render() {

    return (
      <View style={[styles.container, { backgroundColor: this.props.screencolor }]}>
        <View style={styles.boxShado}>
          <View style={{ flex: 1, marginTop: 5 }}>
            <MaterialCommunityIcons name="lead-pencil" size={20} color='#000' />
          </View>
          <View style={{ flex: 10, flexDirection: 'column', marginHorizontal: 3 }}>
            <Text style={{ color: this.primaryColor, fontSize: 17 }}>{this.props.ttitle}</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: this.secondaryColor, fontSize: 10, marginLeft: 4, marginHorizontal: 5 }}>
                {this.activeTest ? 'Start Now' : this.completeTest ? 'Completed' : 'Missed'}
              </Text>
              {this.missedTest ? null :
                <AntDesign name='arrowright' size={20} color={this.secondaryColor} />
              }
            </View>
          </View>
          {this.activeTest ?
            <View style={{ flex: 1, marginTop: 15 }}>
              <AntDesign name="right" size={20} color='#000' />
            </View>
            : this.completeTest ? <Text style={{ color: 'red' }}>View Result</Text> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 6,
    marginHorizontal: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 5,
  },
  squareText: {
    color: '#fff',
  },
  boxShado: {
    padding: 12,
    flex: 1,
    flexDirection: 'row',
  },
});


export default TestScreen;