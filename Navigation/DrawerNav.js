import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from '../Screen/Profile/AboutUs';
import Logout from '../Screen/Profile/Logout';
import Faq from '../Screen/Profile/Faq';
import TermsOfUse from '../Screen/Profile/TermsOfUse';
import Home from '../Screen/Profile/Home';
import CourseDetail from '../Screen/Profile/CourseDetail';
import ContactUs from '../Screen/Profile/ContactUs';
import Subscription from '../Screen/Profile/Subscription';
const Drawer = createDrawerNavigator();

export  const DrawerNav =({navigation,route,props})=>{
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  	return (
    <Drawer.Navigator initialRouteName="Home"
          drawerType={isLargeScreen ? 'permanent' : 'back'}
          drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
          }}
       overlayColor="transparent"
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home',title:'Home' ,headerShown:false}}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{ drawerLabel: 'Faq',title:'Faq' }}
      />
      <Drawer.Screen
        name="TermsOfUse"
        component={TermsOfUse}
        options={{ drawerLabel: 'TermsOfUse',title:'Terms Of Use' }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ drawerLabel: 'AboutUs',title:'About Us' }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ drawerLabel: 'ContactUs',title:'Contact Us' }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ drawerLabel: 'Logout' ,title:'Logout'}}
      />
      <Drawer.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{ drawerLabel: 'CourseDetail' ,title:'CourseDetail',headerShown:false}}
      />
      <Drawer.Screen
        name="Subs"
        component={Subscription}
        options={{ drawerLabel: 'Subscription' ,title:'Subscription1'}}
      />
    </Drawer.Navigator>
  );
}