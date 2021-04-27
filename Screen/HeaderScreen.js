'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import {Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider,Icon,Header } from 'react-native-elements';
function centerImage(){
  return (
      <Image source={require('./../assets/atom.png')} style={{height:40,width:100}} resizeMode="contain"
  resizeMethod="resize" />
    );
}

class HeaderScreen extends Component {
  constructor(props) {
    super(props);
  this._openDrawer=this._openDrawer.bind(this);
    this.state = {};
   
  }
  _openDrawer(){
    this.props.opDrawer();
  }
  render() {
    
    return (
      <View style={styles.container} >
            <Header
                backgroundColor='#def6f8'
                leftComponent={<Icon
              name='menu'
              color='#000'
              onPress={this.props.opDrawer} />}
                centerComponent={centerImage}
                
              />
            <View style={styles.roundCont}>
                          <View style={styles.roundContainer}>
                          <Image source={require('./../assets/information.png')} style={styles.roundImage} />
                          <Text>Know More</Text>
                          </View>
                          <Divider  style={styles.dividerStyle}/>
                          <View style={styles.roundContainer}>
                          <Image source={require('./../assets/education.png')} style={styles.roundImage} />
                             <Text>Faculty</Text>
                          </View>
                          <Divider  style={styles.dividerStyle}/>
                          <View style={styles.roundContainer}>
                          <Image source={require('./../assets/memo.png')} style={styles.roundImage} />
                           <Text>Subscriber</Text>
                          </View>
                          <Divider  style={styles.dividerStyle}/>
                          <View style={styles.roundContainer}>
                          <Image source={require('./../assets/chat.png')} style={styles.roundImage}  />
                           <Text>Faq</Text>

                          </View>
             </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
roundImage:{
    width: 30, 
    height: 30,
    alignSelf:'center'
  },
  container:{
     height:140,
     backgroundColor:'#def6f8'
  },
  roundCont:{
    flexDirection: 'row',
    width:'100%',
     },
  roundContainer:{
    alignItems:'center',
    width:'25%'
  },
  dividerStyle:{
    width:1,
    height:'60%',
    backgroundColor:'#32a4a0'
  }
});


export default HeaderScreen;
