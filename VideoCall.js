import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import {ActionButton} from 'react-native-action-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outerCircle: {
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: 'white',
  },
  innerCircle: {
    borderRadius: 35,
    width: 70,
    height: 70,
    margin: 5,
    backgroundColor: 'black'
  },
});

class VideoCall extends Component {

  constructor(props) {
    super(props);
    this.apiKey = '46213212';
    this.sessionId = '1_MX40NjIxMzIxMn5-MTU0MDkyNjQ0NTgyNH5NZzMvdVBmRHRqa2JORUFOWldDdUNOa1l-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjIxMzIxMiZzaWc9Y2ViZmJhZjVlOWU4NTE5MjVlZDIzNDczMmVlMTQ3ZjZiZmE2Yzk0YzpzZXNzaW9uX2lkPTFfTVg0ME5qSXhNekl4TW41LU1UVTBNRGt5TmpRME5UZ3lOSDVOWnpNdmRWQm1SSFJxYTJKT1JVRk9XbGREZFVOT2ExbC1mZyZjcmVhdGVfdGltZT0xNTQwOTI2NDY3Jm5vbmNlPTAuMDM4MzM0NTgxODU2NzUyODcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU0MTUzNDg2NiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

    this.publisherProperties = {
      publishAudio: true,
      cameraPosition: 'front',
      name: 'TEST',
      insertMode: 'append',
      nameDisplayMode: 'on',
      buttonDisplayMode: 'on',
      fitMode: 'cover',
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.outerCircle}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher 
            style={styles.selfVideo}
            properties={this.publisherProperties}
          />
          <OTSubscriber style={{ width: 300, height: 300 }} />
        </OTSession>
        <ActionButton
          key="fab"
          onPress={this.handleVideoCallEvent}
          buttonColor="rgba(231,76,60,1)"
        />

        </View>
      </View>
    );

      
  }
}

export default VideoCall;
