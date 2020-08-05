import React from 'react';
import { View } from 'react-native';

export default FlexWrap = () => {
    return (
      <View style={{
        flexDirection: 'column',    
        position: 'absolute',   
      }}>
        <View style={{ top: 20, left: 10, 
          width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{ top: 10, left: 20, 
          width: 50, height: 50, backgroundColor: 'orange'}} />
        <View style={{ top: 5, left: 30, 
          width: 50, height: 50, backgroundColor: 'green'}} />       
      </View>
    );
};