import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export  class RN0543_image extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/brujula.jpg')}
        />
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.logo}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}

