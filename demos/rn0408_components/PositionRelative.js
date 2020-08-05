import React from 'react';
import { View } from 'react-native';

export default PositionRelative = () => {
    return (
      <View style={{
        flexDirection: 'column',     
        position: 'relative',  
      }}>
        <View style={{ top: 10, left: 10, 
          width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{ top: 30, left: 20, 
          width: 50, height: 50, backgroundColor: 'orange'}} />
        <View style={{ top: 30, left: 30, 
          width: 50, height: 50, backgroundColor: 'green'}} />      
      </View>
    );
};