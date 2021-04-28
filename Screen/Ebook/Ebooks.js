'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text
} from 'react-native';
import EbookScreen from './EbookScreen';
import { Constant } from '../Constant';
import axios from 'axios';
import jsonData from '../api/ebooks.json';
class Ebooks extends Component {

  constructor(props) {
    super(props);

    this.state = { data: null };
  }
  async componentDidMount() {
    // let res = await axios.get("https://api.github.com/users");
    // let res= await axios.get(Constant.BASE_URL+"ebooks");
    this.setState({ data: jsonData });
  }
  async ebookDetail(id, url, type) {
    try {

      //await AsyncStorage.setItem('@catId', id.toString());
      this.props.navigation.navigate('VideoDetail', { catId: id, url: url, type: type });
    } catch (error) {
      console.log('error saving data', error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: 'center', color: '#0f597d', fontSize: 17, fontWeight: 'bold', }}>Pediatrics & Neonatology</Text>
        {this.state.data &&
          <FlatList
            horizontal={false}
            data={this.state.data}
            renderItem={({ item }) => <EbookScreen etitle={item.title} etype={item.type} epage={item.page} />}
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


export default Ebooks;