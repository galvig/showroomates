
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight, TextInput
} from 'react-native';
import {saveProfile, getSelfProfile} from './api';


const styles = StyleSheet.create ({
  fieldContainer: {
      marginTop:20,
      marginBottom: 20,
      backgroundColor: 'white'
  },
  text: {
      height: 40,
      margin: 0,
      marginRight: 7,
      paddingLeft: 10,
  },
  button: {
      height: 50,
      backgroundColor: "#48BBEC",
      alignSelf: 'stretch',
      margin: 10,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
  },
  buttonText: {
      color: "#fff",
      fontSize: 18,
  },
  borderTop: {
      borderColor: 'grey',
      borderTopWidth: 0.8,
  },
})

class UserProfile extends Component {
  state = {
    name: null,
    subject: null,
    location: null,
    role: null,
    phone: null,
    stateChanged:false,
  }

  componentDidMount() {
    this.props.navigation.addListener ( 'didFocus' , () => {
      getSelfProfile()
      .then(profile => { 
        this.setState( {
          name:profile.name, 
          location:profile.location,
          subject: profile.subject,
          role: profile.role,
          phone: profile.phone,
          stateChanged: false
        });})        
    });

  }

  onPressSave = () => {
    if (!this.isRegistered()) {
      this.props.navigation.navigate('connectionsList') ;
      saveProfile(this.state)
      .then(this.setState({stateChanged:false}));
    } else {
      this.props.navigation.navigate('connectionsList');
    }
  }
 
  isRegistered() {
    return !(this.state.name == '' || this.state.name == null) && !this.state.stateChanged;
  }

  handleChangeName = (value) => {
      this.setState({name: value, stateChanged:true});
  }
  handleChangeLocation = (value) => {
      this.setState({location: value, stateChanged:true});
  }
  handleChangeSubject = (value) => {
    this.setState({subject: value, stateChanged:true});
  }
  handleChangeRole = (value) => {
      this.setState({role: value, stateChanged:true});
  }
  handleChangePhone = (value) => {
    this.setState({phone: value, stateChanged:true});
}

  saveConnectButton() {
    btnLabel= this.isRegistered() ? 'Connect' : 'register';

    return (
      <TouchableHighlight
        onPress={this.onPressSave}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{btnLabel}</Text>
      </TouchableHighlight>
    ) 
  }

  render() {
  return (
    <View style={{ flex: 1 }} >
      <View style={styles.fieldContainer} >
        <TextInput
            style={styles.text}
            placeholder="Your name"
            spellCheck={false}
            value={this.state.name}
            onChangeText={this.handleChangeName}
        />
        <TextInput
            style={styles.text}
            placeholder="Your requested business"
            spellCheck={false}
            value={this.state.subject}
            onChangeText={this.handleChangeSubject}
        />
        <TextInput
            style={styles.text}
            placeholder="Your location"
            spellCheck={false}
            value={this.state.location}
            onChangeText={this.handleChangeLocation}
        />
        <TextInput
            style={styles.text}
            placeholder="Are you a business or a client ?"
            spellCheck={false}
            value={this.state.role}
            onChangeText={this.handleChangeRole}
        />
        <TextInput
            style={styles.text}
            placeholder="Your phone number"
            spellCheck={false}
            value={this.state.phone}
            onChangeText={this.handleChangePhone}
        />
      </View>
      {this.saveConnectButton()}      
      </View>
    )
  }
}

export default UserProfile;
