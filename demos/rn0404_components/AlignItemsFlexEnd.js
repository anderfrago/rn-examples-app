import React from 'react';
import { View } from 'react-native';

export default AlignItemsFlexEnd = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        <View style={{width: 25, height: 25, backgroundColor: 'red'}} />
        <View style={{width: 25, height: 25, backgroundColor: 'orange'}} />
        <View style={{width: 25, height: 25, backgroundColor: 'green'}} />
      </View>
    );
};