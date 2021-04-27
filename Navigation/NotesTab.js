import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notes from '../Screen/Note/Notes';

const NoteTop = createMaterialTopTabNavigator();

export  const NotesTab = () =>{
	return (
    <NoteTop.Navigator
      initialRouteName="Notes"
      tabBarOptions={{
         activeTintColor: 'black',
        inactiveTintColor:'#1ca6d1',
        labelStyle: { fontSize: 8 },
        style: {height:38, backgroundColor: '#ffffff' },
      }}
    >
      <NoteTop.Screen
        name="Notes"
        component={Notes}
        options={{ tabBarLabel: 'All' }}
      />
 
    </NoteTop.Navigator>
  );
}