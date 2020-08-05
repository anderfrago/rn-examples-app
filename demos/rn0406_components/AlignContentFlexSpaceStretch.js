import React from 'react';
import { View } from 'react-native';

export default AlignContentFlexSpaceStretch = () => {
    return (
      <View style={{
        flexDirection: 'column',    
        alignContent: 'stretch',  
        flexWrap: 'wrap',  
      }}>
        <View style={{ height: 125, backgroundColor: 'red'}} />
        <View style={{ height: 125, backgroundColor: 'orange'}} />
        <View style={{ height: 125, backgroundColor: 'green'}} />
        <View style={{ height: 125, backgroundColor: 'blue'}} />
        <View style={{ height: 125, backgroundColor: 'teal'}} />
        <View style={{ height: 125, backgroundColor: 'purple'}} />
        <View style={{ height: 125, backgroundColor: 'black'}} />
      </View>
    );
};