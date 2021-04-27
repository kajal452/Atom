'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import {Constant} from '../Constant';
import axios from 'axios';
import { Video } from 'expo-av';
import VideoScreen from './VideoScreen';
class FreeVideo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {data:null};
    this.props.navigation.setOptions({ title: 'FreeVideo!' })
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
		flex: 1,
		
	},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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


export default FreeVideo;