import React, { Component } from 'react';
import { View } from 'react-native';

export function RN0401_flexlayouts() {
    return (
      <View style={{flex: 1}}>
        <View style={{
          flex: 1, backgroundColor: 'red'}} />
        <View style={{
          flex: 2,backgroundColor: 'orange'}} />
        <View style={{
          flex: 3, backgroundColor: 'green'}} />
      </View>
    );
}