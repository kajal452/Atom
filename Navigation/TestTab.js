import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveTest from '../Screen/Test/ActiveTest';
import CompletedTest from '../Screen/Test/CompletedTest';
import MissedTest from '../Screen/Test/MissedTest';


const TestTop = createMaterialTopTabNavigator();

export const TestTab = () => {
  return (
    <TestTop.Navigator
      initialRouteName="ActiveTest"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#1ca6d1',
        labelStyle: { fontSize: 8 },
        style: { height: 38, backgroundColor: '#ffffff' },
      }}
    >
      <TestTop.Screen
        name="ActiveTest"
        component={ActiveTest}
        options={{ tabBarLabel: 'Active', title: 'Active' }}
      />
      <TestTop.Screen
        name="CompletedTest"
        component={CompletedTest}
        options={{ tabBarLabel: 'Completed', title: 'Completed' }}
      />
      <TestTop.Screen
        name="MissedTest"
        component={MissedTest}
        options={{ tabBarLabel: 'Missed', title: 'Missed' }}
      />
    </TestTop.Navigator>
  );
}