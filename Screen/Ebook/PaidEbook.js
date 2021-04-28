'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View, FlatList,
  Image,
  Text
} from 'react-native';
import EbookScreen from './EbookScreen';
import { Constant } from '../Constant';
import axios from 'axios';
class PaidEbook extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }
  async componentDidMount() {
    let res = await axios.get("https://api.github.com/users");
    // let res= await axios.get(Constant.BASE_URL+"ebooks");
    this.setState({ data: res.data });
    console.log(res.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: 'center', color: '#0f597d', fontSize: 17, fontWeight: 'bold', }}>Pediatrics & Neonatology</Text>
        {this.state.data &&
          <FlatList
            horizontal={false}
            data={this.state.data}
            renderItem={({ item }) => <EbookScreen etitle={item.login} bcolor={item.color} etype={item.type} />}
            keyExtractor={item => item.id}

          />
        }
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
  container: {

    flex: 1,
  },
  bottomImage: {
    width: "100%",
    height: 185,
    padding: 20,
    paddingVertical: 40,
    position: 'absolute',
    bottom: 0
  },
  bottomImages: {
    resizeMode: "cover",
    alignSelf: "flex-end"
  }
});


export default PaidEbook;