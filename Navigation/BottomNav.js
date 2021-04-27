import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,Feather} from '@expo/vector-icons';
import {VideoTab} from './VideoTab';
import {EbookTab} from './EbookTab';
import {TestTab} from './TestTab';
import {NotesTab} from './NotesTab';

const Bottom = createBottomTabNavigator();

export  const BottomNav = ({navigation,route})=>{
	return (
    <Bottom.Navigator
      initialRouteName="EbookTab"
      activeColor="#1ca6d1"
      labeled='true'
      >
      <Bottom.Screen
        name="VideoTab"
        component={VideoTab}
        options={{
          title:'Video',
          tabBarLabel: 'Class',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb-on-outline" color={color} size={26} />
          ),
        }}
      />
      <Bottom.Screen
        name="NotesTab"
        component={NotesTab}
        options={{
          title:'Notes',
          tabBarLabel: 'Notes',
          tabBarIcon: ({ color }) => (
            <Feather name="book" color={color} size={26} />
          ),
        }}
      />
      <Bottom.Screen
        name="EbookTab"
        component={EbookTab}
        options={{
          tabBarBadge:true,
          title:'Ebook',
          tabBarLabel: 'QuestionBank',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Bottom.Screen
        name="TestTab"
        component={TestTab}
        options={{
          title:'Test',
          tabBarLabel: 'Test',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />      
    </Bottom.Navigator>
  );
}