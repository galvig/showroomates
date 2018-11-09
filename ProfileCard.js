import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 7,
    textAlign: 'left',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  details: {
    width: '25%',
    flex: 1,
  },
  detailsText: {
    fontSize: 40,
    textAlign: 'center',
  },
  detailsLabel: {
    fontSize: 13,
    fontWeight: '100',
    color: '#a3a3a3',
    textAlign: 'center',
    paddingTop: 0,
  },

});

export default function ProfileCard() {
  
return (
    // <View style={styles.card}>
    //     <View style={styles.cardHeader}>
    //         <Text style={styles.title}>{profile.name}</Text>
    //     </View>

    //     <View style={styles.detailsContainer}>
    //         <View style={styles.details} >
    //             <Text style={styles.detailsLabel}>From </Text>
    //             <Text style={styles.detailsText}>{profile.location}</Text>
    //         </View>
    //         <View style={styles.details} >
    //             <Text style={styles.detailsLabel}> interested in </Text>
    //             <Text style={styles.detailsText}>{profile.subject}</Text>
    //         </View>
    //     </View>
    // </View>
<View/>
    )
}

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // subject: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    // role: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired
  }),
};
