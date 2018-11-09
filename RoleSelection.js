import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native';

import { Button} from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};

class RoleSelection extends Component {
  state = {
    role: 'none',
  }

  onPressBusiness() {
    this.setState({role: 'business'});
    this.props.navigation.navigate('BusinessProfile');
  }

  onPressClient() {
    this.setState({role: 'client'});
    this.props.navigation.navigate('ClientProfile');
  }


  render() {
    return (
      <ImageBackground
        source={require('./images/logo.jpg')}
        resizeMode='cover'
        style={{ flex:1, flexDirection: 'column', justifyContent: 'center', 
                alignItems: 'stretch', width:'100%', height:'100%'}}
      >
        <Button
          raised
          rounded
          large
          title={'I\'m a business'}
          buttonStyle={{alignSelf: 'flex-start', flexBasis: '20%', width: '90%', backgroundColor: '#6666ff'}}
          textStyle={{fontSize: 20, fontWeight:'bold', color:'palevioletred'}}
          onPress={() => this.onPressBusiness()}
          containerStyle={{backgroundColor: 'red'}}
        />         
        <View style={{ flexBasis: '10%'}} />
        <Button
          raised
          rounded
          large
          title={'I\'m a client'}
          buttonStyle={{alignSelf: 'flex-end', flexBasis: '20%', width: '90%', backgroundColor: '#ff6666'}}
          textStyle={{fontSize: 20, fontWeight:'bold', color:'darkblue'}}
          onPress={() => this.onPressClient()}
        />

      </ImageBackground>
    )
  }
}


export default RoleSelection;
