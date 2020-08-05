import React from 'react';
import { View } from 'react-native';

export default AlignSelfStretch = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        // alignContent: 'stretch',
      }}>
        <View style={{ alignSelf: 'stretch', height: 25, backgroundColor: 'red'}} />
        <View style={{ height: 25, backgroundColor: 'orange'}} />
        <View style={{ height: 25, backgroundColor: 'green'}} />
      </View>
    );
};