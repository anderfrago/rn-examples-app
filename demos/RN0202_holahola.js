import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greeting from './rn0202_components/Greeting';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

export function RN0202_holahola() {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Ione' />
      <Greeting name='Pedro' />
      <Greeting name='Sarah' />
    </View>
  );
}


