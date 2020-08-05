import React from 'react';
import { View } from 'react-native';

export default FlexNoWrap = () => {
    return (
      <View style={{
        flexDirection: 'column',    
        alignContent: 'flex-end',  
        flexWrap: 'nowrap',  
      }}>
        <View style={{width: 50, height: 125, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 125, backgroundColor: 'orange'}} />
        <View style={{width: 50, height: 125, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 125, backgroundColor: 'blue'}} />
        <View style={{width: 50, height: 125, backgroundColor: 'teal'}} />
        <View style={{width: 50, height: 125, backgroundColor: 'purple'}} />
        <View style={{width: 50, height: 125, backgroundColor: 'black'}} />
      </View>
    );
};