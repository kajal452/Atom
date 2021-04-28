'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import axios from 'axios';
import { Constant } from '../Constant';
import VideoScreen from './VideoScreen';
class CompletedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  async componentDidMount() {

    // let res= await axios.get(Constant.BASE_URL+Constant.VIDEO);
    let res = await axios.get("https://api.github.com/users");
    this.setState({ data: res.data });
  }
  async videoDetail(id, url, type) {
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
        <Text style={{ alignSelf: 'center', color: '#0f597d', fontSize: 17, fontWeight: 'bold', }}>DM PEDIATRICS & NEONATOLOGY</Text>

        {this.state.data &&
          <FlatList
            horizontal={false}
            data={this.state.data}
            renderItem={({ item }) => <VideoScreen vtitle={item.name} vtype="P" call={this.videoDetail.bind(this, item.id, item.url, item.type)} />}
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
    backgroundColor: '#ffffff'
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


export default CompletedVideo;