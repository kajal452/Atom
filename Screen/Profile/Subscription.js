'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import SubscriptionComponent from './SubscriptionComponent';
import {Constant} from '../Constant';
import axios from 'axios';
class Subscription extends Component {
  constructor(props) {
    super(props);
  
    this.state = {data:null,checked:true,unchecked:false};
  }
  async componentDidMount(){
    console.log("MY URL"+Constant.BASE_URL);
  let res= await axios.get(Constant.BASE_URL+Constant.CATEGORY);
    this.setState({data:res.data});
  }
  render() {
    console.log(this.state.data);
    return (
      <View >
                <CheckBox
                  title='Individual Plan'
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={this.state.checked}
                />

          <CheckBox
            title='Combo Plan'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.unchecked}
          />

      {this.state.data  &&
            <FlatList
              horizontal={false}
              data={this.state.data}
              renderItem={({ item }) => <SubscriptionComponent stitle={item.name} scolor={item.color} />}
              keyExtractor={item => item.id}
              numColumns={3}
              columnWrapperStyle={{marginTop:'0.7%'}}
               />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default Subscription;