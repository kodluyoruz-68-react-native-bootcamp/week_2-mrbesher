import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

function EmptyList(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ghost.png')} style={styles.ghost} />
      <Text style={styles.info}>Nothing here but crickets!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghost: {
    tintColor: '#dee2e6',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
  },
  info: {
    color: '#adb5bd',
    fontSize: 20,
  }
});

export {EmptyList};
