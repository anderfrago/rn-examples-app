import React from 'react';
import { View } from 'react-native';

export default AlignItemsStretch = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <View style={{ height: 25, backgroundColor: 'red'}} />
        <View style={{ height: 25, backgroundColor: 'orange'}} />
        <View style={{ height: 25, backgroundColor: 'green'}} />
      </View>
    );
};