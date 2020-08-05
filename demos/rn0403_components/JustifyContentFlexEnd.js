import React from 'react';
import { View } from 'react-native';

export default JustifyContentFlexEnd = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    );
};