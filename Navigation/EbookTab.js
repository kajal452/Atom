import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ebooks from '../Screen/Ebook/Ebooks';
import FreeEbook from '../Screen/Ebook/FreeEbook';
import PaidEbook from '../Screen/Ebook/PaidEbook';

const EbookTop = createMaterialTopTabNavigator();
export  const EbookTab = () => {
	return (
    <EbookTop.Navigator
      initialRouteName="Ebooks"
      tabBarOptions={{
         activeTintColor: 'black',
        inactiveTintColor:'#1ca6d1',
        labelStyle: { fontSize: 8 },
        style: {height:38, backgroundColor: '#ffffff' },
      }}
    >
      <EbookTop.Screen
        name="Ebooks"
        component={Ebooks}
        options={{ tabBarLabel: 'All' }}
      />
      <EbookTop.Screen
        name="FreeEbook"
        component={FreeEbook}
        options={{ tabBarLabel: 'Free' }}
      />
      <EbookTop.Screen
        name="PaidEbook"
        component={PaidEbook}
        options={{ tabBarLabel: 'Paid' }}
      />
    </EbookTop.Navigator>
  );
}