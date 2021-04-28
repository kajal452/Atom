import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import { DrawerNav } from './DrawerNav';
import { BottomNav } from './BottomNav';
import Subscription from '../Screen/Profile/Subscription';
import VideoDetail from '../Screen/Video/VideoDetail';
import TestDetail from '../Screen/Test/TestDetail';
import VideoExample from '../Screen/Video/VideoExample';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#def6f8',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="TestDetail" component={TestDetail} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="VideoDetail" component={VideoDetail} />
        <Stack.Screen name="VideoExample" component={VideoExample} />
        <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} />
        <Stack.Screen name="Bottom" component={BottomNav} options={({ route }) => ({ headerTitle: getHeaderTitle(route), })} />
        <Stack.Screen name="Subscription" component={Subscription} options={{ title: 'Subscription' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function getHeaderTitle(route) {

  const routeName = route.state
    ? route.state.routes[route.state.index].name : route.params?.screen || 'Drawer';

  switch (routeName) {
    case 'Drawer':
      return 'Home';
    case 'VideoTab':
      return 'Book';
    case 'NotesTab':
      return 'Notes';
    case 'TestTab':
      return 'Start Test';
    case 'EbookTab':
      return 'Ebook Question Bank';
    default:
      return routeName;
  }
}

/*

<Stack.Screen name="Drawer" component={DrawerNav}  options={({ route,navigation}) => ({    headerTitle: getHeaderTitle(route), headerLeft: () => (
           <Icon
                name='menu'
                type='entypo'
                color='#000'
                onPress={() => console.log(navigation)}
            />
          ),})}/>
*/