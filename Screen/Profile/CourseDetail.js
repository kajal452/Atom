'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  AsyncStorage,
  Image
} from 'react-native';
import { Divider } from 'react-native-elements';
import axios from 'axios';
import { Constant } from '../Constant';
import HeaderScreen from '../HeaderScreen';
import SubcategoryComponent from './SubcategoryComponent';
import jsonData from '../api/subcategories.json';
class CourseDetail extends Component {

  constructor(props) {
    super(props);
    this.op1Drawer = this.op1Drawer.bind(this);
    this.state = { data: null, storage: null };
  }
  async componentDidMount() {
    //  let datas=await AsyncStorage.getAllKeys();
    // let res= await axios.get(Constant.BASE_URL+Constant.SUBCATEGORY);
    let res = await axios.get("https://api.github.com/users");
    this.setState({ data: jsonData });

  }
  async details($id, $title) {
    // let datas=await AsyncStorage.setItem('subcategory',`${$id}`);
    // let datas1=await AsyncStorage.setItem('subtitle',`${$title}`);
    this.props.navigation.navigate('Bottom', { subcat: $id, title: $title });
  }
  op1Drawer() {
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderScreen opDrawer={this.op1Drawer} />
        <Image
          source={require('../../assets/background.png')}
          style={styles.bottomImage}
          imageStyle={styles.bottomImages}
        />
        <Divider style={{ width: '100%', height: 25, backgroundColor: '#32a4a0', marginVertical: 10 }}>
          <Text style={{ marginLeft: 30, marginVertical: 2, color: '#ffffff', fontWeight: 'bold' }}>NEET SS</Text>
        </Divider>

        {this.state.data &&
          <FlatList
            horizontal={false}
            data={this.state.data}
            renderItem={({ item }) => (
              <SubcategoryComponent subcatcontent={item.content} subcatcolor={item.color} subcattitle={item.title} call={this.details.bind(this, item.id, item.title)} />
            )}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={{ marginVertical: '1%', }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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


export default CourseDetail;