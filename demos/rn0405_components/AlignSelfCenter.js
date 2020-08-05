import React from 'react';
import { View } from 'react-native';

export default AlignSelfCenter = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
       // alignContent: 'center',
      }}>
        <View style={{alignSelf: 'center', width: 25, height: 25, backgroundColor: 'red'}} />
        <View style={{width: 25, height: 25, backgroundColor: 'orange'}} />
        <View style={{width: 25, height: 25, backgroundColor: 'green'}} />
      </View>
    );
};