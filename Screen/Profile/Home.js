'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import axios from 'axios';
import { Constant } from '../Constant';
import HeaderScreen from '../HeaderScreen';
import CategoryComponent from './CategoryComponent';
import jsonData from '../api/categories.json';
class Home extends Component {
  constructor(props) {
    super(props);
    this.op1Drawer = this.op1Drawer.bind(this);
    this.state = { data: null, user: '', username: '' };
  }

  async componentDidMount() {
    //  let duser=await AsyncStorage.multiGet(['@userid','username']);
    // let res= await axios.get(Constant.BASE_URL+Constant.CATEGORY);
    // let res = await axios.get("https://api.github.com/users");
    //  this.setState({data:res.data,user:duser[0][1],username:duser[1][1]});
    this.setState({ data: jsonData, user: "kajal Kumar", username: "Kajal7050" });
  }
  async courseDetail($id) {
    try {

      // await AsyncStorage.setItem('@catId', $id.toString());
      this.props.navigation.navigate('CourseDetail', { catId: 4 });
    } catch (error) {
      console.log('error saving data', error);
    }
  }
  op1Drawer() {
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/background.png')}
          style={styles.bottomImage}
          imageStyle={styles.bottomImages}
        />
        <HeaderScreen opDrawer={this.op1Drawer} />
        <View style={{ alignSelf: 'flex-start', marginLeft: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Hello {this.state.username}</Text>
          <Text style={{ marginTop: 8 }}>Welcome To</Text>
          <Text style={{ fontSize: 15 }}>ADVANCED TRAINING INSTITUTE OF</Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: 'red' }}>MEDICAL SCIENCE</Text>
        </View>
        {this.state.data &&
          <FlatList
            horizontal={false}
            data={this.state.data}
            renderItem={({ item }) => (
              <CategoryComponent cattitle={item.title} catcolor={item.color} catcontent={item.content} call={this.courseDetail.bind(this, item.id)} />
            )}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={{ marginTop: '1%' }}
          />

        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
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


export default Home;