'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text
} from 'react-native';
import TestScreen from './TestScreen';
import {Constant} from '../Constant';
import axios from 'axios';
class CompletedTest extends Component {
  constructor(props) {
    super(props);
  
    this.state = {data:null};
  }
  async componentDidMount(){
  let res= await axios.get("https://api.github.com/users");
    this.setState({data:res.data});
  }
  render() {
    return (
       <View style={styles.container}>
       <Text style={{alignSelf:'center',color:'#0f597d',fontSize:17,fontWeight: 'bold',}}>Pediatrics & Neonatology</Text>
       {this.state.data  &&
            <FlatList
              horizontal={false}
              data={this.state.data}
              renderItem={({ item }) => <TestScreen ttitle={item.login} screenname='C' screencolor='#ebfad1'/>}
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
  container:{
    flex:1,

  },
bottomImage:{
  width: "100%",
  height: 185,
  padding: 20,
  paddingVertical: 40,
  position: 'absolute',
  bottom:0
},
bottomImages:{
  resizeMode: "cover",
  alignSelf: "flex-end"
}
});


export default CompletedTest;