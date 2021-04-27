'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import {Constant} from '../Constant';
import axios from 'axios';
import { Video } from 'expo-av';
import VideoScreen from './VideoScreen';
import { Card, Icon } from 'react-native-elements'

class PausedVideo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {data:null,url:''};
    
  }
 async componentDidMount(){
     let res= await axios.get(Constant.BASE_URL+Constant.VIDEO);
    this.setState({data:res.data});
  }
  async videoDetail($id,$url,$type){
     try{
      
        //await AsyncStorage.setItem('@catId', $id.toString());
        this.props.navigation.navigate('VideoDetail',{catId:$id,url:$url,type:$type});
    }catch(error){
      console.log('error saving data',error);
    }
  }
  render() {
    
    return (
      <View style={styles.container}>
      <Text style={{alignSelf:'center',color:'#0f597d',fontSize:17,fontWeight: 'bold',}}>DM PEDIATRICS & NEONATOLOGY</Text>
         <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            
            useNativeControls={true}
            style={{ height:180 }}
            />
            <Card containerStyle={{padding:0,margin:0}} wrapperStyle={{margin:0,paddingBottom:5}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{marginHorizontal:9,color:'#000',fontSize:14,fontWeight: 'bold',}}>DM PEDIATRICS & NEONATOLOGY</Text>
          <Text style={{paddingLeft:40}}>INR 199</Text>
          </View>
          <View style={{flexDirection:'row',paddingTop:5}}>
          
          <Icon
              iconStyle={{marginLeft:10,}}
              color='darkgray'
               size={20}
                name='md-time'
                type='ionicon'
                 onPress={() => console.log('hello')} />
          <Text style={{marginLeft:4,color:'darkgray'}}>12.40</Text>
           <Icon
              iconStyle={{marginLeft:8,}}
              size={20}
              name='eyeo'
              type='antdesign'
              color='darkgray'
              onPress={() => console.log('hello')} />
          <Text style={{marginHorizontal:4,color:'darkgray'}}>52</Text>

            <Text style={{paddingHorizontal:5,backgroundColor:'#49e535',borderRadius:5,marginLeft:147,}}>Buy Now</Text>
          </View>
      </Card>
        {this.state.data  &&
            <FlatList
              horizontal={false}
              data={this.state.data}
              renderItem={({ item }) => <VideoScreen vtitle={item.name} vtype={item.type} call={this.videoDetail.bind(this,item.id,item.url,item.type)} />}
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


export default PausedVideo;