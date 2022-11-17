import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/EvilIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import Home from '../Home';
import Profile from '../ProfileUser';
import EventList from '../EventList';

const RoutesTabNavigation = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#ed3b3b'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="ListEventTab"
        component={EventList}
        options={{
          tabBarLabel: 'Eventos',
          tabBarIcon: ({color}) => (
            <EvilIcons
              name="calendar"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <EvilIcons
              name="user"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RoutesTabNavigation;
