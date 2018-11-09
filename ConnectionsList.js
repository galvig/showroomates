import React, {  Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {getProfiles} from './api';

const styles = StyleSheet.create({
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

});

var tempCheckValues = [];

class ConnectionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      checkBoxChecked: []
    }
  }
  
  componentDidMount() {
    this.props.navigation.addListener ( 'didFocus' , () => {
      getProfiles()
      .then(profiles=>this.setState({profiles: profiles}));
    });
  }

  checkBoxChanged(id, value) {

    this.setState({ checkBoxChecked: tempCheckValues });

    var tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[id] = !value;

    this.setState({ checkBoxChecked: tempCheckBoxChecked });
  }

  onPressVideoCall = () => {
    var tempProfiles = [];
    var profiles = this.state.profiles;
    this.state.checkBoxChecked.map(function (x,i) {
      var elem = profiles[i];
      if (x) tempProfiles = {...tempProfiles,elem};
    });
    this.props.navigation.navigate('videoCall', {profiles: profiles,})
  }

  createListView() {
    return (
      this.state.profiles.map((item,i) => {
        return (
          <View key={i} style={{ flexDirection: 'column' }}>
            <CheckBox
                title={item.name +' from '+item.location+', interested in '+item.subject}
                checked={this.state.checkBoxChecked[i]}
                onPress={() => this.checkBoxChanged(i, this.state.checkBoxChecked[i])}
            />
          </View>
        )
      })
    )
  }

  render() {
    return [
      this.createListView(),
      <TouchableHighlight
        onPress={this.onPressVideoCall}
        style={styles.button}
      >
          <Text style={styles.buttonText}>Video Call</Text>
      </TouchableHighlight>
    ]
  } 
}
export default ConnectionsList;