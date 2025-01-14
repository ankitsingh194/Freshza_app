import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Searchpage, Person , Home } from '../screens';
import {Ionicons} from '@expo/vector-icons';
import { COLORS} from '../constants/index';

const Tab = createBottomTabNavigator();

const screensOptions = {
    tabBarShowlabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle: {
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:70,
    },
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screensOptions}>
        <Tab.Screen name="Home" component={Home}
        options={{
            tabBarIcon:({focused}) => {
                return ( <Ionicons name={focused ? "home" : "home-outline"} size={24}
                color={focused ? COLORS.primary : COLORS.gray2} />
                );
            }
        }}
        
        />
        <Tab.Screen name="Search" component={Searchpage} 
         options={{
            tabBarIcon:({focused}) => {
                return ( <Ionicons name={"search-sharp"} size={24}
                color={focused ? COLORS.primary : COLORS.gray2} />
                );
            }
        }}
         />
        <Tab.Screen name="profile" component={Person} 
         options={{
            tabBarIcon:({focused}) => {
                return ( <Ionicons name={focused ? "person" : "person-outline"} size={24}
                color={focused ? COLORS.primary : COLORS.gray2} />
                );
            }
        }}
        />
      
    </Tab.Navigator>
  )
}

export default BottomNavigation