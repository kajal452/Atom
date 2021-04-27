'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {MaterialCommunityIcons,FontAwesome,AntDesign} from '@expo/vector-icons';
class EbookScreen extends Component {
  constructor(props) {
    super(props);
      this.isFree=true;
      this.freeColor='#fc0103';
      if (this.props.etype=='P') {
        this.isFree=false;
        this.freeColor='green';
      }
    this.state = {};
  }
  render() {
    return (
      		<View style={styles.container}>
            		<View style={styles.boxShado}>
                			<View style={{flex:1,marginTop:5}}>
                				<MaterialCommunityIcons name="lead-pencil" size={20} color='#000' />
                			</View>
                			<View style={{flex:10,flexDirection:'column',marginHorizontal:3}}>
                				  <Text style={{color:'#0b556d',fontSize:14}}>{this.props.etitle}</Text>
                  				<View style={{flexDirection:'row'}}>
                    					<Text style={{color:'#6d9b11',fontSize:10,marginLeft:4,marginHorizontal:5}}>{this.props.epage}25 Pages</Text>
                    					<AntDesign name='arrowright' size={20} color='#6d9b11' />
                    					<Text style={{backgroundColor:this.freeColor,borderRadius:7,color:'#fff',padding:4,height:18,fontSize:8,width:27}}>{this.isFree ? 'Free': 'Paid'}</Text> 
                  				</View>
                			</View>
                			<View style={{flex:1,marginTop:15}}>
                				<AntDesign name="right" size={20} color='#000'/>
                			</View>
            		</View>
      	     </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection:'column',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor:'#a7a7a730',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 2,
    borderRadius:8,
    },
  squareText:{
      color:'#fff',
  },
  boxShado:{
    padding:12,
    flex:1,
    flexDirection:'row',
  },
});


export default EbookScreen;