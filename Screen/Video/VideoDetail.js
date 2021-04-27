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
import {Constant} from '../Constant';
import { Video } from 'expo-av';
import VideoScreen from './VideoScreen';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    console.log('video detail',this);
    this.state = {data:null,id:'',url:'',type:''};
  }
 async componentDidMount(){
 // let duser=await AsyncStorage.multiGet(['@userid','username']);
 // this.setState({data:res.data,user:duser[0][1],username:duser[1][1]});
  let res= await axios.get(Constant.BASE_URL+Constant.VIDEO);
    this.setState({data:res.data,url:this.props.route.params.url,type:this.props.route.params.type});
  }
 
  render() {
    
    return (
      <View style={styles.container}>
      
          <Video
              source={{ uri: this.state.url ? this.state.url : "http://techslides.com/demos/sample-videos/small.mp4"}}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode={Video.RESIZE_MODE_COVER}
              useNativeControls={true}
              usePoster={false}
              posterSource={require('../../assets/atom.png')}
              style={{ height: 200 }}
            />
            <Card containerStyle={{padding:0,margin:0}} wrapperStyle={{margin:0,paddingBottom:5}}>
          <View style={{flexDirection:'row',}}>
          <Text>DM PEDIATRICS & NEONATOLOGY</Text>
          <Text style={{paddingLeft:60}}>INR 199</Text>
          </View>
          <View style={{flexDirection:'row',paddingTop:5}}>
          <Text style={{paddingHorizontal:5}}>Share</Text>
          <Icon
          iconStyle={{paddingHorizontal:5,}}
          size={14}
          name='share'
          type='font-awesome'
          color='darkgray'
          onPress={() => console.log('hello')} />
          <Text style={{marginHorizontal:5}}>Rate</Text>
          <Icon
                iconStyle={{paddingLeft:5,}}
                size={20}
                name='like2'
                type='antdesign'
                color='darkgray'
                onPress={() => console.log('hello')} />
          <Icon
                iconStyle={{paddingLeft:5,}}
                size={20}
                name='dislike2'
                type='antdesign'
                color='darkgray'
                onPress={() => console.log('hello')} />
          <Icon
              iconStyle={{paddingLeft:9,}}
              color='darkgray'
               size={20}
                name='md-time'
                type='ionicon'
                 onPress={() => console.log('hello')} />
          <Text style={{paddingLeft:3,}}>12.40</Text>
           <Icon
              iconStyle={{paddingLeft:5,}}
              size={20}
              name='eyeo'
              type='antdesign'
              color='darkgray'
              onPress={() => console.log('hello')} />
          <Text>52</Text>

            <Text style={{backgroundColor:'#49e535',borderRadius:5,paddingHorizontal:4,marginLeft:4}}>Buy Now</Text>
          </View>
      </Card>
      <Text style={{marginLeft:8,fontSize:18,fontWeight:'bold'}}>1.Introduction</Text>
      <View style={{marginLeft:15}}>
        {this.state.data  &&
            <FlatList
              horizontal={false}
              data={this.state.data}
              renderItem={({ item }) => <View style={{flexDirection:'row'}}>
              <Icon
                iconStyle={{paddingLeft:3,}}
                size={15}
                name='triangle-right'
                type='entypo'
                color='#000'
                onPress={() => console.log('hello')} />
        <Text> {item.name} </Text>
    </View> }
              keyExtractor={item => item.id}
               />
        }
        </View>
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
    
    backgroundColor:'#ffffff'
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


export default VideoDetail;