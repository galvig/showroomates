import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import VideoCall from './VideoCall';
import RoleSelection from './RoleSelection';
import UserProfile from './UserProfile';
import ConnectionsList from './ConnectionsList';



export default StackNavigator({
  userProfile: {
    screen: UserProfile,
    navigationOptions : () => ({
    }),
  },

  connectionsList: {
    screen: ConnectionsList,
    navigationOptions : () => ({
      title: 'Connect to partners',
    }),
  },

  videoCall : {
    screen: VideoCall,
    navigationOptions: () => ({
      title: 'Video Call',
    })
  },

});