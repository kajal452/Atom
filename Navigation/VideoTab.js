import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Videos from '../Screen/Video/Videos';
import FreeVideo from '../Screen/Video/FreeVideo';
import CompletedVideo from '../Screen/Video/CompletedVideo';
import PausedVideo from '../Screen/Video/PausedVideo';

const VideoTop = createMaterialTopTabNavigator();

export  const VideoTab = () =>{
	return (
    <VideoTop.Navigator
      initialRouteName="Videos"
      tabBarOptions={{
         activeTintColor: 'black',
        inactiveTintColor:'#1ca6d1',
        labelStyle: { fontSize: 8 },
        style: {height:38, backgroundColor: '#ffffff' },
      }}
    >
      <VideoTop.Screen
        name="Videos"
        component={Videos}
        options={{ tabBarLabel: 'All',title:'Videos' }}
      />
      <VideoTop.Screen
        name="FreeVideo"
        component={FreeVideo}
        options={{ tabBarLabel: 'Free' ,title:'Free Videos'}}
      />
      <VideoTop.Screen
        name="CompletedVideo"
        component={CompletedVideo}
        options={{ tabBarLabel: 'Completed',title:'Complete Videos' }}
      />
       <VideoTop.Screen
        name="PausedVideo"
        component={PausedVideo}
        options={{ tabBarLabel: 'Paused',title:'Paused Video' }}
      />
    </VideoTop.Navigator>
  );
}
